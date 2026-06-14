from rest_framework import serializers
from .models import IceCreamFlavor, TeamMember, ContactMessage, Career, JobApplication, Event


class IceCreamFlavorSerializer(serializers.ModelSerializer):
    class Meta:
        model = IceCreamFlavor
        fields = ['id', 'name', 'description', 'image', 'ingredients', 'category', 'is_featured', 'created_at']
        read_only_fields = ['id', 'created_at']


class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = ['id', 'name', 'position', 'image', 'bio', 'email', 'linkedin_url', 'created_at']
        read_only_fields = ['id', 'created_at']


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['id', 'name', 'email', 'phone', 'subject', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']


class CareerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Career
        fields = ['id', 'title', 'position', 'location', 'job_type', 'description', 'requirements', 'salary_range', 'is_active', 'created_at']
        read_only_fields = ['id', 'created_at']


class JobApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobApplication
        fields = ['id', 'name', 'email', 'phone', 'position', 'message', 'resume', 'created_at']
        read_only_fields = ['id', 'created_at']

    def validate_resume(self, resume):
        allowed_extensions = ('.pdf', '.doc', '.docx')
        if not resume.name.lower().endswith(allowed_extensions):
            raise serializers.ValidationError('Resume must be a PDF, DOC, or DOCX file.')
        if resume.size > 5 * 1024 * 1024:
            raise serializers.ValidationError('Resume must be 5 MB or smaller.')
        return resume


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'title', 'description', 'image', 'features', 'pricing', 'created_at']
        read_only_fields = ['id', 'created_at']
