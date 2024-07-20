import uuid
from ninja import Router
from django.shortcuts import get_object_or_404
from api.utils.download import download_csv
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


@router.put("/done/{uuid}", auth=JWTAuth())
def update_todo_done(request, uuid: uuid.UUID, payload: ToDoDone):
    data = get_object_or_404(MyModel, uuid=uuid)
    for attr, value in payload.dict().items():
        if attr == "done":
            setattr(data, attr, value)
    data.save()
    return {"success": True}


@router.post("/download/csv", auth=JWTAuth())
def download_todo_csv(request):
    return download_csv(MyModel)