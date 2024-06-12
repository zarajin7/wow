from django.shortcuts import render

# Create your views here.



class LoginView(APIView):
    def get(self,request,format=None):
        login=Login.objects.filter(owner=request.user.id)
        the_serializer=LoginSerializer(login,many=True)
        return Response(the_serializer.data)