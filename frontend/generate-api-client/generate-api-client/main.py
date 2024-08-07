import logging
import schedule
from tools.data_flow import get_openapi_json, output_file, get_schemas, get_api

# Set up custom logger
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('ANSC')

logger.info('Generate API Client Started')

old_data_hash = hash('')
new_data_hash = hash('')


def job():
    global old_data_hash
    global new_data_hash
    try:
        data_dict = get_openapi_json()
        new_data_hash = hash(str(data_dict))
        if old_data_hash != new_data_hash:
            logger.info('Generate API Client Triggered')
            old_data_hash = new_data_hash

            data_schemas = data_dict['components']['schemas']
            data_paths = data_dict['paths']

            schemas = get_schemas(data_schemas)
            api = get_api(data_paths)

            output_file('db_api.ts', api + schemas)
    except :
        logger.error('Generate API Client Error')

schedule.every().second.do(job)

while True:
    schedule.run_pending()
