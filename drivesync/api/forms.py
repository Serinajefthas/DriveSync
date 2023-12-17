from django import forms 
from django.contrib.auth.forms import UserCreationForm
from .models import CompanyProfile, User

class UserCreationForm(UserCreationForm): #django feature that creates User
    is_company = forms.BooleanField(required=False)

    class Meta(UserCreationForm.Meta):
        model = User

        def save(self, commit=True):
            user = super().save(commit=False)
            # sets value of is_company attribute for user created
            # self.cleaned_data is dict containing form data
            user.is_company = self.cleaned_data.get('is_company', False)
            if commit:
                user.save()
            return user