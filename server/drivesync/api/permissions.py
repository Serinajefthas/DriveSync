from rest_framework import permissions

class IsCompany(permissions.BasePermission):
    def has_permission(self, request, view):
        # Check if the user is company
        return request.user.companyprofile.is_company