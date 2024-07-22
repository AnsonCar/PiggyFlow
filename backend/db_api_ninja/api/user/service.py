import uuid
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import Group
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


def update_user_service(payload, uuid):
    try:
        data = get_object_or_404(MyModel, uuid=uuid)
        for attr, value in payload.dict().items():
            setattr(data, attr, value)
        data.save()
        return {"success": True}
    except:
        return {"msg": "UNIQUE constraint failed"}


def update_user_password_service(payload, uuid):
    data = get_object_or_404(MyModel, uuid=uuid)
    payload = payload.dict()
    password = payload["password"]
    data.set_password(password)
    data.save()
    return {"success": True}


def delete_user_service(uuid):
    data = get_object_or_404(MyModel, uuid=uuid)
    data.delete()
    return {"success": True}


def get_users_groups_service():
    data = MyModel.objects.all()
    users = []
    for user in data:
        user_dict = {
            "id": user.id,
            "uuid": user.uuid,
            "username": user.username,
            "groups": [group.name for group in user.groups.all()],
        }
        users.append(user_dict)
    return {"data": users}


### group
def get_user_groups_service(uuid):
    data = get_object_or_404(MyModel, uuid=uuid)
    groups = data.groups.all()
    group_list = [group.name for group in groups]
    return {"data": group_list}


def add_user_group_service(payload, uuid):
    payload = payload.dict()
    data = get_object_or_404(MyModel, uuid=uuid)
    group = get_object_or_404(Group, id=payload["id"])
    data.groups.add(group)
    return {"success": True}


def remove_user_group_service(payload, uuid):
    data = get_object_or_404(MyModel, uuid=uuid)
    group = get_object_or_404(Group, id=payload.id)
    data.groups.remove(group)
    return {"success": True}
