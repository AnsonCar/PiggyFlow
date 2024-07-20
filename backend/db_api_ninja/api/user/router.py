import uuid
from ninja import Router
from ninja_jwt.authentication import JWTAuth

from .schema import UserIn, UserList, UserOut, UserPut
from .service import (
    get_users_service,
    get_user_service,
    create_user_service,
    update_user_service,
    delete_user_service,
)

ModelIn = UserIn
ModeOut = UserOut
ModelPut = UserPut
ModelList = UserList

router = Router(tags=["user"])


@router.get("", response=ModelList)
def get_users(request):
    data = get_users_service()
    return ModelList(data=data)


@router.get("/{uuid}", response=ModeOut)
def get_user(request, uuid: uuid.UUID):
    return get_user_service()


@router.post("")
def create_user(request, payload: ModelIn):
    return create_user_service()


@router.put("/{uuid}", auth=JWTAuth())
def update_user(request, uuid: uuid.UUID, payload: ModelPut):
    return update_user_service(payload)


@router.delete("/{uuid}", auth=JWTAuth())
def delete_user(request, uuid: uuid.UUID):
    return delete_user_service(uuid)
