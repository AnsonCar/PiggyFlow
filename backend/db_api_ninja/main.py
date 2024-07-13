# API Main File
import uvicorn
import os
from dotenv import load_dotenv

load_dotenv()

PORT = int(os.getenv("DJANGO_PORT", 8000))
DEBUG = bool(os.getenv("DJANGO_DEBUG", True))

if __name__ == "__main__":
    # print(f"http://127.0.0.1:{PORT}")
    uvicorn.run("db_api_ninja.asgi:application", host="0.0.0.0", port=PORT, reload=DEBUG)
