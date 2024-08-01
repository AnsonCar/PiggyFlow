# API Main File
import uvicorn
import os
from dotenv import load_dotenv

load_dotenv()

PORT = int(os.getenv("DJANGO_PORT", 8000))
DEBUG = bool(os.getenv("DJANGO_DEBUG", True))

if __name__ == "__main__":
    print('-'*50)
    print(f'ANSC:\t  API SERVER RUN ON 127.0.0.1:{PORT}')
    print(f"ANSC:\t  API SERVER DEBUG MODE: {DEBUG}")
    print('-'*50)
    uvicorn.run("db_api_ninja.asgi:application", host="0.0.0.0", port=PORT, reload=DEBUG)
