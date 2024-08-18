import uuid
from django.core.cache import cache
from django.shortcuts import get_object_or_404
from .models import CustomUser
from django.contrib.auth.models import Group
from asgiref.sync import sync_to_async

MyModel = CustomUser


async def get_users_service():
    # data = cache.get("users")
    # if not data:
    #     data = [data async for data in MyModel.objects.all()]
    #     cache.set("users", data, timeout=4)
    data = [data async for data in MyModel.objects.all()]
    return data


async def get_user_service(uuid):
    data = await sync_to_async(get_object_or_404)(MyModel, uuid=uuid)
    return data


async def create_user_service(payload):
    try:
        data = await sync_to_async(MyModel.objects.create_user)(**payload.dict())
        return {"id": data.id}
    except Exception as e:
        return {"detail": str(e)}


async def update_user_service(payload, uuid):
    data = await sync_to_async(get_object_or_404)(MyModel, uuid=uuid)
    for attr, value in payload.dict().items():
        setattr(data, attr, value)
    await data.asave()
    return {"success": True}


async def update_user_password_service(payload, uuid):
    data = await sync_to_async(get_object_or_404)(MyModel, uuid=uuid)
    password = (payload.dict())["password"]
    await sync_to_async(data.set_password)(password)
    await data.asave()
    return {"success": True}


async def delete_user_service(uuid):
    data = await MyModel.objects.filter(uuid=uuid).adelete()
    return {"success": True} if data[0] != 0 else {"success": False}


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


# group
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
