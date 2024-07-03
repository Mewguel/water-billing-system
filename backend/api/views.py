import os
from django.shortcuts import redirect
from django.contrib.sites.shortcuts import get_current_site
from django.contrib import messages
# from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.core.mail import EmailMessage
from django.contrib.auth import get_user_model
from django.urls import reverse
from django.db import transaction
from django.core.exceptions import ValidationError

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.exceptions import APIException, NotFound

from custom_user.models import User
from .models import Bill

from .serializers import UserSerializer, BillSerializer
from .serializers import BillReceiptUpdateSerializer
# from backend.forms import RegistrationForm
from backend.tokens import account_activation_token


# Create your views here.
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        try:
            with transaction.atomic():
                validated_data = serializer.validated_data
                user = User(
                    email=validated_data['email'],
                    firstname=validated_data.get('firstname', ''),
                    lastname=validated_data.get('lastname', ''),
                    username=validated_data.get('username', ''),
                    address=validated_data.get('address', ''),
                    is_active=False
                )
                user.set_password(validated_data['password'])
                user.save()
                self.send_activation_email(user)
        except Exception as e:
            raise ValidationError({"detail": str(e)})

    def send_activation_email(self, user):
        current_site = get_current_site(self.request)
        mail_subject = "Activate your account"
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        token = account_activation_token.make_token(user)
        activation_link = (
            f"http://{current_site.domain}"
            f"{reverse('activate', kwargs={'uidb64': uid, 'token': token})}"
        )

        message = f"""
        Hi {user.firstname},

        Thank you for registering.
        Please click on the link below to activate your account:

        {activation_link}

        If you did not register for this account, please ignore this email.
        """
        to_email = user.email
        email = EmailMessage(mail_subject, message, to=[to_email])
        email.send()


class UserProfileView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user


class BillListCreate(generics.ListCreateAPIView):
    serializer_class = BillSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Bill.objects.filter(author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)


class BillUpdate(generics.UpdateAPIView):
    serializer_class = BillSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Bill.objects.filter(author=user)


class BillDelete(generics.DestroyAPIView):
    serializer_class = BillSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Bill.objects.filter(author=user)


class BillReceiptUpdate(generics.UpdateAPIView):
    serializer_class = BillReceiptUpdateSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Bill.objects.filter(author=user)

    def get_object(self):
        billid = self.kwargs['pk']
        try:
            bill = Bill.objects.get(pk=billid, author=self.request.user)
            return bill
        except Bill.DoesNotExist:
            raise NotFound("Bill not found.")
        except Exception as e:
            raise APIException(f"Error: {str(e)}")

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance,
                                         data=request.data,
                                         partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)


class BillDetail(generics.RetrieveAPIView):
    queryset = Bill.objects.all()
    serializer_class = BillSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        bill_id = self.kwargs.get('pk')
        try:
            bill = Bill.objects.get(pk=bill_id, author=self.request.user)
            return bill
        except Bill.DoesNotExist:
            raise NotFound("Bill not found.")
        except Exception as e:
            raise APIException(f"Error: {str(e)}")


def activate(request, uidb64, token):
    User = get_user_model()
    current_site = get_current_site(request).domain

    frontend_port = os.getenv('PORT', '5173')
    frontend_url = f"{current_site}:{frontend_port}"

    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except (TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None

    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.save()

        # login(request, user)  # TODO: check if we can remove this

        messages.success(request, "Your account has been activated!")
        return redirect(reverse(f"{frontend_url}/login"))
    else:
        messages.error(request, "Expired or Invalid Activation Link")
        return redirect(reverse("index"))


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def check_admin_status(request):
    user_info = {
        'is_admin': request.user.is_staff,
        'username': request.user.username,
        'email': request.user.email,
    }
    return Response(user_info)
