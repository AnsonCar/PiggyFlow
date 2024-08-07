import os
import json
import requests
from .template import temp_header, temp_schemas, temp_api


def get_openapi_json(url_or_path: str):
    try:
        response = requests.get(url_or_path)
        if response.status_code == 200:
            data = response.json()
            return data
        else:
            print("Failed to retrieve data. Status code:", response.status_code)
    except requests.RequestException as e:
        print("Error during request:\n", e)

    # file_path = './openapi.json'
    # with open(file_path, 'r') as file:
    #     data = file.read()
    # return json.loads(data)


def output_file(name: str, data: str | dict):
    output_dir = './dist/'
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    if (isinstance(data, dict)):
        data = json.dumps(data, indent=4, ensure_ascii=False)
    with open(f'{output_dir}{name}', 'w', encoding='utf-8') as f:
        f.write(data)


def get_schemas(data_schemas: dict) -> str:
    schemas = ""
    # type name & type data
    for schemas_name, schemas_item in data_schemas.items():
        type_text = ''
        # type item name & type
        for item_name, item_type in schemas_item['properties'].items():
            # if have two or mor type
            if (item_type.get('anyOf')):
                anyOf = ' | '.join([anyType['type']
                                    for anyType in item_type.get('anyOf')])
                type_text += f'  {item_name}: {anyOf}\n'
            # just one type
            else:
                item_type = item_type.get('type')
                type_text += f'  {item_name}: {item_type}\n'
        schemas += (temp_schemas % (schemas_name, type_text))
        # change python type to javascript type
        schemas = schemas.replace('array', '[]').replace('integer', 'number')
    return schemas


def get_api(data_paths: dict) -> str:
    api = ""
    for api_path, information in data_paths.items():
        # path name & parameters
        if len(api_path.split('{')) == 1:
            api_path = '"' + api_path + '"'
        else:
            text = ' + ' + \
                ' + '.join(api_path.split('{')[1:]).replace('}', ' ')
            api_path = '"' + api_path.split('{')[0] + '"' + text
        # mathod & all data
        for method, api_data in information.items():
            # fucntion name (use summary)
            api_name = (api_data['summary']).split()
            api_name = api_name[0].lower() + ''.join(api_name[1:])
            # parameters
            api_parameters = ','.join(
                [f'{parameter["name"]} : {parameter["schema"]["type"]}' for parameter in api_data['parameters']])
            api_parameters = api_parameters.replace(
                'array', '[]').replace('integer', 'number')
            # request body & parameters & path name (fucntion input...)
            api_body = ''
            if api_data.get('requestBody'):
                api_schemas = api_data['requestBody']['content']['application/json']['schema']['$ref'].split(
                    '/')[-1]
                api_body = '\n\t\tbody: JSON.stringify(data)' if len(
                    api_schemas) != 0 else ''
                api_parameters = (' ,' if len(api_parameters)
                                  else '') + api_parameters
                api_name += f'(data: {api_schemas} {api_parameters})'
            else:
                api_name += f'({api_parameters})'
            # responses type
            if api_data['responses']['200'].get('content'):
                api_responses = api_data['responses']['200']['content']['application/json']['schema']['$ref'].split(
                    '/')[-1]
                # for typescript
                api_name += f': Promise<{api_responses}>'
            # download file use apiFile fucntion (use path name to check)
            api += (temp_api % (api_name, api_path, method.upper(), api_body,
                    'api' if 'download' not in api_name else 'apiFile'))
    return temp_header+api
