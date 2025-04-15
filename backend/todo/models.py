from django.db import models

from utils.BaseModelMixin import BaseModelMixin


class ToDo(BaseModelMixin):
    user_uuid = models.UUIDField(editable=False, null=True)
    datetime = models.DateTimeField(blank=False)
    label = models.CharField(max_length=255, blank=False)
    done = models.BooleanField(default=False)

    class Meta:
        db_table = "todo"
