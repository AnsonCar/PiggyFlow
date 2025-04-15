import os
from datetime import timedelta

from celery import Celery

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")

app = Celery("backend", backend="redis://redis:6379", broker="redis://redis:6379")

# Using a string here means the worker doesn't have to serialize
# the configuration object to child processes.
# - namespace='CELERY' means all celery-related configuration keys
#   should have a `CELERY_` prefix.
app.config_from_object("django.conf:settings", namespace="CELERY")

# Load task modules from all registered Django apps.
app.autodiscover_tasks()


@app.task(bind=True, ignore_result=True)
def debug_task(self):
    print(f"Request: {self.request!r}")


# 固定的定時任務
# app.conf.update(
#     CELERYBEAT_SCHEDULE={
#         "test_task": {
#             "task": "ansc_auth.tasks.mytest",
#             "schedule": timedelta(seconds=1),
#             "args": (),
#         },
#     }
# )

# celery -A config.celery.app worker --loglevel=info
# celery -A config.celery.app beat --loglevel=info
