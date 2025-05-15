import { fetchOpenAPI, formatOpenApiType, getOpenApiFetchAPI } from '@/lib/openapiHepler';
import { expect, test } from 'vitest';

test('test', async () => {
  const openApiJson = await fetchOpenAPI('http://localhost:8000/api/openapi.json');
  const openApiSchemas = openApiJson.components.schemas;
  const openApiPaths = openApiJson.paths;

  const schemaNameArr = Object.keys(openApiSchemas);
  const openApiTypes: Record<string, string> = {};

  const pathArr = Object.keys(openApiPaths);

  for (const schemaName of schemaNameArr) {
    const schema = openApiSchemas[schemaName];
    openApiTypes[schemaName] = formatOpenApiType(schema);
  }

  for (const path of pathArr) {
    const api = getOpenApiFetchAPI(path, openApiPaths[path]);
  }
  expect(1).toBe(1);
});
