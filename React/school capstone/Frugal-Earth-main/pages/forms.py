from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from .models import Room, User, Report

class CreateUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = [ 'email', 'username', 'password1', 'password2']

class RoomForm(ModelForm):
    class Meta:
        model = Room
        fields = '__all__'
        exclude = ['host']
        
class UserForm(ModelForm):
        class Meta:
            model = User
            fields = ['name', 'username', 'email', 'avatar']

class ReportForm(ModelForm):
        class Meta:
            model = Report
            fields = '__all__'
            exclude = ['user']


