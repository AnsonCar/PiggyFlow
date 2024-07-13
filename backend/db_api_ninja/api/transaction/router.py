import csv
import uuid
from django.http import HttpResponse
from ninja import Router
from django.shortcuts import get_object_or_404
from .models import Transaction
from .schema import TransactionIn, TransactionList, TransactionOut
from ninja_jwt.authentication import JWTAuth

MyModel = Transaction
ModelIn = TransactionIn
ModeOut = TransactionOut
ModelList = TransactionList

router = Router(tags=["transaction"])


@router.get("", auth=JWTAuth(), response=ModelList)
def get_transactions(request):
    data = MyModel.objects.all()
    return ModelList(data=data)


@router.get("/{uuid}", auth=JWTAuth(), response=ModeOut)
def get_transaction(request, uuid: uuid.UUID):
    data = get_object_or_404(MyModel, uuid=uuid)
    return data


@router.post("", auth=JWTAuth())
def create_transaction(request, payload: ModelIn):
    addData = payload.dict()
    addData["user_uuid"] = request.user.uuid
    data = MyModel.objects.create(**addData)
    return {"id": data.id}


@router.put("/{uuid}", auth=JWTAuth())
def update_transaction(request, uuid: uuid.UUID, payload: ModelIn):
    data = get_object_or_404(MyModel, uuid=uuid)
    for attr, value in payload.dict().items():
        setattr(data, attr, value)
    data.save()
    return {"success": True}


@router.delete("/{uuid}", auth=JWTAuth())
def delete_transaction(request, uuid: uuid.UUID):
    data = get_object_or_404(MyModel, uuid=uuid)
    data.delete()
    return {"success": True}


router_download = Router(tags=["transaction download"])


@router_download.post("/csv")
def download_transaction_csv(request):
    response = HttpResponse(content_type="text/csv")
    response["Content-Disposition"] = f'attachment; filename="todo.csv"'
    writer = csv.writer(response)
    # data column
    model_fields = MyModel._meta.fields
    field_names = [field.name for field in model_fields]
    del field_names[field_names.index("id")]
    del field_names[field_names.index("uuid")]
    del field_names[field_names.index("user_uuid")]
    writer.writerow(field_names)
    # data rows
    data = MyModel.objects.all()
    for item in data:
        row = [str(getattr(item, field)) for field in field_names]
        writer.writerow(row)

    return response
