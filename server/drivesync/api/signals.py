from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from .models import CompanyProfile

# signals used to perform additional actions (above djangos default user creation views & forms)
# when want extend or customize behaviour of new user
@receiver(post_save, sender=User)
def create_company_profile(sender, instance, created):
    if created and instance.is_company:
        CompanyProfile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_company_profile(sender, instance):
    instance.companyprofile.save()