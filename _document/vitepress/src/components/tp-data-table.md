# TP Data Table 组件

`tp-data-table.vue` 是一个基于 DaisyUI 的数据表格组件。

## 功能特性

- 分页支持
- 排序功能
- 筛选功能
- 自定义列模板
- 响应式设计
- 行选择功能
- 加载状态
- 空状态处理

## 使用示例

```vue
<template>
  <tp-data-table
    :columns="columns"
    :data="tableData"
    :loading="isLoading"
    :pagination="pagination"
    @sort="handleSort"
    @page-change="handlePageChange"
  >
    <template #actions="{ row }">
      <tp-btn size="sm" @click="editItem(row)">编辑</tp-btn>
      <tp-btn size="sm" type="error" @click="deleteItem(row)">删除</tp-btn>
    </template>
  </tp-data-table>
</template>
```
