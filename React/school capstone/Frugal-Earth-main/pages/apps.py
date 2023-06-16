from django.apps import AppConfig
import os
from django.conf import settings

class PagesConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'pages'
    path = os.path.join(settings.BASE_DIR, 'pages')
