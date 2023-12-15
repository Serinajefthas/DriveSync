from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import AbstractUser
from shortuuidfield import ShortUUIDField
from django.core.validators import RegexValidator

#Create models

class User(AbstractUser): #inherits from abstract user, built-in django auth user package
    user_id = ShortUUIDField(primary_key=True, max_length=15, help_text='User UUID', blank=False, null=False)
    fullName = models.CharField(max_length=30)
    username = models.CharField(max_length=30, unique=True)
    email = models.EmailField(max_length=50, unique=True)
    phone = models.CharField(max_length=20)
    # for user authentication
    #otp = models.CharField(max_length=50, null=True, blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        """Represent user with unique user_id"""
        return self.fullName #user_id

class Profile(models.Model):
    #image = models.FileField(upload_to="image")
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    fullName = models.CharField(max_length=20)
    email = models.EmailField(max_length=50, unique=True, null=False, blank=False)
    phone = models.CharField(max_length=20, null=True, blank=True)
    country = models.CharField(max_length=50, null=True, blank=True)
    city = models.CharField(max_length=50, null=True, blank=True)
    address = models.CharField(max_length=50, null=True, blank=True)

    # verification
    #id_type = models.CharField(max_length=50, choices=ID_TYPE, null=False, blank=False)
    # id_image = models.FileField(upload_to="image")

    #wallet = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    #verified = models.BooleanField(default=False)
    # date & time profile was created
    date = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['fullName']

    def __str__(self):
        if self.fullName:
            return "self.{}".format(fullName)
        else:
            return "Error: No fullname" #fullname cannot be blank

#django signals send and receive notifications when data model is updated/saved/changed/removed etc
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

def save_profile(sender, instance, **kwargs):
    instance.profile.save()

post_save.connect(create_profile, sender=User)
post_save.connect(save_profile, sender=User)
