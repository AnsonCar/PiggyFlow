import csv
from django.http import HttpResponse
from asgiref.sync import sync_to_async


async def download_csv(MyModel, file_name: str):
    response = HttpResponse(content_type="text/csv")
    response["Content-Disposition"] = f'attachment; filename="{file_name}.csv"'
    writer = csv.writer(response)

    # data columns
    model_fields = MyModel._meta.fields
    field_names = [field.name for field in model_fields if field.name not in [
        "id", "uuid", "user_uuid"]]

    writer.writerow(field_names)

    # fetch data asynchronously
    data = await sync_to_async(list)(MyModel.objects.all().order_by('id'))

    for item in data:
        row = [str(getattr(item, field)) for field in field_names]
        writer.writerow(row)

    return response

# async def download_csv(MyModel, file_name: str):
#     response = HttpResponse(content_type="text/csv")
#     response["Content-Disposition"] = f'attachment; filename="{file_name}.csv"'
#     writer = csv.writer(response)

#     # data column
#     model_fields = MyModel._meta.fields
#     field_names = [field.name for field in model_fields]

#     del field_names[field_names.index("id")]
#     del field_names[field_names.index("uuid")]
#     del field_names[field_names.index("user_uuid")]

#     writer.writerow(field_names)

#     # data rows
#     data = [data async for data in MyModel.objects.all()]
#     for item in data:
#         row = [str(getattr(item, field)) for field in field_names]
#         writer.writerow(row)
#     return response
