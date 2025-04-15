import uuid

from ninja import Router
from ninja_jwt.authentication import AsyncJWTAuth

from utils.download_helper import download_csv
from utils.service_hepler import ServiceHelper

from .models import ToDo
from .schema import ToDoIn, ToDoList, ToDoOut

service = ServiceHelper(ToDo)
router = Router(tags=["todo"])

MyModel = ToDo
ModelIn = ToDoIn
ModeOut = ToDoOut
ModelList = ToDoList

"""
CRUD API
"""


# Create
@router.post("", auth=AsyncJWTAuth())
async def create_todo(request, payload: ModelIn):
    addData = payload.dict()
    addData["user_uuid"] = request.user.uuid
    return await service.create(addData)


# DELETE
@router.delete("/{uuid}", auth=AsyncJWTAuth())
async def delete_todo(request, uuid: uuid.UUID):
    return await service.delete(uuid)


# GET
@router.get("/{uuid}", auth=AsyncJWTAuth(), response=ModeOut)
async def get_todo(request, uuid: uuid.UUID):
    return await service.get(uuid)


@router.get("", response=ModelList, auth=AsyncJWTAuth())
async def get_todos(request):
    user_uuid = request.user.uuid
    data = await service.get_all(user_uuid)
    return ModelList(data=data)


# UPDATE
@router.put("/{uuid}", auth=AsyncJWTAuth())
async def update_todo(request, uuid: uuid.UUID, payload: ModelIn):
    return await service.update(uuid, payload)


# DOWNLOAD CSV
@router.post("/download/csv", auth=AsyncJWTAuth())
async def download_todo_csv(request):
    return await download_csv(MyModel, "todo")
