interface IOpenApiSpec {
  openapi: string;
  info: {
    title: string;
    version: string;
    description: string;
  };
  paths: IPathsItem;
  components: {
    schemas: {
      [schema: string]: ISchemasItem;
    };
    securitySchemes: { AsyncJWTAuth: [Object] };
  };
  servers: [];
}

interface ISchemasItem {
  properties: Record<string, ISchemasItemProperties>;
  required: string[];
  title: string;
  type: 'object';
}

interface ISchemasItemProperties {
  description?: string;
  maxLength?: number;
  items?: { $ref: string };
  anyOf?: [{ type: string }];
  title: string;
  type: string | 'string' | 'integer' | 'array';
}

interface IPathsItems {
  [path: string]: TPathItem;
}

type TPathItem = Record<'post' | 'get' | 'put' | 'patch' | 'delete', IPathsItemData>;

interface IPathsItemData {
  operationId: string;
  summary: string;
  parameters: [[Object]];
  responses: { '200': [Object] };
  tags: string[];
  requestBody?: { content: [Object]; required: true };
  security?: [[Object]];
}
