import csv
from django.http import HttpResponse

def download_csv(MyModel, file_name:str):
    response = HttpResponse(content_type="text/csv")
    response["Content-Disposition"] = f'attachment; filename="{file_name}.csv"'
    writer = csv.writer(response)
    # data column
    model_fields = MyModel._meta.fields
    field_names = [field.name for field in model_fields]
    del field_names[field_names.index("id")]
    del field_names[field_names.index("uuid")]
    del field_names[field_names.index("user_uuid")]
    writer.writerow(field_names)
    # data rows
    data = MyModel.objects.all()
    for item in data:
        row = [str(getattr(item, field)) for field in field_names]
        writer.writerow(row)
    return response