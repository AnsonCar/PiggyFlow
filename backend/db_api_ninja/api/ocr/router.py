from ninja import Router
from ninja import NinjaAPI, File
from ninja.files import UploadedFile

router = Router(tags=["ocr"])

@router.post("/upload")
def upload(request, file: UploadedFile = File(...)):
    data = file.read()
    return {'name': file.name, 'len': len(data)}