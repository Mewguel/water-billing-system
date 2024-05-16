from django.urls import path
from . import views

urlpatterns = [
    path("bills/", views.BillListCreate.as_view(), name="bill-list"),
    path("bills/delete/<int:pk>",
         views.BillDelete.as_view(),
         name="delete-bill"),
]
