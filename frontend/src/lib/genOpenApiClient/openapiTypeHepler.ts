export function formatOpenApiType(schema: ISchemasItem): string {
  let keys = '';
  const { properties } = schema;
  const nameKeys = Object.keys(properties);
  for (const nameKey of nameKeys) {
    let type = properties[nameKey].type;

    if (type) {
      type = type.replace(/integer/g, 'number');
      type = type.replace(/array/g, '[]');
    }

    if ('items' in properties[nameKey]) {
      const refArr = (properties[nameKey].items?.$ref as string).split('/');
      type = refArr[refArr.length - 1] + type;
    }

    if ('anyOf' in properties[nameKey]) {
      const anyOf: string[] = properties[nameKey].anyOf?.map((item) => item.type) || ['unknown'];
      type = anyOf.join(' | ') as string;
    }

    keys += `  ${nameKey}: ${type};\n`;
  }
  let result = `interface ${schema.title} {\n${keys}}\n\n`;
  return result;
}

export function exportTypeFile(typeStr: string) {
  const fs = require('fs');
  fs.writeFile('./src/types/api.type.d.ts', typeStr, (err: any) => {
    if (err) throw err;
    console.log('File saved!');
  });
}
