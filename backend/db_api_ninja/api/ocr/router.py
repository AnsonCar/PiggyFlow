# from ninja import Router
# from ninja import NinjaAPI, File
# from ninja.files import UploadedFile

# router = Router(tags=["ocr"])

# import cv2
# import pytesseract
# import numpy as np

# @router.post("/upload")
# def upload_and_ocr(request, file: UploadedFile = File(...)):
#     # 讀取上傳的圖片
#     content = file.read()
#     nparr = np.frombuffer(content, np.uint8)
#     img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
#     gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
#     ret, binary = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY_INV | cv2.THRESH_OTSU)
    
#     # 使用 pytesseract 辨識圖片中的文字
#     text = pytesseract.image_to_string(binary, lang='chi_sim')
    
#     return {'text': text}

from ninja import Router
from ninja import NinjaAPI, File
from ninja.files import UploadedFile

router = Router(tags=["ocr"])

import pytesseract
from PIL import Image

@router.post("/upload")
def upload_and_ocr(request, file: UploadedFile = File(...)):
    image = Image.open(file)
    text = pytesseract.image_to_string(image, lang='chi_sim')
    return {'text': text}

# /opt/homebrew/Cellar/tesseract/5.4.1/share