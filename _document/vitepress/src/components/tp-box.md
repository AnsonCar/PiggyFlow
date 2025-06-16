# TP Box 组件

`tp-box.vue` 是一个通用容器组件，基于 Tailwind CSS 和 DaisyUI 的样式系统。

## 功能特性

- 多种预设样式变体
- 响应式设计
- 支持自定义类名
- 内置间距系统
- 阴影效果控制

## 使用示例

```vue
<template>
  <tp-box variant="primary" :padding="4" shadow="lg" class="custom-class">
    <p>这是一个内容盒子</p>
  </tp-box>
</template>
```

## Props

| 属性名  | 类型   | 默认值    | 说明                                        |
| ------- | ------ | --------- | ------------------------------------------- |
| variant | String | 'default' | 样式变体 (default/primary/secondary/accent) |
| padding | Number | 2         | 内边距大小 (1-8)                            |
| shadow  | String | 'none'    | 阴影大小 (none/sm/md/lg/xl)                 |
| rounded | String | 'md'      | 圆角大小 (none/sm/md/lg/full)               |

## Slots

| 名称    | 说明         |
| ------- | ------------ |
| default | 盒子主要内容 |
