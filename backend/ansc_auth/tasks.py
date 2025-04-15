from config.celery import app


@app.task()
def mytest():
    print("test")
    return "runturn test"
