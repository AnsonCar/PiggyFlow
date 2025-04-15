import uuid
from django.core.cache import cache
from django.shortcuts import get_object_or_404
from .models import CustomUser
from django.contrib.auth.models import Group
from asgiref.sync import sync_to_async

MyModel = CustomUser
MyModelGroup = Group


async def get_users_service():
    # data = cache.get("users")
    # if not data:
    #     data = [data async for data in MyModel.objects.all().order_by('id')]
    #     cache.set("users", data, timeout=4)
    data = [
        data
        async for data in MyModel.objects.prefetch_related("groups")
        .all()
        .order_by("id")
    ]
    return data


async def get_user_service(uuid):
    data = await sync_to_async(get_object_or_404)(
        MyModel.objects.prefetch_related("groups"), uuid=uuid
    )
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


# group


async def create_user_group_service(payload, uuid):
    payload = payload.dict()
    data = await sync_to_async(get_object_or_404)(MyModel, uuid=uuid)
    group = await sync_to_async(get_object_or_404)(Group, id=payload["id"])
    await sync_to_async(data.groups.add)(group)
    return {"success": True}


async def remove_user_group_service(payload, uuid):
    data = await sync_to_async(get_object_or_404)(
        MyModel.objects.prefetch_related("groups"), uuid=uuid
    )
    await sync_to_async(data.groups.remove)(payload.id)
    return {"success": True}


async def get_groups_service():
    data = [data async for data in MyModelGroup.objects.all().order_by("id")]
    return data


async def get_group_service(uuid):
    data = await sync_to_async(get_object_or_404)(MyModelGroup, id=uuid)
    return data


async def create_group_service(payload):
    try:
        data = await MyModelGroup.objects.acreate(**payload.dict())
        return {"id": data.id}
    except Exception as e:
        return {"detail": str(e)}


async def update_group_service(payload, uuid):
    data = await sync_to_async(get_object_or_404)(MyModelGroup, id=uuid)
    for attr, value in payload.dict().items():
        setattr(data, attr, value)
    await data.asave()
    return {"success": True}


async def delete_group_service(uuid):
    data = await sync_to_async(get_object_or_404)(MyModelGroup, id=uuid)
    await data.adelete()
    return {"success": True}
