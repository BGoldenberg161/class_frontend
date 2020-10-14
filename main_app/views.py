from django.shortcuts import render, get_list_or_404, get_object_or_404
from rest_framework import viewsets, status, serializers, permissions, mixins, generics
from .serializers import UserSerializer, UsersSerializer, TeacherSerializer, StudentSerializer, ClassroomSerializer, ClassroomsSerializer, UserLoginSerializer, AssignmentSerializer, AssignmentsSerializer, StudentsClassroomsSerializer, ClassroomsAssignmentsSerializer
from .models import User, Teacher, Student, Classroom, Assignment, StudentsClassrooms, ClassroomsAssignments
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse
from rest_framework_simplejwt import authentication
from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache

# Serve Single Page Application
index = never_cache(TemplateView.as_view(template_name='index.html'))


def current_user(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class Login(APIView):

    def post(self, request):
        username = request.data.get('username', None)
        print(request.data.get('username'))
        password = request.data.get('password', None)
        if username and password:

            user_obj = User.objects.filter(username=username)
            print(user_obj.filter(username=username))
            if user_obj.exists() and user_obj.first().check_password(password):
                user = UserLoginSerializer(user_obj, many=True)
                data_list = {}
                data_list.update(user.data)
                # print(data_list)
                return Response({"message": "Login Successfully", "data": data_list, "code": 200})
            else:
                message = "Unable to login with given credentials"
                return Response({"message": message, "code": 500, 'data': {}})
        else:
            message = "Invalid login details."
            return Response({"message": message, "code": 500, 'data': {}})


class Signup(APIView):

    def post(self, request, format=None):

        # Create a teacher
        serializer = UsersSerializer(data=request.data)
        # print(serializer)
        if serializer.is_valid(raise_exception=ValueError):
            # print(serializer)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.error_messages, status=status.HTTP_400_BAD_REQUEST)


class TeacherRecordView(APIView):
    authentication_classes = [authentication.JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    # A class based view for creating and fetching teacher records

    def get(self, format=None):

        # Get all the teacher records
        teachers = Teacher.objects.all()
        serializer = TeacherSerializer(teachers, many=True)
        return Response(serializer.data)

    def post(self, request):

        # Create a teacher

        serializer = TeacherSerializer(data=request.data)
        if serializer.is_valid(raise_exception=ValueError):
            serializer.create(validated_data=request.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.error_messages, status=status.HTTP_400_BAD_REQUEST)


class StudentRecordView(APIView):
    authentication_classes = [authentication.JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    # A class based view for creating and fetching student records

    def get(self, format=None):

        # Get all the teacher records
        students = Student.objects.all()
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data)

    def post(self, request):

        # Create a teacher

        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid(raise_exception=ValueError):
            serializer.create(validated_data=request.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.error_messages, status=status.HTTP_400_BAD_REQUEST)


class UserRecordView(APIView):
    authentication_classes = [authentication.JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_object(self, pk):
        try:
            return User.objects.get(pk=pk)
        except:
            return None

    def get(self, request, pk, format=None):
        user = self.get_object(pk)
        if not user:
            return JsonResponse({'status': 0, 'message': 'User with this id not found'})
        serializer = UserSerializer(user)
        return JsonResponse(serializer.data, safe=False)

    def put(self, request, pk, format=None):
        user = self.get_object(pk)
        serializer = UsersSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UsersRecordView(APIView):
    authentication_classes = [authentication.JWTAuthentication]
    permission_classes = [permissions.IsAdminUser]
    # A class based view for creating and fetching teacher records

    def get(self, format=None):
        # Get all the teacher records
        users = User.objects.all()
        serializer = UsersSerializer(users, many=True)
        return Response(serializer.data)


class ClassroomRecordView(APIView):
    authentication_classes = [authentication.JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self, pk):
        try:
            return Classroom.objects.get(pk=pk)
        except:
            return None

    def get(self, request, pk, format=None):
        classroom = self.get_object(pk)
        if not classroom:
            return JsonResponse({'status': 0, 'message': 'Classroom with this id not found'})
        serializer = ClassroomSerializer(classroom)
        return JsonResponse(serializer.data, safe=False)

    def put(self, request, pk, format=None):
        classroom = self.get_object(pk)
        teacher = Teacher.objects.get(user=request.user.id)
        request.data['teacher'] = teacher.id
        serializer = ClassroomsSerializer(classroom, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None): 
            classroom = self.get_object(pk)
            delete_classroom = classroom.delete()
            return JsonResponse({'message': '{} Classroom was deleted successfully!'.format(delete_classroom)}, status=status.HTTP_204_NO_CONTENT)
 


class ClassroomsRecordView(APIView):
    authentication_classes = [authentication.JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        classrooms = Classroom.objects.all()
        return classrooms

    def get_object(self, userId):
        teacher = Teacher.objects.get(user=userId)
        return teacher

    def get(self, request, format=None):
        print('🥁')
        if request.user.is_teacher == True:
            # Get all the teacher records
            teacher = self.get_object(request.user.id)
            classrooms = Classroom.objects.filter(teacher=teacher.id)
            serializer = ClassroomSerializer(classrooms, many=True)
            return Response(serializer.data)
        else:
            print(request.user.id)
            print('🥁')
                # Get all the teacher records

            student = Student.objects.get(user=request.user.id)
            # students_classes = Classroom.objects.get(student=student.id)
            # print(students_classes.classroom)
            print(student.id)
            students_classes = Classroom.objects.filter(studentsclassrooms__in=StudentsClassrooms.objects.filter(student=student))
            print(students_classes)
            
            # students_classrooms = Classroom.objects.filter(id__in=students_classes)
            # print(students_classrooms)
            
            serializer = ClassroomsSerializer(students_classes, many=True)
            return Response(serializer.data)

    def post(self, request, format=None):
        if request.user.is_teacher:
            user_id = request.user.id
            teacher = self.get_object(user_id)
            print(request.user.id)
            print(teacher)
            request.data['teacher'] = teacher.id
            print(request.data['teacher'])
            # Create a classroom
            serializer = ClassroomsSerializer(data=request.data)
            print(serializer, "This is the serializer")
            if serializer.is_valid(raise_exception=ValueError):
                # print(serializer)
                serializer.create(validated_data=request.data)
                print(request.data)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.error_messages, status=status.HTTP_400_BAD_REQUEST)
        return Response('You a bad bad boy... NOT Teacher', status=status.HTTP_401_UNAUTHORIZED)

class AssignmentRecordView(APIView):
    authentication_classes = [authentication.JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self, pk):
        try:
            return Assignment.objects.get(pk=pk)
        except:
            return None

    def get(self, request, pk, format=None):
        assignment = self.get_object(pk)
        if not assignment:
            return JsonResponse({'status': 0, 'message': 'Assignment with this id not found'})
        serializer = AssignmentSerializer(assignment)
        return JsonResponse(serializer.data, safe=False)

    def put(self, request, pk, format=None):
        assignment = self.get_object(pk)
        print(request.user.id)
        teacher = Teacher.objects.get(user=request.user.id)
        print(teacher.id)
        request.data['teacher'] = teacher.id
        serializer = AssignmentsSerializer(assignment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None): 
            assignment = self.get_object(pk)
            delete_assignment = assignment.delete()
            return JsonResponse({'message': '{} Assignment was deleted successfully!'.format(delete_assignment)}, status=status.HTTP_204_NO_CONTENT)


class AssignmentsRecordView(APIView):
    authentication_classes = [authentication.JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = User.objects.all()
        return user

    def get_object(self, userId):
        teacher = Teacher.objects.get(user=userId)
        return teacher

    def get(self, request, format=None):
        print('🥁')
        if request.user.is_teacher == True:
            # Get all the teacher records
            teacher = self.get_object(request.user.id)
            assignments = Assignment.objects.filter(teacher=teacher.id)
            serializer = AssignmentSerializer(assignments, many=True)
            return Response(serializer.data)
        else:
            return Response("Not Authorized")

    def post(self, request, format=None):
        if request.user.is_teacher:
            user_id = request.user.id
            teacher = self.get_object(user_id)
            print(teacher.id)
            print(request.user.id, "Blah")
            request.data['teacher'] = teacher.id
            # Create a classroom
            serializer = AssignmentsSerializer(data=request.data)
            # print(serializer)
            if serializer.is_valid(raise_exception=ValueError):
                # print(serializer)
                serializer.create(validated_data=request.data)
                print(request.data)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.error_messages, status=status.HTTP_400_BAD_REQUEST)
        return Response('You a bad bad user... NOT Teacher', status=status.HTTP_401_UNAUTHORIZED)


class StudentsClassroomsRecordView(APIView):
    authentication_classes = [authentication.JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        classroom = Classroom.objects.all()
    
    def post(self, request, format=None):
        if request.user.is_teacher:
            print('we are here')
            serializer = StudentsClassroomsSerializer(data=request.data)

            if serializer.is_valid(raise_exception=ValueError):
                print('we are here22')
                serializer.create(validated_data=request.data)
                print(request.data)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.error_messages, status=status.HTTP_400_BAD_REQUEST)
        return Response('You a bad bad user... NOT Teacher', status=status.HTTP_401_UNAUTHORIZED)

class StudentsInClassrooms(APIView):
    
    def get(self, request, pk, format=None):
        print('request is: ', request.data)
        if request.user.is_teacher == True:
        
            classObjects = StudentsClassrooms.objects.filter(classroom=pk).values('student_id')
            print('☂︎', classObjects)
            all_the_students_associated_with_a_class = Student.objects.filter(id__in=classObjects)
            print(all_the_students_associated_with_a_class, "We are here in get for single class assignments for student")
            
            serializer = StudentSerializer(all_the_students_associated_with_a_class, many=True)
            print(serializer.data)
            return Response(serializer.data)

class ClassroomsAssignmentsRecordView(APIView):
    authentication_classes = [authentication.JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, pk, format=None):
        print('request is: ', request.data)
        if request.user.is_teacher == True:
            classObjects = ClassroomsAssignments.objects.filter(assignment=pk).values('classroom_id')
            print('☂︎', classObjects)
            all_the_classrooms_associated_with_an_assignment = Classroom.objects.filter(id__in=classObjects)
            print(all_the_classrooms_associated_with_an_assignment, "We are here in get for single class assignments for student")
            
            serializer = ClassroomsSerializer(all_the_classrooms_associated_with_an_assignment, many=True)
            print(serializer.data)
            return Response(serializer.data)

    
class CreateClassroomsAssignmentsView(APIView):
    authentication_classes = [authentication.JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, format=None):
        if request.user.is_teacher:
            print('we are here')
            serializer = ClassroomsAssignmentsSerializer(data=request.data)

            if serializer.is_valid(raise_exception=ValueError):
                print('we are here 22')
                serializer.create(validated_data=request.data)
                print(request.data)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.error_messages, status=status.HTTP_400_BAD_REQUEST)
        return Response('You a bad bad user... NOT Teacher', status=status.HTTP_401_UNAUTHORIZED)

class SingleClassesAssignmentsView(APIView):

    def get(self, request, pk, format=None):
        if request.user.is_teacher == False:
            classroom = Classroom.objects.get(id=pk)
            print(classroom)
            one_classrooms_assignments_for_one_special_student = Assignment.objects.filter(id__in=ClassroomsAssignments.objects.filter(classroom=classroom).values('assignment_id'))
            print(one_classrooms_assignments_for_one_special_student, "We are here in get for single class assignments for student")
            
            serializer = AssignmentsSerializer(one_classrooms_assignments_for_one_special_student, many=True)
            print(serializer.data)
            return Response(serializer.data)

class HelloView(APIView):
    authentication_classes = [authentication.JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    model = User
    serializer_class = UserSerializer

    def get(self, request):
        if request.user.is_teacher:
            return Response("Hello teacher")

        return JsonResponse({
            "errors": ["You're not a teacher.", "Batman will always be a student."]
        }, status=status.HTTP_401_UNAUTHORIZED)
