import json
import os


def input_file(input_path: str = "") -> str | dict:
    data = ""
    with open(f"{input_path}", "r", encoding="utf-8") as f:
        data = f.read()
    return data

def output_file(name: str, data: str | dict, output_dir: str = "./dist") -> None:
    """
    Writes data to a file in the specified output directory.

    Args:
        name (str): The name of the output file.
        data (str | dict): The data to be written to the file.
                           If data is a dict, it will be JSON serialized.
        output_dir (str, optional): The output directory where
                                    the file will be created.
                                    Defaults to "./dist/".
    """
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    if isinstance(data, dict):
        data = json.dumps(data, indent=4, ensure_ascii=False)

    with open(f"{output_dir}/{name}", "w", encoding="utf-8") as f:
        f.write(data)