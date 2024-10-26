from .settings import NAME
from django.urls import path
from .parser import ORJSONParser
from ninja_extra import NinjaExtraAPI
from ninja_jwt.controller import NinjaJWTDefaultController
from api.transaction.router import router as transactionRouter
from api.todo.router import router as todoRouter
from ansc_auth.views import router as userRouter, routerGroup as userGroupRouter


api = NinjaExtraAPI(app_name=NAME, title=NAME, parser=ORJSONParser())
api.register_controllers(NinjaJWTDefaultController)
api.add_router("/user", userRouter)
api.add_router("/group", userGroupRouter)
api.add_router("/transaction", transactionRouter)
api.add_router("/todo", todoRouter)


urlpatterns = [
    path("api/", api.urls),
    # path('admin/', admin.site.urls),
]
