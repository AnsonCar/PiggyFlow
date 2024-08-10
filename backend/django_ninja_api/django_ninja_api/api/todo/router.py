import uuid
from ninja import Router
from ninja_jwt.authentication import JWTAuth

from api.utils.download import download_csv
from .models import ToDo
from .schema import ToDoIn, ToDoList, ToDoOut, ToDoDone
from .service import (
    get_todos_service,
    get_todo_service,
    update_todo_service,
    create_todo_service,
    delete_todo_service,
    update_todo_done_service,
)

MyModel = ToDo
ModelIn = ToDoIn
ModeOut = ToDoOut
ModelList = ToDoList

router = Router(tags=["todo"])


@router.get("", auth=JWTAuth(), response=ModelList)
async def get_todos(request):
    data = await get_todos_service()
    return ModelList(data=data)


@router.get("/{uuid}", auth=JWTAuth(), response=ModeOut)
async def get_todo(request, uuid: uuid.UUID):
    return await get_todo_service(uuid)


@router.post("", auth=JWTAuth())
async def create_todo(request, payload: ModelIn):
    addData = await payload.dict()
    addData["user_uuid"] = request.user.uuid
    return await create_todo_service(addData)


@router.put("/{uuid}", auth=JWTAuth())
async def update_todo(request, uuid: uuid.UUID, payload: ModelIn):
    return await update_todo_service(uuid, payload)


@router.put("/done/{uuid}", auth=JWTAuth())
async def update_todo_done(request, uuid: uuid.UUID, payload: ToDoDone):
    return await update_todo_done_service(uuid, payload)


@router.delete("/{uuid}", auth=JWTAuth())
async def delete_todo(request, uuid: uuid.UUID):
    return await delete_todo_service(uuid)


@router.post("/download/csv", auth=JWTAuth())
async def download_todo_csv(request):
    return await download_csv(MyModel, "todo")
