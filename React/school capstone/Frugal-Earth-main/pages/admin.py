from django.contrib import admin

# Register your models here.

from .models import Category, Message, Room, User, Report, Reason

admin.site.register(User)
admin.site.register(Room)
admin.site.register(Category)
admin.site.register(Message)
admin.site.register(Report)
admin.site.register(Reason)
