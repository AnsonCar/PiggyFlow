import uuid
from django.core.cache import cache
from django.shortcuts import get_object_or_404
from .models import ToDo
from asgiref.sync import sync_to_async

MyModel = ToDo


async def get_todos_service():
    data = [data async for data in MyModel.objects.all().order_by('id')]
    return data


async def get_todo_service(uuid: uuid.UUID):
    data = await sync_to_async(get_object_or_404)(MyModel, uuid=uuid)
    return data


async def create_todo_service(addData):
    try:
        data = await MyModel.objects.acreate(**addData)
        return {"id": data.id}
    except Exception as e:
        return {"detail": str(e)}


async def update_todo_service(uuid: uuid.UUID, payload):
    data = await sync_to_async(get_object_or_404)(MyModel, uuid=uuid)
    for attr, value in payload.dict().items():
        setattr(data, attr, value)
    await data.asave()
    return {"success": True}


async def update_todo_done_service(uuid: uuid.UUID, payload):
    data = await sync_to_async(get_object_or_404)(MyModel, uuid=uuid)
    for attr, value in payload.dict().items():
        if attr == "done":
            setattr(data, attr, value)
    await data.asave()
    return {"success": True}


async def delete_todo_service(uuid: uuid.UUID):
    data = await sync_to_async(get_object_or_404)(MyModel, uuid=uuid)
    await data.adelete()
    return {"success": True}
