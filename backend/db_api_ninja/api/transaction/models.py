import uuid
from django.db import models


class Transaction(models.Model):
    id = models.AutoField(primary_key=True)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)
    user_uuid = models.UUIDField(editable=False, null=True)
    datetime = models.DateTimeField(blank=False)
    label = models.CharField(max_length=255, blank=False)
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=False)

    class Meta:
        db_table = "transaction"
