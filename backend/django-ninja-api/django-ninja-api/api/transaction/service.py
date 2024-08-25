import uuid
from .models import Transaction
from django.shortcuts import get_object_or_404
from asgiref.sync import sync_to_async

MyModel = Transaction


async def get_transactions_service(user_uuid: uuid.UUID):
    data = [data async for data in MyModel.objects.filter(user_uuid=user_uuid).order_by('id')]
    return data


async def get_transaction_service(uuid: uuid.UUID):
    data = await sync_to_async(get_object_or_404)(MyModel, uuid=uuid)
    return data


async def create_transaction_service(addData):
    try:
        data = await MyModel.objects.acreate(**addData)
        return {"id":  data.id}
    except Exception as e:
        return {"detail": str(e)}


async def update_transaction_service(uuid: uuid.UUID, payload):
    data = await sync_to_async(get_object_or_404)(MyModel, uuid=uuid)
    for attr, value in payload.dict().items():
        setattr(data, attr, value)
    await data.asave()
    return {"success": True}


async def delete_transaction_service(uuid: uuid.UUID):
    data = await sync_to_async(get_object_or_404)(MyModel, uuid=uuid)
    await data.adelete()
    return {"success": True}
