from ninja import Router
from ninja import NinjaAPI, File
from ninja.files import UploadedFile

router = Router(tags=["ocr"])

import pytesseract
from PIL import Image

@router.post("/upload")
def upload_and_ocr(request, file: UploadedFile = File(...)):
    # 讀取上傳的圖片
    image = Image.open(file)
    # 使用 pytesseract 辨識圖片中的文字
    text = pytesseract.image_to_string(image, lang='chi_sim')
    return {'text': text}