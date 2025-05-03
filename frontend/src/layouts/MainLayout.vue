<template>
  <main class="bg-base-300">
    <Alert />
    <TPSidebar button-label="main" :items="siderItems">
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
import { siderItems } from '@/config/siderbar';
</script>
