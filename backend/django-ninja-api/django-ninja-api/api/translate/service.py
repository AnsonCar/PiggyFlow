from opencc import OpenCC
from googletrans import Translator


def cn2t_service(payload):
    converter = OpenCC("s2t.json")
    data = str(converter.convert(payload.data))
    return {"data": data}


def t2cn_service(payload):
    converter = OpenCC("t2s.json")
    data = str(converter.convert(payload.data))
    return {"data": data}


def en2t_service(payload):
    translator = Translator()
    data = translator.translate(payload.data, dest="zh-TW")
    return {"data": data.text}


def t2en_service(payload):
    translator = Translator()
    data = translator.translate(payload.data, dest="en")
    return {"data": data.text}
