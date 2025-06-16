# TP CRUD Button 组件

`tp-crud-btn.vue` 是一个专门为 CRUD 操作设计的按钮组组件，集成了常见的增删改查操作按钮。

## 功能特性

- 预置 CRUD 操作按钮 (新增、编辑、删除、查看)
- 统一的按钮样式和交互
- 权限控制支持
- 批量操作支持
- 自定义按钮组合

## 使用示例

```vue
<template>
  <tp-crud-btn
    :show-create="true"
    :show-edit="hasEditPermission"
    :show-delete="hasDeletePermission"
    @create="handleCreate"
    @edit="handleEdit"
    @delete="handleDelete"
  />
</template>

<script setup>
const hasEditPermission = true;
const hasDeletePermission = false;

const handleCreate = () => {
  // 处理新增逻辑
};

const handleEdit = () => {
  // 处理编辑逻辑
};

const handleDelete = () => {
  // 处理删除逻辑
};
</script>
```

## Props

| 属性名     | 类型    | 默认值 | 说明                   |
| ---------- | ------- | ------ | ---------------------- |
| showCreate | Boolean | true   | 是否显示新增按钮       |
| showEdit   | Boolean | true   | 是否显示编辑按钮       |
| showDelete | Boolean | true   | 是否显示删除按钮       |
| showView   | Boolean | false  | 是否显示查看按钮       |
| disabled   | Boolean | false  | 是否禁用所有按钮       |
| size       | String  | 'sm'   | 按钮尺寸 (xs/sm/md/lg) |

## Events

| 事件名 | 说明               |
| ------ | ------------------ |
| create | 点击新增按钮时触发 |
| edit   | 点击编辑按钮时触发 |
| delete | 点击删除按钮时触发 |
| view   | 点击查看按钮时触发 |
