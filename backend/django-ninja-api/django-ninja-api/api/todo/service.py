import uuid
from django.core.cache import cache
from django.shortcuts import get_object_or_404
from .models import ToDo

MyModel = ToDo


async def get_todos_service():
    data = [data async for data in MyModel.objects.all()]
    return data


async def get_todo_service(uuid: uuid.UUID):
    data = await get_object_or_404(MyModel, uuid=uuid)
    return data


async def create_todo_service(addData):
    data = await MyModel.objects.acreate(**addData)
    return {"id": data.id}


async def update_todo_service(uuid: uuid.UUID, payload):
    data = await get_object_or_404(MyModel, uuid=uuid)
    for attr, value in payload.dict().items():
        setattr(data, attr, value)
    data.save()
    return {"success": True}


async def update_todo_done_service(uuid: uuid.UUID, payload):
    data = await get_object_or_404(MyModel, uuid=uuid)
    for attr, value in payload.dict().items():
        if attr == "done":
            setattr(data, attr, value)
    data.save()
    return {"success": True}


async def delete_todo_service(uuid: uuid.UUID):
    data = await get_object_or_404(MyModel, uuid=uuid)
    data.delete()
    return {"success": True}
