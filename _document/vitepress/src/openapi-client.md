# 自动生成的 OpenAPI 客户端

PiggyFlow 提供了自动生成的 OpenAPI 客户端功能，可以简化前端与后端 API 的交互。

## 功能特点

- 自动从后端 OpenAPI 规范生成 TypeScript 客户端
- 完整的类型定义支持
- 内置请求验证
- 错误处理标准化
- 支持 JWT 认证

## 使用方法

### 1. 生成客户端

```typescript
import { genClientApi } from "@/lib/genOpenApiClient/openapiHepler";

// 生成并更新客户端代码
await genClientApi();
```

### 2. 使用生成的 API

```typescript
import { AuthApi } from "@/api/auto-generated";

const authApi = new AuthApi();
const response = await authApi.login({
  username: "test",
  password: "test123",
});
```

## 技术实现

客户端生成流程：

1. 从后端获取 OpenAPI 规范
2. 解析并生成 TypeScript 类型定义
3. 创建 API 请求封装
4. 输出到 `src/api/auto-generated` 目录

## 示例代码

查看测试文件了解完整用法：
[openapi.test.ts](/test/openapi.test.ts)

## 注意事项

- 每次后端 API 变更后需要重新生成客户端
- 生成的文件不应手动修改
- 开发环境会自动监听 API 变化并重新生成
