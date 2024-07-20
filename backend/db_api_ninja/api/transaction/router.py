import uuid
from ninja import Router
from ninja_jwt.authentication import JWTAuth

from api.utils.download import download_csv
from .models import Transaction
from .schema import TransactionIn, TransactionList, TransactionOut
from .service import (
    get_transactions_service,
    get_transaction_service,
    update_transaction_service,
    create_transaction_service,
    delete_transaction_service,
)

MyModel = Transaction
ModelIn = TransactionIn
ModeOut = TransactionOut
ModelList = TransactionList

router = Router(tags=["transaction"])


@router.get("", auth=JWTAuth(), response=ModelList)
def get_transactions(request):
    data = get_transactions_service()
    return ModelList(data=data)


@router.get("/{uuid}", auth=JWTAuth(), response=ModeOut)
def get_transaction(request, uuid: uuid.UUID):
    return get_transaction_service(uuid)


@router.post("", auth=JWTAuth())
def create_transaction(request, payload: ModelIn):
    addData = payload.dict()
    addData["user_uuid"] = request.user.uuid
    return create_transaction_service(addData)


@router.put("/{uuid}", auth=JWTAuth())
def update_transaction(request, uuid: uuid.UUID, payload: ModelIn):
    return update_transaction_service(uuid, payload)


@router.delete("/{uuid}", auth=JWTAuth())
def delete_transaction(request, uuid: uuid.UUID):
    return delete_transaction_service(uuid)


@router.post("/download/csv", auth=JWTAuth())
def download_transaction_csv(request):
    return download_csv(MyModel, "transaction")
