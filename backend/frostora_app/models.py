from django.db import models


class IceCreamFlavor(models.Model):
    """Model for ice cream flavors"""
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='flavors/')
    ingredients = models.TextField()
    category = models.CharField(
        max_length=50,
        choices=[
            ('signature', 'Signature'),
            ('premium', 'Premium'),
            ('seasonal', 'Seasonal'),
        ],
        default='signature'
    )
    is_featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['-is_featured', '-created_at']


class TeamMember(models.Model):
    """Model for team members"""
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    image = models.ImageField(upload_to='team/')
    bio = models.TextField()
    email = models.EmailField()
    linkedin_url = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.position}"

    class Meta:
        ordering = ['position', 'name']


class ContactMessage(models.Model):
    """Model for contact form messages"""
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    subject = models.CharField(max_length=200)
    message = models.TextField()
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.subject}"

    class Meta:
        ordering = ['-created_at']


class Career(models.Model):
    """Model for job listings"""
    title = models.CharField(max_length=200)
    position = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    job_type = models.CharField(
        max_length=20,
        choices=[
            ('full_time', 'Full Time'),
            ('part_time', 'Part Time'),
            ('internship', 'Internship'),
        ]
    )
    description = models.TextField()
    requirements = models.TextField()
    salary_range = models.CharField(max_length=100, blank=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} - {self.position}"

    class Meta:
        ordering = ['-created_at']


class JobApplication(models.Model):
    """Application submitted for an open or prospective Frostora role."""
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    position = models.CharField(max_length=200)
    message = models.TextField()
    resume = models.FileField(upload_to='applications/%Y/%m/')
    is_reviewed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.position}"

    class Meta:
        ordering = ['-created_at']


class Event(models.Model):
    """Model for events like weddings"""
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='events/')
    features = models.TextField(help_text="Features separated by comma")
    pricing = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_at']
