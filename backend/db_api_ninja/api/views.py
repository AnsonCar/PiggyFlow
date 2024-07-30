from ninja_jwt.controller import NinjaJWTDefaultController
from ninja_extra import NinjaExtraAPI

api = NinjaExtraAPI(app_name="DataBase NinjaExtra API Test" ,title="DataBase NinjaExtra API")
api.register_controllers(NinjaJWTDefaultController)

from .user.router import router as userRouter
from .user_group.router import router as groupRouter

# from .auth.router import authRouter as authRouter
from .transaction.router import router as transactionRouter
from .todo.router import router as todoRouter
from .translate.router import router as translateRouter

api.add_router("/user", userRouter)
# api.add_router("/auth", authRouter)
api.add_router("/group", groupRouter)

api.add_router("/transaction", transactionRouter)
api.add_router("/todo", todoRouter)
api.add_router("/translate", translateRouter)
