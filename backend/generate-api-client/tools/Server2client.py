from .template import temp_header, temp_api


def get_api_path(api_path: str) -> str:
    path_parts: list = ["'"]
    path_list: list = api_path.split('/')[1:]
    path_list_len: int = len(path_list)
    for index, path_item in enumerate(path_list):
        if path_item.startswith("{") and path_item.endswith("}"):
            path_item = f"' + '{path_item}" + \
                ("' + '" if index + 1 < path_list_len else "")
        path_parts.append(path_item if index + 1 <
                          path_list_len else path_item + "'")
    return '/'.join(path_parts)


def get_api_parameters(parameters):
    return (','.join([f'{parameter["name"]} : {parameter["schema"]["type"]}' for parameter in parameters])).replace('array', '[]').replace('integer', 'number')


def server2client(data_paths: dict) -> str:
    api = ""
    for api_path, information in data_paths.items():
        # path name & parameters
        api_path = get_api_path(api_path)

        # mathod & all data
        for method, api_data in information.items():
            # fucntion name (use summary)
            summary: str = api_data['summary']
            api_name_lists: list[str] = summary.split()
            api_name = api_name_lists[0].lower(
            ) + ''.join([name.capitalize() for name in api_name_lists[1:]])
            # request body & parameters & path name (fucntion input...)
            api_body = ''
            api_parameters = get_api_parameters(api_data['parameters'])
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
            api += (temp_api % (api_name, api_path, method.upper(),
                    api_body, 'api' if 'download' not in api_name else 'apiFile'))
    return temp_header+api
