# TP Input 组件

`tp-input.vue` 是一个基于 DaisyUI 的输入框组件。

## 功能特性

- 多种输入类型 (text, password, email, number)
- 标签支持
- 错误状态显示
- 前缀/后缀图标
- 输入验证
- 响应式设计
- 禁用状态
- 只读状态

## 使用示例

```vue
<template>
  <tp-input
    v-model="username"
    label="用户名"
    type="text"
    placeholder="请输入用户名"
    :error="errors.username"
    required
  >
    <template #prefix>
      <tp-icon name="user" />
    </template>
  </tp-input>
</template>
```
