import uuid
from .models import ToDo
from django.shortcuts import get_object_or_404

MyModel = ToDo


async def get_todos_service():
    return await MyModel.objects.all()


async def get_todo_service(uuid: uuid.UUID):
    data = await get_object_or_404(MyModel, uuid=uuid)
    return data


async def create_todo_service(addData):
    data = await MyModel.objects.create(**addData)
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
