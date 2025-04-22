<template>
  <nav class="navbar bg-base-300">
    <div class="flex-none">
      <TPSidebarButton button-label="main" />
    </div>
    <div class="flex-1">
      <a class="btn btn-ghost text-xl lg:hidden">{{ VITE_APP_NAME }}</a>
    </div>
    <div class="flex-none">
      <slot name="navbarfuntion"></slot>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import TPSidebarButton from '@/components/tp/sidebar/tp-sidebar-button.vue';

const VITE_APP_NAME = import.meta.env.VITE_APP_NAME;
</script>
