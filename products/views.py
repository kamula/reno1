from unicodedata import category
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .products import products
from . models import Product, ProductCategory
from .serializers import ProductCategorySerializer,ProductSerializer

# Create your views here.
@api_view(['GET'])
def get_routes(request):
    routes=[
        "api/categories",
        "api/products",
        "api/products/upload",
        "api/products/top",
        "api/products/delete/id",
        "api/products/<update>/id",
        "api/products/create/id",
    ]
    return Response(routes)
@api_view(['GET'])
def get_product_categories(request):
    '''get product categories'''
    categories = ProductCategory.objects.all()
    serializer = ProductCategorySerializer(categories,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_products(request,id):
    products = Product.objects.filter(category=id)
    serializer = ProductSerializer(products,many=True)    
    return Response(serializer.data)

@api_view(['GET'])
def get_product(request,pk):
    product = Product.objects.get(id = pk)
    serializer = ProductSerializer(product)
    return Response(serializer.data)