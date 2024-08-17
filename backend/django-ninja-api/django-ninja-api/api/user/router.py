import uuid
from ninja import Router
from ninja_jwt.authentication import JWTAuth, AsyncJWTAuth
from .models import CustomUser

from .schema import UserIn, UserList, UserOut, UserPut, UserPutPassword, UserGroup
from .service import (
    get_users_service,
    get_user_service,
    create_user_service,
    update_user_service,
    update_user_password_service,
    delete_user_service,
    #
    get_users_groups_service,
    get_user_groups_service,
    add_user_group_service,
    remove_user_group_service,
)

ModelIn = UserIn
ModeOut = UserOut
ModelPut = UserPut
ModelList = UserList

router = Router(tags=["user"])

@router.get("", response=ModelList)
async def get_users(request):
    data = await get_users_service()
    return ModelList(data=data)


@router.get("/{uuid}", response=ModeOut)
async def get_user(request, uuid: uuid.UUID):
    return get_user_service(uuid)


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
    return update_user_password_service(payload, uuid)

# group


@router.get('/group/get', auth=AsyncJWTAuth())
async def get_user_groups(request):
    return get_users_groups_service()


@router.get('{uuid}/group', auth=AsyncJWTAuth())
async def get_user_group(request, uuid: uuid.UUID):
    return get_user_groups_service(uuid)


@router.post("{uuid}/group", auth=AsyncJWTAuth())
async def create_user_group(request, uuid: uuid.UUID, payload: UserGroup):
    return add_user_group_service(payload, uuid)


@router.delete("{uuid}/group", auth=AsyncJWTAuth())
async def delete_user_group(request, uuid: uuid.UUID, payload: UserGroup):
    return remove_user_group_service(payload, uuid)
