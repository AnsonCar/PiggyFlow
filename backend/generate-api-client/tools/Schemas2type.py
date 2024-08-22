from .template import temp_schemas


def schemas2type(data_schemas: dict) -> str:
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
