# API Main File
import os

import uvicorn
from dotenv import load_dotenv

from utils.printColor import BLUE, END, GREEN, RED

load_dotenv()

PORT = int(os.getenv("DJANGO_PORT", 8000))
DEBUG = True if os.getenv("DJANGO_DEBUG") == "True" else False
DEPLOY = os.getenv("DJANGO_DEPLOY", "Null")
WORKERS = 1 if DEBUG else 8


def debug_mode():
    return f"{GREEN}True{END}" if DEBUG else f"{RED}Flase{END}"


if __name__ == "__main__":
    print("-" * 50)
    print(f"ANSC:\tAPI SERVER PostgreSQL Django-Ninja API | {BLUE}{DEPLOY.capitalize()}{END}")
    print(f"ANSC:\tAPI SERVER RUN ON {BLUE}http://127.0.0.1:{PORT}{END}")
    print(f"ANSC:\tAPI SERVER DEBUG MODE: {debug_mode()}")
    print(f"ANSC:\tAPI SERVER WORKERS: {BLUE}{WORKERS}{END}")
    print("-" * 50)

    uvicorn.run(
        "config.asgi:application",
        host="0.0.0.0",
        port=PORT,
        reload=DEBUG,
        workers=WORKERS,
    )
