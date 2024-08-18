import uuid
from ninja import Router
from ninja_jwt.authentication import AsyncJWTAuth

from .schema import GroupIn, GroupList, GroupOut, GroupPut
from .service import (
    get_groups_service,
    get_group_service,
    create_group_service,
    update_group_service,
    delete_group_service,
)

ModelIn = GroupIn
ModeOut = GroupOut
ModelPut = GroupPut
ModelList = GroupList

router = Router(tags=["auth"])


@router.get("", response=ModelList)
async def get_groups(request):
    data = await get_groups_service()
    return ModelList(data=data)


@router.get("/{uuid}", response=ModeOut)
async def get_group(request, uuid: int):
    return await get_group_service(uuid)


@router.post("")
async def create_group(request, payload: ModelIn):
    return await create_group_service(payload)


@router.put("/{uuid}", auth=AsyncJWTAuth())
async def update_group(request, uuid: int, payload: ModelPut):
    # async def update_group(request, uuid: uuid.UUID, payload: ModelPut):
    return await update_group_service(payload, uuid)


@router.delete("/{uuid}", auth=AsyncJWTAuth())
async def delete_group(request, uuid: int):
    # async def delete_group(request, uuid: uuid.UUID):
    return await delete_group_service(uuid)
