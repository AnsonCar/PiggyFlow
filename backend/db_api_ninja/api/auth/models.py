from ninja import Schema

class AuthIn(Schema):
    username: str
    password: str

