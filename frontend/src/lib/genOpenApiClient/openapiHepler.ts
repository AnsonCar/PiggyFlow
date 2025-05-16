import { exportFetchApiFile, fetchOpenAPI, getOpenApiFetchAPI } from '@/lib/genOpenApiClient/openapiFetachAPIHepler';
import { exportTypeFile, formatOpenApiType } from '@/lib/genOpenApiClient/openapiTypeHepler';
export async function genClientApi() {
  // base
  const openApiJson = await fetchOpenAPI('http://localhost:8000/api/openapi.json');
  const openApiSchemas = openApiJson.components.schemas;
  const openApiPaths = openApiJson.paths;

  // type
  const schemaNameArr = Object.keys(openApiSchemas);
  const openApiTypes: Record<string, string> = {};
  let openApiTypesText = '';
  for (const schemaName of schemaNameArr) {
    const schema = openApiSchemas[schemaName];
    openApiTypes[schemaName] = formatOpenApiType(schema);
    openApiTypesText += openApiTypes[schemaName];
  }
  exportTypeFile(openApiTypesText);

  // api
  const fetchApiDict = getOpenApiFetchAPI(openApiPaths);
  const tags = Object.keys(fetchApiDict);
  for (const tag of tags) {
    const apiText = 'import { api, getHeaders } from "@/lib/Requester";\n\n' + fetchApiDict[tag].join('\n');
    exportFetchApiFile(tag, apiText);
  }
}
