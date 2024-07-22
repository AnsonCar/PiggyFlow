<template class="size-full">
  <Sidebar :title>
    <template v-slot:navbar>
      <Navbar :title>
        <!-- <template v-slot:navbarfuntion>
          <slot name="innavbarfuntion"></slot>
        </template> -->
      </Navbar>
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
      // { text: '儀表板', link: '/' },
    ]
  },
  {
    text: '工具箱',
    items: [
      { text: '要事', link: '/todo' },
      { text: '記帳', link: '/account' },
      { text: 'QRCode', link: '/qrcode'}
    ]
  },
  {
    text: '身份管理',
    items: [
      { text: '用戶', link: '/user' },
      { text: '組別', link: '/group' }
    ]
  }
]
</script>

<style>
.page-enter-active {
  transition: all 0.1s ease-out;
}

.page-leave-active {
  transition: all 0.1s ease-in;
}
.page-enter-from,
.page-leave-to {
  opacity: 0.2;
  filter: blur(1rem);
}

</style>