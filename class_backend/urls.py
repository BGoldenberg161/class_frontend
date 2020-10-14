"""class_backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from rest_framework.authtoken.views import obtain_auth_token
from django.urls import path, include
from rest_framework import routers
from django.conf.urls import *
from rest_framework.urlpatterns import format_suffix_patterns
from main_app import views
from rest_framework_simplejwt import views as jwt_views


admin.autodiscover()
router = routers.DefaultRouter()
# router.register(r'_', views._View, '_')

urlpatterns = [
    path('', views.index, name='index'),
    url(r'^admin/', admin.site.urls),
    url(r'^api/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    url(r'^login/', jwt_views.TokenObtainPairView.as_view(),
        name='token_obtain_pair'),
    url(r'^hello/', views.HelloView.as_view(), name="hello"),
    url(r'^signup/', views.Signup.as_view())
]

urlpatterns += format_suffix_patterns([
    url(r'^api/student/$',
        views.StudentRecordView.as_view(),
        name='student_list'),
    url(r'^api/teacher/$',
        views.TeacherRecordView.as_view(),
        name='teachers_list'),
    url(r'^api/user/(?P<pk>[0-9]+)/',
        views.UserRecordView.as_view(),
        name='user'),
    url(r'^api/users/$',
        views.UsersRecordView.as_view(),
        name='users_list'),
    url(r'^api/classroom/(?P<pk>[0-9]+)/',
        views.ClassroomRecordView.as_view(),
        name='classroom'),
    url(r'^api/classrooms/$',
        views.ClassroomsRecordView.as_view(),
        name='classrooms'),
    url(r'^api/assignment/(?P<pk>[0-9]+)/',
        views.AssignmentRecordView.as_view(),
        name='assignment'),
    url(r'^api/assignments/$',
        views.AssignmentsRecordView.as_view(),
        name='assignments'),
    url(r'^api/students-classrooms/$',
        views.StudentsClassroomsRecordView.as_view(),
        name='students-classrooms'),
    url(r'^api/view-classrooms-assignments/(?P<pk>[0-9]+)/',
        views.ClassroomsAssignmentsRecordView.as_view(),
        name='view-classrooms-assignments'),
    url(r'^api/create-classrooms-assignments/',
        views.CreateClassroomsAssignmentsView.as_view(),
        name='create-classrooms-assignments'),
    url(r'^api/classrooms-assignments-modal/(?P<pk>[0-9]+)/$',
        views.SingleClassesAssignmentsView.as_view(),
        name='single-classes-assignments'),
    url(r'^api/students-classrooms/(?P<pk>[0-9]+)/$',
        views.StudentsInClassrooms.as_view(),
        name='students-in-classrooms'),

])
