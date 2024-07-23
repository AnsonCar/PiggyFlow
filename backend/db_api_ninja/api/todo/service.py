import uuid
from .models import ToDo
from django.shortcuts import get_object_or_404

MyModel = ToDo


def get_todos_service():
    return MyModel.objects.all()


def get_todo_service(uuid: uuid.UUID):
    data = get_object_or_404(MyModel, uuid=uuid)
    return data


def create_todo_service(addData):
    data = MyModel.objects.create(**addData)
    return {"id": data.id}


def update_todo_service(uuid: uuid.UUID, payload):
    data = get_object_or_404(MyModel, uuid=uuid)
    for attr, value in payload.dict().items():
        setattr(data, attr, value)
    data.save()
    return {"success": True}


def update_todo_done_service(uuid: uuid.UUID, payload):
    data = get_object_or_404(MyModel, uuid=uuid)
    for attr, value in payload.dict().items():
        if attr == "done":
            setattr(data, attr, value)
    data.save()
    return {"success": True}


def delete_todo_service(uuid: uuid.UUID):
    data = get_object_or_404(MyModel, uuid=uuid)
    data.delete()
    return {"success": True}
