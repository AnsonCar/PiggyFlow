import uuid
from django.db import models


class ToDo(models.Model):
    id = models.AutoField(primary_key=True)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)
    user_uuid = models.UUIDField(editable=False, null=True)
    datetime = models.DateTimeField(blank=False)
    label = models.CharField(max_length=255, blank=False)
    done = models.BooleanField(default=False)

    class Meta:
        db_table = "todo"
