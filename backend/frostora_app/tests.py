# Frostora Backend Tests
# Run with: python manage.py test

from django.test import TestCase
from django.contrib.auth.models import User
from django.core.files.uploadedfile import SimpleUploadedFile
from rest_framework.test import APITestCase
from frostora_app.models import IceCreamFlavor, TeamMember, ContactMessage, Career, JobApplication, Event


class IceCreamFlavorTestCase(TestCase):
    def setUp(self):
        IceCreamFlavor.objects.create(
            name='Test Flavor',
            description='A test flavor',
            ingredients='Test ingredient',
            category='signature',
            is_featured=True
        )

    def test_flavor_creation(self):
        flavor = IceCreamFlavor.objects.get(name='Test Flavor')
        self.assertEqual(flavor.category, 'signature')
        self.assertTrue(flavor.is_featured)

    def test_flavor_str(self):
        flavor = IceCreamFlavor.objects.get(name='Test Flavor')
        self.assertEqual(str(flavor), 'Test Flavor')


class TeamMemberTestCase(TestCase):
    def setUp(self):
        TeamMember.objects.create(
            name='John Doe',
            position='CEO',
            email='john@example.com',
            bio='Test bio'
        )

    def test_team_member_creation(self):
        member = TeamMember.objects.get(name='John Doe')
        self.assertEqual(member.position, 'CEO')
        self.assertEqual(member.email, 'john@example.com')


class ContactMessageTestCase(TestCase):
    def setUp(self):
        ContactMessage.objects.create(
            name='Test User',
            email='test@example.com',
            subject='Test Subject',
            message='Test message content'
        )

    def test_contact_message_creation(self):
        message = ContactMessage.objects.get(name='Test User')
        self.assertEqual(message.subject, 'Test Subject')
        self.assertFalse(message.is_read)


class CareerTestCase(TestCase):
    def setUp(self):
        Career.objects.create(
            title='Developer',
            position='Senior Developer',
            location='Bengaluru',
            job_type='full_time',
            description='Test job description',
            requirements='Test requirements'
        )

    def test_career_creation(self):
        career = Career.objects.get(title='Developer')
        self.assertEqual(career.job_type, 'full_time')
        self.assertTrue(career.is_active)


class JobApplicationApiTestCase(APITestCase):
    def test_application_creation(self):
        resume = SimpleUploadedFile('resume.pdf', b'%PDF-1.4 test resume', content_type='application/pdf')
        response = self.client.post('/api/applications/', {
            'name': 'Test Applicant',
            'email': 'applicant@example.com',
            'phone': '+91 98765 43210',
            'position': 'Lead Quality Analyst',
            'message': 'Five years of food quality experience.',
            'resume': resume,
        }, format='multipart')

        self.assertEqual(response.status_code, 201)
        self.assertEqual(JobApplication.objects.count(), 1)


class EventTestCase(TestCase):
    def setUp(self):
        Event.objects.create(
            title='Test Event',
            description='Test event description',
            features='Feature 1, Feature 2',
            pricing=1000.00
        )

    def test_event_creation(self):
        event = Event.objects.get(title='Test Event')
        self.assertEqual(event.pricing, 1000.00)
