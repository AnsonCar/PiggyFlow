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
from paddleocr import PaddleOCR
router = Router(tags=["ocr"])
import numpy as np
import pytesseract
from PIL import Image
import io
'''pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
@router.post("/upload")
def upload_and_ocr(request, file: UploadedFile = File(...)):
    image = Image.open(file)
    text = pytesseract.image_to_string(image, lang='eng')
    return {'text': text}
'''
###以上係anson version######
# /opt/homebrew/Cellar/tesseract/5.4.1/share

ocr = PaddleOCR()
@router.post("/upload")
def upload_and_ocr(request, file: UploadedFile = File(...)):
    # 使用 PaddleOCR 進行文字識別
    image_data = file.read()
    image = Image.open(io.BytesIO(image_data))
    image_array = np.array(image)
    result = ocr.ocr(image_array, cls=True)
    
    # 提取文字並返回
    text = "\n".join(line[1][0] for idx in range(len(result)) for line in result[idx])
    return {"text": text}
'''
@router.post("/upload")
def upload_and_ocr(request, file: UploadedFile = File(...)):
    # 使用 PaddleOCR 進行文字識別
    image = Image.open(file.file, mode='rb')
    image_array = np.array(image)
    result = ocr.ocr(image_array, cls=True)
    
    # 提取文字並返回
    text = ""
    for idx in range(len(result)):
        res = result[idx]
        for line in res:
            text += line[1][0] + "\n"
    return {"text": text}
'''
"""from paddleocr import PaddleOCR, draw_ocr

# Paddleocr目前支持的多语言语种可以通过修改lang参数进行切换
# 例如`ch`, `en`, `fr`, `german`, `korean`, `japan`
ocr = PaddleOCR(use_angle_cls=True, lang="ch")  # need to run only once to download and load model into memory
img_path = './imgs/11.jpg'
result = ocr.ocr(img_path, cls=True)
for idx in range(len(result)):
    res = result[idx]
    for line in res:
        print(line)

# 显示结果
from PIL import Image
result = result[0]
image = Image.open(img_path).convert('RGB')
boxes = [line[0] for line in result]
txts = [line[1][0] for line in result]
scores = [line[1][1] for line in result]
im_show = draw_ocr(image, boxes, txts, scores, font_path='./fonts/simfang.ttf')
im_show = Image.fromarray(im_show)
im_show.save('result.jpg')"""
