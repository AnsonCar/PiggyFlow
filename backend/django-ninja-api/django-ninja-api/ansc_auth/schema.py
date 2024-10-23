import uuid
from ninja import Schema


class GroupIn(Schema):
    name: str


class GroupPut(Schema):
    name: str


class GroupOut(Schema):
    id: int
    name: str


class GroupList(Schema):
    data: list[GroupOut]


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
