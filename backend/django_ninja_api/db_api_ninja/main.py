# API Main File
import uvicorn
import os
from dotenv import load_dotenv

load_dotenv()

PORT = int(os.getenv("DJANGO_PORT", 8000))
DEBUG = True if os.getenv("DJANGO_DEBUG") == 'True' else False
DEPLOY = os.getenv("DJANGO_DEPLOY", 'Null')
WORKERS = 1 if DEBUG else 8

if __name__ == "__main__":
    print('-'*50)
    print(f'ANSC:\t  API SERVER: PostgreSQL Django-Ninja API | {DEPLOY.capitalize()}')
    print(f'ANSC:\t  API SERVER RUN ON http://127.0.0.1:{PORT}')
    print(f"ANSC:\t  API SERVER DEBUG MODE: {DEBUG}")
    print(f"ANSC:\t  API SERVER WORKERS: {WORKERS}")
    print('-'*50)
    uvicorn.run("db_api_ninja.asgi:application", host="0.0.0.0", port=PORT, reload=DEBUG, workers=WORKERS)
