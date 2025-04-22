<template>
  <Alert />
  <main class="bg-base-300">
    <TPSidebar button-label="main" :items="siderbaritems">
      <TPTopbar class="lg:hidden" />
      <main class="h-[calc(100%-64px)] overflow-y-scroll p-4 pt-0 lg:h-full lg:pt-4">
        <router-view />
      </main>
    </TPSidebar>
  </main>
</template>

<script lang="ts" setup>
import TPSidebar from '@/components/tp/sidebar/tp-sidebar.vue';
import TPTopbar from '@/components/tp/topbar/tp-topbar.vue';
import Alert from '@/components/tp/tp-alert.vue';

const siderbaritems = [
  {
    items: [
      { text: '儀表板', name: 'home' },
      { text: '測試場', name: 'test' },
    ],
  },
  // {
  //   text: '工具箱',
  //   items: [
  //     { text: '要事', name: 'todo' },
  //     { text: '記帳', name: 'account' },
  //     { text: 'QRCode', name: 'qrcode' },
  //   ],
  // },
  // {
  //   text: '身份管理',
  //   items: [
  //     { text: '用戶', name: 'user' },
  //     { text: '組別', name: 'group' },
  //   ],
  // },
];
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
