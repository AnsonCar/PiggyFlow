from ninja_jwt.controller import NinjaJWTDefaultController
from ninja_extra import NinjaExtraAPI

api = NinjaExtraAPI(app_name="DataBase NinjaExtra API" ,title="DataBase NinjaExtra API")
api.register_controllers(NinjaJWTDefaultController)

from .user.router import router as userRouter

from .auth.router import authRouter as authRouter
from .transaction.router import router as transactionRouter
from .transaction.router import router_download as transactionDownloadRouter
from .todo.router import router as todoRouter
from .todo.router import router_download as todonDownloadRouter

from .translate.router import router as translateRouter

api.add_router("/user", userRouter)
api.add_router("/auth", authRouter)

api.add_router("/transaction", transactionRouter)
api.add_router("/transaction/download", transactionDownloadRouter)
api.add_router("/todo", todoRouter)
api.add_router("/todo/download", todonDownloadRouter)

api.add_router("/translate", translateRouter)