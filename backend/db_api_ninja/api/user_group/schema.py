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