import uuid
from ninja import Router
from django.shortcuts import get_object_or_404
from .models import CustomUser
from .schema import UserIn, UserList, UserOut, UserPut
from ninja_jwt.authentication import JWTAuth

MyModel = CustomUser
ModelIn = UserIn
ModeOut = UserOut
ModelList = UserList

router = Router(tags=["user"])


@router.get("", response=ModelList)
def get_users(request):
    data = CustomUser.objects.all()
    return ModelList(data=data)


@router.get("/{uuid}", response=ModeOut)
def get_user(request, uuid: uuid.UUID):
    data = get_object_or_404(CustomUser, uuid=uuid)
    return data


@router.post("")
def create_user(request, payload: ModelIn):
    try:
        data = CustomUser.objects.create_user(**payload.dict())
        return {"id": data.id}
    except:
        return {"msg": "UNIQUE constraint failed"}


@router.put("/{uuid}", auth=JWTAuth())
def update_user(request, uuid: uuid.UUID, payload: UserPut):
    try:
        data = get_object_or_404(CustomUser, uuid=uuid)
        for attr, value in payload.dict().items():
            setattr(data, attr, value)
        data.save()
        return {"success": True}
    except:
        return {"msg": "UNIQUE constraint failed"}


@router.delete("/{uuid}", auth=JWTAuth())
def delete_user(request, uuid: uuid.UUID):
    data = get_object_or_404(CustomUser, uuid=uuid)
    data.delete()
    return {"success": True}
