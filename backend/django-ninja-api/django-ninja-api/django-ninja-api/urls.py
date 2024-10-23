import os
import orjson
from ninja_extra import NinjaExtraAPI
from ninja.parser import Parser
from ninja_jwt.controller import NinjaJWTDefaultController


class ORJSONParser(Parser):
    def parse_body(self, request):
        return orjson.loads(request.body)


MODE = os.getenv("DJANGO_DEPLOY", "Null")
NAME = f"DataBase NinjaExtra API | {MODE.capitalize()}"

api = NinjaExtraAPI(app_name=NAME, title=NAME, parser=ORJSONParser())
api.register_controllers(NinjaJWTDefaultController)

from api.transaction.router import router as transactionRouter
from api.todo.router import router as todoRouter

api.add_router("/transaction", transactionRouter)
api.add_router("/todo", todoRouter)

from django.urls import path

urlpatterns = [
    path("api/", api.urls),
    # path('admin/', admin.site.urls),
]
