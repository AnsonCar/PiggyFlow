import { genClientApi } from '@/lib/genOpenApiClient/openapiHepler';
import { expect, test } from 'vitest';

test('test', async () => {
  await genClientApi();
  expect(1).toBe(1);
});
