import uuid
from .models import Transaction
from django.shortcuts import get_object_or_404

MyModel = Transaction


def get_transactions_service():
    return MyModel.objects.all()


def get_transaction_service(uuid: uuid.UUID):
    data = get_object_or_404(MyModel, uuid=uuid)
    return data


def create_transaction_service(addData):
    data = MyModel.objects.create(**addData)
    return {"id": data.id}


def update_transaction_service(uuid: uuid.UUID, payload):
    data = get_object_or_404(MyModel, uuid=uuid)
    for attr, value in payload.dict().items():
        setattr(data, attr, value)
    data.save()
    return {"success": True}


def delete_transaction_service(uuid: uuid.UUID):
    data = get_object_or_404(MyModel, uuid=uuid)
    data.delete()
    return {"success": True}
