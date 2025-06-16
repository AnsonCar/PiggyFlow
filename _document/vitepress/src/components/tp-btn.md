# TP Button 组件

`tp-btn.vue` 是一个基于 DaisyUI 的按钮组件，提供丰富的按钮样式和功能。

## 功能特性

- 多种按钮样式 (primary, secondary, accent, etc.)
- 多种按钮尺寸 (xs, sm, md, lg)
- 加载状态指示
- 禁用状态
- 图标支持
- 按钮组支持

## 使用示例

```vue
<template>
  <tp-btn
    variant="primary"
    size="md"
    :loading="isLoading"
    icon="save"
    @click="handleClick"
  >
    保存
  </tp-btn>
</template>

<script setup>
const isLoading = ref(false);

const handleClick = () => {
  isLoading.value = true;
  // 执行操作...
};
</script>
```

## Props

| 属性名    | 类型    | 默认值    | 说明                                           |
| --------- | ------- | --------- | ---------------------------------------------- |
| variant   | String  | 'primary' | 按钮样式 (primary/secondary/accent/ghost/link) |
| size      | String  | 'md'      | 按钮尺寸 (xs/sm/md/lg)                         |
| loading   | Boolean | false     | 是否显示加载状态                               |
| disabled  | Boolean | false     | 是否禁用按钮                                   |
| icon      | String  | -         | 按钮图标名称                                   |
| fullWidth | Boolean | false     | 是否撑满容器宽度                               |

## Events

| 事件名 | 说明           |
| ------ | -------------- |
| click  | 点击按钮时触发 |
