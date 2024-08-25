import uuid
from ninja import Router
from ninja_jwt.authentication import JWTAuth, AsyncJWTAuth

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


@router.get("", auth=AsyncJWTAuth(), response=ModelList)
async def get_transactions(request):
    user_uuid = request.user.uuid
    data = await get_transactions_service(user_uuid)
    return ModelList(data=data)


@router.get("/{uuid}", auth=AsyncJWTAuth(), response=ModeOut)
async def get_transaction(request, uuid: uuid.UUID):
    return await get_transaction_service(uuid)


@router.post("", auth=AsyncJWTAuth())
async def create_transaction(request, payload: ModelIn):
    addData = payload.dict()
    addData["user_uuid"] = request.auth.uuid
    return await create_transaction_service(addData)


@router.put("/{uuid}", auth=AsyncJWTAuth())
async def update_transaction(request, uuid: uuid.UUID, payload: ModelIn):
    return await update_transaction_service(uuid, payload)


@router.delete("/{uuid}", auth=AsyncJWTAuth())
async def delete_transaction(request, uuid: uuid.UUID):
    return await delete_transaction_service(uuid)


@router.post("/download/csv", auth=AsyncJWTAuth())
async def download_transaction_csv(request):
    return await download_csv(MyModel, "transaction")
