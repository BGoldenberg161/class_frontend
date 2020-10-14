from rest_framework import serializers, status
from django.contrib.auth.hashers import make_password
from rest_framework_jwt.settings import api_settings
from .models import User, Teacher, Student, GradedAssignments, Classroom, ClassroomsAssignments, StudentsClassrooms, Assignment



class UsersSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email', 'is_teacher', 'password')


    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
            instance.save()
        if instance.is_teacher == True:
            Teacher.objects.create(user=instance)
        else:
            Student.objects.create(user=instance)
        print(instance)
        return instance

    def update(self, instance, validated_data):
        print('♛', validated_data)
        for attr, value in validated_data.items():
            if attr == 'password':
                instance.set_password(value)
            else:
                setattr(instance, attr, value)
        instance.save()
        print('♧', instance)
        return instance

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email', 'is_teacher', 'password')


class UserLoginSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username', 'password')

class TeacherSerializer(serializers.ModelSerializer):

    user = UserSerializer(required=True)

    class Meta:
        model = Teacher
        fields = ('id', 'user')

class StudentSerializer(serializers.ModelSerializer):

    user = UserSerializer(required=True)

    class Meta:
        model = Student
        fields = ('id', 'user')

class ClassroomsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Classroom
        fields = ('id', 'name', 'gradeLevel', 'teacher')

    def create(self, validated_data):
        print(validated_data)
        get_teacher = validated_data.pop('teacher')
        teacher = Teacher.objects.get(pk=get_teacher)
        print('🍖')
        print(validated_data)
        
        classroom = self.Meta.model(**validated_data)
        classroom.teacher = teacher
        classroom.save()
        return classroom

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance

class ClassroomSerializer(serializers.ModelSerializer):

    class Meta:
        model = Classroom
        fields = ('id', 'name', 'gradeLevel', 'teacher')

class AssignmentsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Assignment
        fields = ('id', 'name', 'description', 'url', 'teacher')

    def create(self, validated_data):
        get_teacher = validated_data.pop('teacher')
        teacher = Teacher.objects.get(pk=get_teacher)
        print('🍖')
        print(teacher)
        print(validated_data)
        
        assignment = self.Meta.model(**validated_data)
        assignment.teacher = teacher
        assignment.save()
        return assignment

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance

class AssignmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Assignment
        fields = ('id', 'name', 'description', 'url')

class StudentsClassroomsSerializer(serializers.ModelSerializer):

     
    class Meta:
         model = StudentsClassrooms
         fields = ('id', 'classroom', 'student')


    def create(self, validated_data):
        get_student = validated_data.pop('student')
        get_classroom = validated_data.pop('classroom')
        student = Student.objects.get(pk=get_student)
        classroom = Classroom.objects.get(pk=get_classroom)
        print('🍖')
        print(student)
        print(classroom)
        print(validated_data)
        
        students_classrooms = self.Meta.model(**validated_data)
        students_classrooms.student = student
        students_classrooms.classroom = classroom
        students_classrooms.save()
        
        return students_classrooms

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance

class ClassroomsAssignmentsSerializer(serializers.ModelSerializer):

     
    class Meta:
         model = ClassroomsAssignments
         fields = ('id', 'classroom', 'assignment')


    def create(self, validated_data):
        get_assignment = validated_data.pop('assignment')
        get_classroom = validated_data.pop('classroom')
        assignment = Assignment.objects.get(pk=get_assignment)
        classroom = Classroom.objects.get(pk=get_classroom)
        print('🍖')
        print(assignment)
        print(classroom)
        print(validated_data)
        
        classrooms_assignments = self.Meta.model(**validated_data)
        classrooms_assignments.assignment = assignment
        classrooms_assignments.classroom = classroom
        classrooms_assignments.save()
        
        return classrooms_assignments

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance
