import uuid
import datetime
from ninja import Schema


class TransactionIn(Schema):
    datetime: str
    label: str
    price: float


class TransactionOut(Schema):
    uuid: uuid.UUID
    user_uuid: uuid.UUID
    datetime: datetime.datetime
    label: str
    price: float


class TransactionList(Schema):
    data: list[TransactionOut]
