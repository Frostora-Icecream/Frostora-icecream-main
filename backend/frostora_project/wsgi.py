"""
WSGI config for frostora_project project.
"""
import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'frostora_project.settings')

application = get_wsgi_application()
