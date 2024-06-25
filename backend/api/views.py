from django.shortcuts import render, redirect
from django.contrib.sites.shortcuts import get_current_site
from django.contrib import messages
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.core.mail import EmailMessage
from django.contrib.auth import get_user_model, login
from django.urls import reverse
from django.db import transaction
from django.core.exceptions import ValidationError

from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny

from custom_user.models import User
from .models import Bill

from .serializers import UserSerializer, BillSerializer
from backend.forms import RegistrationForm
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


class BillDelete(generics.DestroyAPIView):
    serializer_class = BillSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Bill.objects.filter(author=user)


def index(request):
    messages_to_display = messages.get_message(request)

    return render(request, "index.html", messages_to_display)


def register_user(request):
    form = RegistrationForm()
    if request.method == "POST":
        form = RegistrationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.is_active = False
            user.save()

            current_site = get_current_site(request)
            mail_subject = "Activate your account"
            message = render_to_string("registration/account_activation_email.html",
                                       {"user": user,
                                        "domain": current_site.domain,
                                        "uid": urlsafe_base64_encode(
                                                 force_bytes(user.pk)
                                               ),
                                        "token": account_activation_token.make_token(user),
                                        })
            to_email = form.cleaned_data.get("email")
            email = EmailMessage(mail_subject, message, to=to_email)
            email.send()
            messages.success(request, "Please check your email to activate your account")
            return redirect("index")
    return render("request", "registration/register.html", {"form": form})


def activate(request, uidb64, token):
    User = get_user_model()

    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except (TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None

    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.save()

        login(request, user)  # TODO: check if we can remove this

        messages.success(request, "Your account has been activated!")
        return redirect(reverse("login"))
    else:
        messages.error(request, "Expired or Invalid Activation Link")
        return redirect(reverse("index"))
