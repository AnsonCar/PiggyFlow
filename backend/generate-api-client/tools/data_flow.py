import os
import json
import requests


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


def output_file(name: str, data: str | dict):
    output_dir = './dist/'
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    if (isinstance(data, dict)):
        data = json.dumps(data, indent=4, ensure_ascii=False)
    with open(f'{output_dir}{name}', 'w', encoding='utf-8') as f:
        f.write(data)
