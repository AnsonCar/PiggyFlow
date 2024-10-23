import uuid
from ninja import Router
from ninja_jwt.authentication import AsyncJWTAuth
from .models import CustomUser

from .schema import (
    UserIn,
    UserList,
    UserOut,
    UserPut,
    UserPutPassword,
    UserGroup,
    GroupIn,
    GroupList,
    GroupOut,
    GroupPut,
)
from .service import (
    get_users_service,
    get_user_service,
    create_user_service,
    update_user_service,
    update_user_password_service,
    delete_user_service,
    create_user_group_service,
    remove_user_group_service,
    get_groups_service,
    get_group_service,
    create_group_service,
    update_group_service,
    delete_group_service,
)

ModelIn = UserIn
ModeOut = UserOut
ModelPut = UserPut
ModelList = UserList

ModelInGroup = GroupIn
ModeOutGroup = GroupOut
ModelPutGroup = GroupPut
ModelListGroup = GroupList

router = Router(tags=["auth user"])


@router.get("", response=ModelList)
async def get_users(request):
    data = await get_users_service()
    return ModelList(data=data)


@router.get("/{uuid}", response=ModeOut)
async def get_user(request, uuid: uuid.UUID):
    return await get_user_service(uuid)


@router.post("")
async def create_user(request, payload: ModelIn):
    return await create_user_service(payload)


@router.put("/{uuid}", auth=AsyncJWTAuth())
async def update_user(request, uuid: uuid.UUID, payload: ModelPut):
    return await update_user_service(payload, uuid)


@router.delete("/{uuid}", auth=AsyncJWTAuth())
async def delete_user(request, uuid: uuid.UUID):
    return await delete_user_service(uuid)


@router.patch("{uuid}/password", auth=AsyncJWTAuth())
async def update_user_password(request, uuid: uuid.UUID, payload: UserPutPassword):
    return await update_user_password_service(payload, uuid)


# user group

routerGroup = Router(tags=["auth group"])


@routerGroup.post("{uuid}/group", auth=AsyncJWTAuth())
async def create_user_group(request, uuid: uuid.UUID, payload: UserGroup):
    return await create_user_group_service(payload, uuid)


@routerGroup.delete("{uuid}/group", auth=AsyncJWTAuth())
async def delete_user_group(request, uuid: uuid.UUID, payload: UserGroup):
    return await remove_user_group_service(payload, uuid)


@routerGroup.get("", response=ModelListGroup)
async def get_groups(request):
    data = await get_groups_service()
    return ModelListGroup(data=data)


@routerGroup.get("/{uuid}", response=ModeOutGroup)
async def get_group(request, uuid: int):
    return await get_group_service(uuid)


@routerGroup.post("")
async def create_group(request, payload: ModelInGroup):
    return await create_group_service(payload)


@routerGroup.put("/{uuid}", auth=AsyncJWTAuth())
async def update_group(request, uuid: int, payload: ModelPutGroup):
    return await update_group_service(payload, uuid)


@routerGroup.delete("/{uuid}", auth=AsyncJWTAuth())
async def delete_group(request, uuid: int):
    return await delete_group_service(uuid)
