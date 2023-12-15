from django.contrib import admin
from userauth.models import User, Profile
#Register models
class UserAdmin(admin.ModelAdmin):
    search_fields = ['fullName', 'username', 'phone', 'email']
    list_display = ['fullName', 'username', 'phone', 'email', 'user_id']

class ProfileAdmin(admin.ModelAdmin):
    search_fields = ['fullName', 'user__username', 'phone', 'email']
    list_display = ['fullName', 'user', 'phone', 'email', 'country'] #user displays fullname

admin.site.register(User, UserAdmin)
admin.site.register(Profile, ProfileAdmin)