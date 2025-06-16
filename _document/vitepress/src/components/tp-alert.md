# TP Alert 组件

`tp-alert.vue` 是一个基于 DaisyUI 的警告提示组件。

## 功能特性

- 多种警告类型 (info, success, warning, error)
- 自定义图标
- 自动关闭功能
- 可关闭按钮
- 丰富的动画效果
- 响应式设计

## 使用示例

```vue
<template>
  <tp-alert
    type="success"
    :closable="true"
    :duration="5000"
    @close="handleClose"
  >
    操作成功！
  </tp-alert>
</template>

<script setup>
const handleClose = () => {
  console.log("Alert closed");
};
</script>
```

## Props

| 属性名   | 类型    | 默认值 | 说明                                  |
| -------- | ------- | ------ | ------------------------------------- |
| type     | String  | 'info' | 警告类型 (info/success/warning/error) |
| closable | Boolean | false  | 是否显示关闭按钮                      |
| duration | Number  | 0      | 自动关闭延时(ms)，0 表示不自动关闭    |
| icon     | String  | -      | 自定义图标名称                        |

## Events

| 事件名 | 说明             |
| ------ | ---------------- |
| close  | 当警告关闭时触发 |
