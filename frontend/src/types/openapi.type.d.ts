interface IOpenApiSpec {
  openapi: string;
  info: {
    title: string;
    version: string;
    description: string;
  };
  paths: {
    [path: string]: {
      post?: any;
      get?: any;
      put?: any;
      patch?: any;
      delete?: any;
    };
  };
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
