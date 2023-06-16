from django.shortcuts import render, redirect
from django.db.models import Q
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm
from .models import Room, Category, Message, User, Report
from .forms import RoomForm, UserForm, ReportForm
from .forms import CreateUserForm


def learn(request):
    return render(request, 'pages/learn.html')

def aboutUs(request):
    return render(request, 'pages/about.html')

def home(request):
    return render(request, 'pages/index.html')

def feeds(request):
    q = request.GET.get('q') if request.GET.get('q') != None else ''
    rooms = Room.objects.filter(
        Q(category__name__icontains=q) |
        Q(name__icontains=q) |
        Q(notes__icontains=q)
    )
    categories = Category.objects.all()
    room_count = rooms.count()
    room_messages = Message.objects
    context = {'rooms': rooms, 'categories':categories, 'room_count': room_count}
    return render(request, 'feed.html', context, )

def signin(request):
    if request.user.is_authenticated:
        return redirect('feeds')
    if request.method == 'POST':
        username = request.POST.get('username').lower()
        password = request.POST.get('password')
        try:
           user = User.objects.get(username=username)
        except:
           messages.error(request, 'Username invalid')
        user= authenticate(request, username=username, password=password)
        if user is not None:
           login(request, user)
           return redirect('feeds')
        else:
            messages.error(request, 'Invalid username or Password')
    return render(request, 'pages/signin.html')

def signout(request):
    logout(request)
    return redirect('home')

def signup(request):
    form = CreateUserForm()
    if request.method == 'POST':
        form = CreateUserForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.username = user.username.lower()
            user.save()
            login(request, user)
            return redirect('feeds')
        else:
            messages.error(request, 'An error occured during registration')
    return render(request, "pages/signup.html", {"form":form})

@login_required(login_url='signin')
def createRoom(request):
    form = RoomForm()
    if request.method == 'POST':
        form = RoomForm(request.POST, request.FILES)
        if form.is_valid():
           room = form.save(commit=False)
           room.host = request.user
           room.save()
           return redirect('feeds')
    context={'form':form}
    return render(request, 'pages/room_form.html', context)

def room(request, pk):
    room = Room.objects.get(id=pk)
    room_messages = room.message_set.all().order_by('-created')
    if request.method == 'POST':
        message = Message.objects.create(
            user=request.user,
            room=room,
            body=request.POST.get('body')
        )
        return redirect('room', pk=room.id)
    context={'room': room, 'room_messages':room_messages}
    return render(request, 'pages/room.html', context)


def userProfile(request, pk):
    user = User.objects.get(id=pk)
    rooms = user.room_set.all()
    context = {'user':user, 'rooms':rooms}
    return render(request, 'pages/profile.html', context)

@login_required(login_url='signin')
def updateUser(request):
    user = request.user
    form = UserForm(instance=user)
    if request.method == 'POST':
        form = UserForm(request.POST, request.FILES, instance=user)
        if form.is_valid():
            form.save()
            return redirect('user-profile', pk=user.id)
    return render(request, 'pages/update_profile.html', {'form':form})

@login_required(login_url='signin')
def updateRoom(request, pk):
    room = Room.objects.get(id=pk)
    form = RoomForm(instance=room)
    if request.user != room.host:
        return HttpResponse('Post can only be edited by post owner')
    if request.method == 'POST':
        form = RoomForm(request.POST, request.FILES, instance=room)
        if form.is_valid():
            form.save()
            return redirect('feeds')
    context = {'form': form}
    return render(request, 'pages/room_form.html', context)

@login_required(login_url='signin')
def deleteRoom(request, pk):
    room = Room.objects.get(id=pk)
    if request.user != room.host:
        return HttpResponse('Only the post owner can delete this post')
    if request.method == 'POST':
        room.delete()
        return redirect('feeds')
    return render(request, 'pages/delete.html', {'obj':room})

@login_required(login_url='signin')
def deleteMessage(request, pk):
    message = Message.objects.get(id=pk)
    if request.user != message.user:
        return HttpResponse('Only the post owner can delete this post')
    if request.method == 'POST':
        message.delete()
        return redirect('feeds')
    return render(request, 'pages/delete.html', {'obj':message})

def chat(request):
    return render(request, 'pages/chat.html')

def report(request):
    form = ReportForm()
    if request.method == 'POST':
        form = ReportForm(request.POST)
        if form.is_valid():
            report = form.save(commit=False)
            report.user = request.user
            report.save()
            return redirect('feeds')
    return render(request, 'pages/report.html', {"form":form})




