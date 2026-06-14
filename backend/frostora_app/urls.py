from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    IceCreamFlavorViewSet,
    TeamMemberViewSet,
    ContactMessageViewSet,
    CareerViewSet,
    JobApplicationViewSet,
    EventViewSet,
)

router = DefaultRouter()
router.register(r'flavors', IceCreamFlavorViewSet)
router.register(r'team', TeamMemberViewSet)
router.register(r'contact', ContactMessageViewSet)
router.register(r'careers', CareerViewSet)
router.register(r'applications', JobApplicationViewSet)
router.register(r'events', EventViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
