# 前端状态管理

## Pinia 存储模块

### Auth Store (认证状态)

- 管理 JWT 令牌和刷新令牌
- 提供登录状态检查
- 处理令牌刷新逻辑
- 持久化存储用户认证状态

### Alert Store (消息通知)

- 全局消息通知管理
- 支持多种消息类型
- 自动消失功能
- 消息队列处理

### Language Store (多语言)

- 管理当前语言设置
- 支持浏览器语言自动检测
- 持久化存储用户语言偏好

## 代码示例

```typescript
// 使用 Auth Store
const auth = useAuthStore();
const isLoggedIn = await auth.isLogin();

// 使用 Alert Store
const alert = useAlertStore();
alert.addItem({ type: "success", message: "操作成功" });

// 使用 Language Store
const lang = useLanguageStore();
lang.lang = "zh-CN";
```

[查看存储实现 →](/stores-code)
