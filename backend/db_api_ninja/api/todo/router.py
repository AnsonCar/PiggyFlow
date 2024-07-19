import csv
import uuid
from django.http import HttpResponse
from ninja import Router
from django.shortcuts import get_object_or_404
from .models import ToDo
from .schema import ToDoIn, ToDoList, ToDoOut, ToDoDone
from ninja_jwt.authentication import JWTAuth

MyModel = ToDo
ModelIn = ToDoIn
ModeOut = ToDoOut
ModelList = ToDoList

router = Router(tags=["todo"])


@router.get("", auth=JWTAuth(), response=ModelList)
def get_todos(request):
    data = MyModel.objects.all()
    return ModelList(data=data)


@router.get("/{uuid}", auth=JWTAuth(), response=ModeOut)
def get_todo(request, uuid: uuid.UUID):
    data = get_object_or_404(MyModel, uuid=uuid)
    return data


@router.post("", auth=JWTAuth())
def create_todo(request, payload: ModelIn):
    addData = payload.dict()
    addData["user_uuid"] = request.user.uuid
    data = MyModel.objects.create(**addData)
    return {"id": data.id}


@router.put("/{uuid}", auth=JWTAuth())
def update_todo(request, uuid: uuid.UUID, payload: ModelIn):
    data = get_object_or_404(MyModel, uuid=uuid)
    for attr, value in payload.dict().items():
        setattr(data, attr, value)
    data.save()
    return {"success": True}


@router.delete("/{uuid}", auth=JWTAuth())
def delete_todo(request, uuid: uuid.UUID):
    data = get_object_or_404(MyModel, uuid=uuid)
    data.delete()
    return {"success": True}


router_download = Router(tags=["todo download"])


@router_download.post("/csv", auth=JWTAuth())
def download_todo_csv(request):
    response = HttpResponse(content_type="text/csv")
    response["Content-Disposition"] = f'attachment; filename="todo.csv"'
    writer = csv.writer(response)
    # data column
    model_fields = MyModel._meta.fields
    field_names = [field.name for field in model_fields]
    del field_names[field_names.index("id")]
    del field_names[field_names.index("uuid")]
    del field_names[field_names.index("user_uuid")]
    writer.writerow(field_names)
    # data rows
    data = MyModel.objects.all()
    for item in data:
        row = [str(getattr(item, field)) for field in field_names]
        writer.writerow(row)
    return response


router_done = Router(tags=["todo done"])


@router_done.put("/{uuid}", auth=JWTAuth())
def update_todo_done(request, uuid: uuid.UUID, payload: ToDoDone):
    data = get_object_or_404(MyModel, uuid=uuid)
    for attr, value in payload.dict().items():
        if attr == "done":
            setattr(data, attr, value)
    data.save()
    return {"success": True}
