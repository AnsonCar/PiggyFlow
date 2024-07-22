from ninja import Router
from .schema import TranslateIn, TranslateOut
from .service import cn2t_service, t2cn_service, en2t_service, t2en_service

ModelIn = TranslateIn
ModelOut = TranslateOut

router = Router(tags=["translate"])


@router.post("/cn2t", response=ModelOut)
def cn2t(request, payload: ModelIn):
    return cn2t_service(payload)


@router.post("/t2cn", response=ModelOut)
def t2cn(request, payload: ModelIn):
    return t2cn_service(payload)


@router.post("/en2t", response=ModelOut)
def en2t(request, payload: ModelIn):
    return en2t_service(payload)


@router.post("/t2en", response=ModelOut)
def t2en(request, payload: ModelIn):
    return t2en_service(payload)
