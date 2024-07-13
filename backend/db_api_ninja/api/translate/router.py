from ninja import Router
from .schema import TranslateIn, TranslateOut

from opencc import OpenCC
from googletrans import Translator

ModelIn = TranslateIn
ModelOut = TranslateOut

router = Router(tags=["translate"])


@router.post("/cn2t", response=ModelOut)
def cn2t(request, payload: ModelIn):
    converter = OpenCC("s2t.json")
    data = str(converter.convert(payload.data))
    return {"data": data}


@router.post("/t2cn", response=ModelOut)
def t2cn(request, payload: ModelIn):
    converter = OpenCC("t2s.json")
    data = str(converter.convert(payload.data))
    return {"data": data}


@router.post("/en2t", response=ModelOut)
def en2t(request, payload: ModelIn):
    translator = Translator()
    data = translator.translate(payload.data, dest="zh-TW")
    return {"data": data.text}


@router.post("/t2en", response=ModelOut)
def t2en(request, payload: ModelIn):
    translator = Translator()
    data = translator.translate(payload.data, dest="en")
    return {"data": data.text}
