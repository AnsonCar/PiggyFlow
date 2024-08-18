import uuid
from ninja import Schema

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
    
class UserList(Schema):
    data: list[UserOut]
    
class UserGroup(Schema):
    id: int