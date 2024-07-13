from ninja import Router
from django.shortcuts import get_object_or_404
from api.user.models import CustomUser
from .models import AuthIn
from ninja_jwt.authentication import JWTAuth

# Auth only
authRouter = Router(tags=["auth"])

@authRouter.post("/password", auth=JWTAuth())
def change_password(request, payload: AuthIn):
    payload = payload.dict()
    # uuid = payload["uuid"]
    username = payload["username"]
    password = payload["password"]
    if username == request.auth.username:
        user = get_object_or_404(CustomUser, username=username)
        user.set_password(password)
        user.save()
        return {"success": True}
    else:
        return { 'msg': 'can not change password'}