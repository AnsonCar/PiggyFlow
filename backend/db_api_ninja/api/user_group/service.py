import uuid
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import Group

MyModel = Group

def get_groups_service():
    data = MyModel.objects.all()
    return data

def get_group_service(uuid):
    # data = get_object_or_404(MyModel, uuid=uuid)
    data = get_object_or_404(MyModel, id=uuid)
    return data

def create_group_service(payload):
    try:
        data = MyModel.objects.create(**payload.dict())
        return {"id": data.id}
    except:
        return {"msg": "UNIQUE constraint failed"}
    
def update_group_service(payload, uuid):
    try:
        # data = get_object_or_404(MyModel, uuid=uuid)
        data = get_object_or_404(MyModel, id=uuid)
        for attr, value in payload.dict().items():
            setattr(data, attr, value)
        data.save()
        return {"success": True}
    except:
        return {"msg": "UNIQUE constraint failed"}
    
def delete_group_service(uuid):
    # data = get_object_or_404(MyModel, uuid=uuid)
    data = get_object_or_404(MyModel, id=uuid)
    data.delete()
    return {"success": True}
