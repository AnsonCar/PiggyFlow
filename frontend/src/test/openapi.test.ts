import { fetchOpenAPI, formatOpenApiType } from '@/lib/openapiHepler';
import { expect, test } from 'vitest';

test('test', async () => {
  const openApiJson = await fetchOpenAPI('http://localhost:8000/api/openapi.json');
  const openApiSchemas = openApiJson.components.schemas;
  const schemaNameArr = Object.keys(openApiSchemas);
  const openApiTypes: Record<string, string> = {};

  for (const schemaName of schemaNameArr) {
    const schema = openApiSchemas[schemaName];
    openApiTypes[schemaName] = formatOpenApiType(schema);
    console.log(openApiTypes[schemaName]);
  }

  expect(1).toBe(1);
});
