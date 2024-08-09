import os
import orjson
from ninja_extra import NinjaExtraAPI
from ninja.parser import Parser
from ninja_jwt.controller import NinjaJWTDefaultController

# from .translate.router import router as translateRouter
from .todo.router import router as todoRouter
from .transaction.router import router as transactionRouter
from .user_group.router import router as groupRouter
from .user.router import router as userRouter


# class ORJSONParser(Parser):
#     def parse_body(self, request):
#         return orjson.loads(request.body)


MODE = os.getenv('DJANGO_DEPLOY', 'Null')
NAME = f"DataBase NinjaExtra API | {MODE.capitalize()} "
# , parser=ORJSONParser()
api = NinjaExtraAPI(app_name=NAME, title=NAME)
api.register_controllers(NinjaJWTDefaultController)

# from .auth.router import authRouter as authRouter

# auth
api.add_router("/user", userRouter)
api.add_router("/group", groupRouter)
# 
api.add_router("/transaction", transactionRouter)
api.add_router("/todo", todoRouter)
#
# api.add_router("/translate", translateRouter)
