import uuid
from ninja import Schema
from api.auth.user_group.schema import GroupOut


class UserIn(Schema):
    username: str
    password: str


class UserPut(Schema):
    username: str


class UserPutPassword(Schema):
    password: str


class UserOut(Schema):
    id: int
    uuid: uuid.UUID
    username: str
    email: str
    groups: list[GroupOut]


class UserList(Schema):
    data: list[UserOut]


class UserGroup(Schema):
    id: int
