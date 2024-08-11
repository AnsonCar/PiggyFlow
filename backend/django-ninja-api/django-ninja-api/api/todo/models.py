from django.db import models
from api.utils.MyModel import MyModel

class ToDo(MyModel):
    user_uuid = models.UUIDField(editable=False, null=True)
    datetime = models.DateTimeField(blank=False)
    label = models.CharField(max_length=255, blank=False)
    done = models.BooleanField(default=False)

    class Meta:
        db_table = "todo"
