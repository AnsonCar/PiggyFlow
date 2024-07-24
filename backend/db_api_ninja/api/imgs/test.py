import pytesseract
from PIL import Image
image = Image.open('./00006737.jpg')
text = pytesseract.image_to_string(image, lang='chi_sim')
# , config='digits',
print(text)

