from django.contrib import admin
from .models import IceCreamFlavor, TeamMember, ContactMessage, Career, JobApplication, Event


@admin.register(IceCreamFlavor)
class IceCreamFlavorAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'is_featured', 'created_at']
    list_filter = ['category', 'is_featured', 'created_at']
    search_fields = ['name', 'description']


@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ['name', 'position', 'email', 'created_at']
    list_filter = ['position', 'created_at']
    search_fields = ['name', 'email']


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'subject', 'is_read', 'created_at']
    list_filter = ['is_read', 'created_at']
    search_fields = ['name', 'email', 'subject']
    readonly_fields = ['created_at', 'name', 'email', 'phone', 'subject', 'message']


@admin.register(Career)
class CareerAdmin(admin.ModelAdmin):
    list_display = ['title', 'position', 'location', 'job_type', 'is_active', 'created_at']
    list_filter = ['job_type', 'is_active', 'created_at']
    search_fields = ['title', 'position', 'location']


@admin.register(JobApplication)
class JobApplicationAdmin(admin.ModelAdmin):
    list_display = ['name', 'position', 'email', 'is_reviewed', 'created_at']
    list_filter = ['position', 'is_reviewed', 'created_at']
    search_fields = ['name', 'email', 'phone', 'position']
    readonly_fields = ['created_at', 'name', 'email', 'phone', 'position', 'message', 'resume']


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ['title', 'pricing', 'created_at']
    list_filter = ['created_at']
    search_fields = ['title', 'description']
