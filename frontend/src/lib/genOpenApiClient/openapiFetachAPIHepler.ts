export async function fetchOpenAPI(url: string): Promise<IOpenApiSpec> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as IOpenApiSpec;
    return data;
  } catch (error) {
    console.error('Fetch failed:', error);
    return {} as IOpenApiSpec;
  }
}

/**
 * 根据提供的 OpenAPI 路径生成 API 函数。
 * @param openApiPaths - 包含 OpenAPI 路径及其方法的对象。
 * @returns 返回一个记录，将标签映射到生成的 API 函数字符串数组。
 */
export function getOpenApiFetchAPI(openApiPaths: IPathsItems) {
  /**
   * 1. 遍历所有路径和方法，提取标签、摘要、请求体和参数。
   * 2. 根据请求体类型（如 JSON 或文件上传），生成不同的请求配置。
   * 3. 动态生成 API 函数代码，并按标签分组存储。
   */
  const pathArr = Object.keys(openApiPaths); // 提取所有路径键
  const result: Record<string, string[]> = {}; // 初始化结果对象

  for (const path of pathArr) {
    const pathsItem = openApiPaths[path];
    // 获取当前路径的方法（GET、POST 等）
    const methods = Object.keys(pathsItem).filter((key): key is keyof TPathItem => ['get', 'post', 'put', 'patch', 'delete'].includes(key));
    // 格式化路径名称以支持动态参数
    const pathName = getPathName(path);

    for (const method of methods) {
      // console.log(pathsItem[method]);
      const { tags, summary, requestBody, parameters } = pathsItem[method]; // 解构方法详情
      const tag = getTagName(tags); // 生成格式化的标签名称
      const apiName = getApiName(summary); // 从摘要生成函数名称
      const pathParams = getParameters(parameters); // 提取查询/路径参数

      // 处理请求体（如果存在）
      let body = '';
      let bodyParam = '';
      let fetchFunction = 'api'; // 默认的 fetch 函数名称

      if (requestBody && 'content' in requestBody) {
        const requestBodyPayload = requestBody?.content;
        const requestBodyType = Object.keys(requestBodyPayload)[0];

        if (requestBodyType === 'application/json') {
          body = '\n    body: JSON.stringify(data),'; // 将 JSON 数据添加到选项中
          const bodyParams = (requestBodyPayload[requestBodyType].schema.$ref as string).split('/');
          bodyParam = `data: ${bodyParams[bodyParams.length - 1]}`; // 提取类型引用
        } else if (requestBodyType === 'multipart/form-data') {
          fetchFunction = 'apiFile'; // 使用不同的 fetch 函数处理文件
        }
      }

      // 合并请求体参数和路径/查询参数
      const functionParams = [bodyParam, pathParams].filter((e) => e !== '').join(', ');

      // 生成 API 函数模板
      const apiFetch = `export async function ${apiName}(${functionParams}) {
  const url = \`${pathName}\`;
  const options = {
    method: '${method}',
    headers: getHeaders(),${body}
  };
  return await ${fetchFunction}(url, options);
}\n`;
      console.log(apiFetch);
      if (!result[tag]) {
        result[tag] = [];
      }
      result[tag].push(apiFetch);
    }
  }
  return result;
}

/**
 * 格式化标签名称，将后续单词首字母大写。
 * @param tags - 标签字符串数组。
 * @returns 格式化后的标签名称字符串。
 */
function getTagName(tags: string[]): string {
  const tagArr = tags[0].split(' ');
  let tag = '';
  for (const num in tagArr) {
    if (parseInt(num) > 0) {
      tag += tagArr[num].charAt(0).toUpperCase() + tagArr[num].slice(1); // 将后续单词首字母大写
    } else {
      tag += tagArr[num]; // 保留第一个单词不变
    }
  }
  return tag;
}

/**
 * 将摘要字符串转换为驼峰命名的函数名称。
 * @param summary - 描述 API 端点的摘要字符串。
 * @returns 驼峰命名的函数名称。
 */
function getApiName(summary: string): string {
  const summaryArr = summary.split(' ');
  let apiName = '';
  for (const num in summaryArr) {
    if (parseInt(num) > 0) {
      apiName += summaryArr[num].charAt(0).toUpperCase() + summaryArr[num].slice(1); // 将后续单词首字母大写
    } else {
      apiName += summaryArr[num].charAt(0).toLowerCase() + summaryArr[num].slice(1); // 将第一个单词首字母小写
    }
  }
  return apiName;
}

/**
 * 格式化路径字符串以支持动态参数（例如 `{id}` -> `${id}`）。
 * @param path - 原始 API 路径字符串。
 * @returns 格式化后的路径字符串，其中动态参数被替换。
 */
function getPathName(path: string): string {
  const pathList = path.split('/');
  const pathName = pathList.join('/').replace(/{/g, '${') + '/'; // 将 `{` 替换为 `${`
  return pathName;
}

/**
 * 提取并格式化查询/路径参数为单个字符串。
 * @param parameters - 参数对象数组。
 * @returns 逗号分隔的参数名称和类型字符串。
 */
function getParameters(parameters: IPahrItemDataParameters[]): string {
  return parameters
    .map((e) => {
      return e.name + ': ' + e.schema.type; // 将每个参数映射为 "name: type"
    })
    .join(', ')
    .replace(/integer/g, 'number'); // 将 "integer" 替换为 "number"
}

export function exportFetchApiFile(tag: string, apiText: string) {
  const fs = require('fs');
  fs.writeFile(`./src/api/api.${tag}.ts`, apiText, (err: any) => {
    if (err) throw err;
    console.log('File saved!');
  });
}
