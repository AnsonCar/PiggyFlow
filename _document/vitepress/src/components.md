# 前端组件 (Tonya Puzzle)

Tonya Puzzle (简称 tp) 是基于 Tailwind CSS 4 和 DaisyUI 5 的组件系统，设计理念是像拼图一样简单组合使用。

## 核心组件

### 基础组件

- `tp-btn`: 按钮组件
- `tp-input`: 输入框组件
- `tp-icon`: 图标组件
- `tp-alert`: 消息提示组件

### 复合组件

- `tp-data-table`: 数据表格
- `tp-crud-btn`: CRUD 操作按钮组
- `tp-diag`: 对话框组件

## 组件特点

1. **一致性设计**:

   - 统一的设计语言和交互方式
   - 遵循 DaisyUI 的设计规范

2. **可定制性**:

   - 通过 props 灵活配置
   - 支持主题切换

3. **国际化支持**:
   - 内置多语言支持
   - 示例: TPLangButton 语言切换组件

## 使用示例

```vue
<template>
  <tp-btn type="primary" @click="handleClick"> 点击我 </tp-btn>
</template>
```

[查看组件源码 →](/components-code)
