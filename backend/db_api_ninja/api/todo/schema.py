import uuid
import datetime
from ninja import Schema


class ToDoIn(Schema):
    datetime: str
    label: str
    price: float


class ToDoOut(Schema):
    uuid: uuid.UUID
    user_uuid: uuid.UUID
    datetime: datetime.datetime
    label: str
    done: bool


class ToDoList(Schema):
    data: list[ToDoOut]
