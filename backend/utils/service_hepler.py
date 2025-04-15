import uuid

from asgiref.sync import sync_to_async
from django.db import models
from django.shortcuts import get_object_or_404


class ServiceHelper:
    def __init__(self, MyModel: models):
        self.MyModel = MyModel

    async def create(self, addData):
        try:
            data = await self.MyModel.objects.acreate(**addData)
            return {"id": data.id}
        except Exception as e:
            return {"detail": str(e)}

    async def delete(self, uuid: uuid.UUID):
        data = await sync_to_async(get_object_or_404)(self.MyModel, uuid=uuid)
        await data.adelete()
        return {"success": True}

    async def get_all(self, user_uuid: uuid.UUID):
        data = [data async for data in self.MyModel.objects.filter(user_uuid=user_uuid).order_by("id")]
        return data

    async def get(self, uuid: uuid.UUID):
        data = await sync_to_async(get_object_or_404)(self.MyModel, uuid=uuid)
        return data

    async def update(self, uuid: uuid.UUID, payload):
        data = await sync_to_async(get_object_or_404)(self.MyModel, uuid=uuid)
        for attr, value in payload.dict().items():
            setattr(data, attr, value)
        await data.asave()
        return {"success": True}
