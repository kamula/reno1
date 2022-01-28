from unicodedata import name
from django.urls import path
from . import views

urlpatterns = [
    path('categories',views.get_product_categories,name="get_product_categories"),
    path('categories/<uuid:id>',views.get_products,name="get_products"),
    path('<uuid:pk>',views.get_product,name="get_product"),
]
