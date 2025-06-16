# 技术细节

## 前端技术

### 组件系统 (Tonya Puzzle)

- 基于 Tailwind CSS 4 和 DaisyUI 5
- 模块化设计，像拼图一样简单组合
- 包含常用组件:
  - 表单控件 (tp-input)
  - 按钮 (tp-btn)
  - 弹窗 (tp-diag)
  - 数据表格 (tp-data-table)

### 状态管理

- **Auth Store**: 处理 JWT 认证状态
- **Alert Store**: 全局消息通知
- **Language Store**: 多语言支持

### API 客户端

- 自动生成的 OpenAPI 客户端
- 类型安全的 API 调用
- 错误处理和重试机制

## 后端技术

### 认证系统

- JWT 令牌认证
- 令牌刷新机制
- 权限控制系统

### API 设计

- Django Ninja 框架
- OpenAPI 3.0 规范
- 自动文档生成

[查看前端组件 →](/components)
[查看后端 API →](/api)
