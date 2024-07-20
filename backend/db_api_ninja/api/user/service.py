import uuid
from django.shortcuts import get_object_or_404
from .models import CustomUser

MyModel = CustomUser

def get_users_service():
    data = MyModel.objects.all()
    return data

def get_user_service():
    data = get_object_or_404(MyModel, uuid=uuid)
    return data

def create_user_service(payload):
    try:
        data = MyModel.objects.create_user(**payload.dict())
        return {"id": data.id}
    except:
        return {"msg": "UNIQUE constraint failed"}
    
def update_user_service(payload):
    try:
        data = get_object_or_404(MyModel, uuid=uuid)
        for attr, value in payload.dict().items():
            setattr(data, attr, value)
        data.save()
        return {"success": True}
    except:
        return {"msg": "UNIQUE constraint failed"}
    
def delete_user_service(uuid):
    data = get_object_or_404(MyModel, uuid=uuid)
    data.delete()
    return {"success": True}
