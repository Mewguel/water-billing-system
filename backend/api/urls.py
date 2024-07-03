from django.urls import path
from . import views

urlpatterns = [
    path("bills/", views.BillListCreate.as_view(), name="bill-list"),
    path("bills/delete/<int:pk>",
         views.BillDelete.as_view(),
         name="delete-bill"),
    path('bills/<int:pk>/update/',
         views.BillUpdate.as_view(),
         name='bill-update'),
    path('bills/<int:pk>/update-receipt/',
         views.BillReceiptUpdate.as_view(),
         name='bill-update-receipt'),
    path("bills/<int:pk>/",
         views.BillDetail.as_view(),
         name="bill-detail"),
    path("activate/<str:uidb64>/<str:token>/",
         views.activate,
         name="activate"),
    path('check-admin-status/',
         views.check_admin_status,
         name='check_admin_status'),
    path('user/profile/',
         views.UserProfileView.as_view(),
         name='user-profile'),
]
