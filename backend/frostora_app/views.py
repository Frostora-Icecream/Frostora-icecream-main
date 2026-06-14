from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import IceCreamFlavor, TeamMember, ContactMessage, Career, JobApplication, Event
from .serializers import (
    IceCreamFlavorSerializer,
    TeamMemberSerializer,
    ContactMessageSerializer,
    CareerSerializer,
    JobApplicationSerializer,
    EventSerializer,
)


class IceCreamFlavorViewSet(viewsets.ModelViewSet):
    """API endpoint for ice cream flavors"""
    queryset = IceCreamFlavor.objects.all()
    serializer_class = IceCreamFlavorSerializer

    @action(detail=False, methods=['get'])
    def featured(self, request):
        """Get featured ice cream flavors"""
        featured_flavors = IceCreamFlavor.objects.filter(is_featured=True)
        serializer = self.get_serializer(featured_flavors, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def signature(self, request):
        """Get signature flavors"""
        signature_flavors = IceCreamFlavor.objects.filter(category='signature')
        serializer = self.get_serializer(signature_flavors, many=True)
        return Response(serializer.data)


class TeamMemberViewSet(viewsets.ModelViewSet):
    """API endpoint for team members"""
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer


class ContactMessageViewSet(viewsets.ModelViewSet):
    """API endpoint for contact messages"""
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    http_method_names = ['post', 'get']

    def get_queryset(self):
        if self.request.user.is_staff:
            return ContactMessage.objects.all()
        return ContactMessage.objects.none()


class CareerViewSet(viewsets.ModelViewSet):
    """API endpoint for career listings"""
    queryset = Career.objects.filter(is_active=True)
    serializer_class = CareerSerializer
    http_method_names = ['get']


class JobApplicationViewSet(viewsets.ModelViewSet):
    """Public application submission with staff-only listing."""
    queryset = JobApplication.objects.all()
    serializer_class = JobApplicationSerializer
    http_method_names = ['post', 'get']

    def get_queryset(self):
        if self.request.user.is_staff:
            return JobApplication.objects.all()
        return JobApplication.objects.none()


class EventViewSet(viewsets.ModelViewSet):
    """API endpoint for events"""
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    http_method_names = ['get']
