import uuid
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import Group
from asgiref.sync import sync_to_async

MyModel = Group


async def get_groups_service():
    data = [data async for data in MyModel.objects.all().order_by('id')]
    return data


async def get_group_service(uuid):
    data = await sync_to_async(get_object_or_404)(MyModel, id=uuid)
    return data


async def create_group_service(payload):
    try:
        data = await MyModel.objects.acreate(**payload.dict())
        return {"id": data.id}
    except Exception as e:
        return {"detail": str(e)}


async def update_group_service(payload, uuid):
    data = await sync_to_async(get_object_or_404)(MyModel, id=uuid)
    for attr, value in payload.dict().items():
        setattr(data, attr, value)
    await data.asave()
    return {"success": True}


async def delete_group_service(uuid):
    data = await sync_to_async(get_object_or_404)(MyModel, id=uuid)
    await data.adelete()
    return {"success": True}
