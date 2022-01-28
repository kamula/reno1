import uuid
from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager

class AccountManager(BaseUserManager):
    def create_user(self, first_name,last_name,email, phone_number,password=None):
        if not first_name:
            raise ValueError('first name required')
        if not last_name:
            raise ValueError('last name required')
        if not email:
            raise ValueError('email required')
        if not phone_number:
            raise ValueError('phone number required')
        user = self.model(
            first_name = first_name,
            last_name = last_name,
            email = self.normalize_email(email),
            phone_number = phone_number,
        )
        user.set_password(password)
        user.save(using = self._db)
        return user
    def create_superuser(self, first_name,last_name,email, phone_number,password):
        user = self.create_user(
            first_name=first_name,
            last_name=last_name,
            email= self.normalize_email(email),
            phone_number = phone_number,
            password=password
        )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user



class Account(AbstractBaseUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.EmailField(max_length=254, unique=True)
    phone_number = models.CharField(max_length=20, unique=True)
    date_joined = models.DateTimeField(
        verbose_name='date joined', auto_now_add=True)
    last_login = models.DateTimeField(verbose_name='last login', auto_now=True)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name','last_name','phone_number']

    def __str__(self):
        return self.first_name
        
    objects = AccountManager()

    def __str__(self):
        return self.email

    # For checking permissions. to keep it simple all admin have ALL permissons

    def has_perm(self, perm, obj=None):
        return self.is_admin

    # Does this user have permission to view this app?
    def has_module_perms(self, app_label):
        return True