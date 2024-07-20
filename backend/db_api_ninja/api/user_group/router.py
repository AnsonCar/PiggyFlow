import uuid
from ninja import Router
from ninja_jwt.authentication import JWTAuth

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

router = Router(tags=["group"])


@router.get("", response=ModelList)
def get_groups(request):
    data = get_groups_service()
    return ModelList(data=data)


@router.get("/{uuid}", response=ModeOut)
def get_group(request, uuid: int):
# def get_group(request, uuid: uuid.UUID):
    return get_group_service(uuid)


@router.post("")
def create_group(request, payload: ModelIn):
    return create_group_service(payload)


@router.put("/{uuid}", auth=JWTAuth())
def update_group(request, uuid: int, payload: ModelPut):
# def update_group(request, uuid: uuid.UUID, payload: ModelPut):
    return update_group_service(payload, uuid)


@router.delete("/{uuid}", auth=JWTAuth())
def delete_group(request, uuid: int):
# def delete_group(request, uuid: uuid.UUID):
    return delete_group_service(uuid)
