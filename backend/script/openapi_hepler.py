import requests
from pprint import pprint

class openapiHepler:
    def __init__(self, host: str = "127.0.0.1", port: str = "8000", path: str = "/api/openapi.json", url: str = None,):
        self.host: str = host,
        self.port: str = port,
        self.path= path
        self.url= url if url else f"http://{host}:{port}{path}"
        self.openapi_json = self.get_openapi_json()

    def get_openapi_json(self):
        try:
            response = requests.get(self.url)
            if response.status_code == 200:
                res = response.json()
                return res
            else:
                print(
                    "Failed to retrieve data. Status code:",
                    response.status_code,
                )
        except requests.RequestException as e:
            print("Error during request:\n", e)
    
    def get_schemas(self):
        if 'schemas' in self.openapi_json:
            self.schemas = self.openapi_json['schemas']
            return self.schemas
        
if __name__ == '__main__':
    openapi_hepler = openapiHepler()
    pprint(openapi_hepler.get_openapi_json())