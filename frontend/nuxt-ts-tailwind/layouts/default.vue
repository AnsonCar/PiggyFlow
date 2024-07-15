<template class="size-full">
  <Sidebar :title>
    <template v-slot:navbar>
      <Navbar :title></Navbar>
    </template>
    <template v-slot:sidebaritem>
      <SidebarItem :items="siderbaritems" ></SidebarItem>
    </template>
    <slot></slot>
  </Sidebar>
</template>

<script lang="ts" setup>
const title = 'Piggy Flow'

const siderbaritems = [
  {
    items: [
      { text: '儀表板', link: '/' },
    ]
  },
  {
    text: '工具箱',
    items: [
      // { text: '要事', link: '/todo' },
      { text: '記帳', link: '/account' }
    ]
  },
  // {
  //   text: '用戶管理',
  //   items: [
  //     { text: '每日要事', link: '/todo' },
  //     { text: '記帳', link: '/acccount' }
  //   ]
  // }
]
</script>