from ansc_auth.views import router as userRouter
from ansc_auth.views import routerGroup as userGroupRouter
from django.conf import settings
from ninja_extra import NinjaExtraAPI
from ninja_jwt.controller import NinjaJWTDefaultController
from todo.views import router as todoRouter

from ..orjson_parser import ORJSONParser

NAME = settings.NAME

print("loading ninja api")
api = NinjaExtraAPI(app_name=NAME, title=NAME, parser=ORJSONParser())
api.register_controllers(NinjaJWTDefaultController)
api.add_router("/user", userRouter)
api.add_router("/group", userGroupRouter)
# api.add_router("/todo", todoRouter)
