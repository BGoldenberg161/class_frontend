from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    is_teacher = models.BooleanField(default=False)

    def __str__(self):
        return self.first_name + ' ' + self.last_name + ' ' + str(self.is_teacher)

class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.user.first_name + ' ' + self.user.last_name


class Teacher(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.first_name + ' ' + self.user.last_name

class Assignment(models.Model):
    name = models.CharField(max_length=50)
    url = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class GradedAssignments(models.Model):
    note = models.CharField(max_length=500)
    assignment = models.ForeignKey(Assignment, on_delete=models.CASCADE)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    grade = models.IntegerField()

    def __str__(self):
        return self.note + ' - ' + str(self.grade)

class Classroom(models.Model):
    name = models.CharField(max_length=50)
    gradeLevel = models.IntegerField()
    teacher = models.ForeignKey(to=Teacher, on_delete=models.CASCADE)

    def __str__(self):
        return self.name + ' - ' + str(self.gradeLevel) + ' - ' + self.teacher.user.first_name + ' ' + self.teacher.user.last_name

class StudentsClassrooms(models.Model):
    classroom = models.ForeignKey(Classroom, on_delete=models.CASCADE)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)

class ClassroomsAssignments(models.Model):
    classroom = models.ForeignKey(Classroom, on_delete=models.CASCADE)
    assignment = models.ForeignKey(Assignment, on_delete=models.CASCADE)