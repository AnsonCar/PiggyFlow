import schedule
from tools.data_flow import get_openapi_json, output_file, get_schemas, get_api

print('ANSC:\tGenerate API Client RUNNING')


def job():
    data_dict = get_openapi_json()
    data_schemas = data_dict['components']['schemas']
    data_paths = data_dict['paths']
    schemas = get_schemas(data_schemas)
    api = get_api(data_paths)
    output_file('db_api.ts', api+schemas)


schedule.every().second.do(job)

while True:
    schedule.run_pending()
