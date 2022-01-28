import uuid
from django.db import models
from accounts.models import Account


class ProductCategory(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=200, unique=True)
    image = models.ImageField(null=True,blank = True)
    description = models.TextField()
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    creator = models.ForeignKey(Account, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200)
    image = models.ImageField(null=True,blank = True)
    brand = models.CharField(max_length=200)
    category = models.ForeignKey(
        ProductCategory, on_delete=models.SET_NULL, null=True)
    description = models.TextField()
    price = models.DecimalField(max_digits=7, decimal_places=2)
    countInStock = models.IntegerField(null=True, blank=True, default=0)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Order(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    creator = models.ForeignKey(Account, on_delete=models.SET_NULL, null=True)
    paymentMethod = models.CharField(max_length=200)
    taxPrice = models.DecimalField(
        max_digits=7, decimal_places=2, blank=True, null=True)
    shippingPrice = models.DecimalField(
        max_digits=7, decimal_places=2, blank=True, null=True)
    totalPrice = models.DecimalField(
        max_digits=7, decimal_places=2, blank=True, null=True)
    isPaid = models.BooleanField(default=False)
    paidAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    isDelivered = models.BooleanField(default=False)
    deliveredAt = models.DateTimeField(
        auto_now_add=False, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.createdAt)


class OrderItem(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200)
    qty = models.IntegerField(blank=True, null=True, default=0)
    price = models.DecimalField(
        max_digits=7, decimal_places=2, blank=True, null=True)
    image = models.CharField(max_length=200, blank=True, null=True)

    def __str__(self):
        return self.name


class ShippingAddress(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    order = models.OneToOneField(Order, on_delete=models.CASCADE, null=True, blank=True)
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    postalCode = models.CharField(max_length=200)
    country = models.CharField(max_length=200)
    shippingPrice = models.DecimalField(
        max_digits=7, decimal_places=2, blank=True, null=True)

    def __str__(self):
        return self.address
