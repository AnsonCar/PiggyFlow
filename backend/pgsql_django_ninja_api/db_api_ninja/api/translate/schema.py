from ninja import Schema

class TranslateIn(Schema):
    data: str
    
class TranslateOut(Schema):
    data: str
