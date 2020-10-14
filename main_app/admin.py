from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Classroom, Assignment, Teacher, Student, GradedAssignments

# Register your models here.
admin.site.register(User, UserAdmin)
admin.site.register(Classroom)
admin.site.register(Assignment)
admin.site.register(Teacher)
admin.site.register(Student)
