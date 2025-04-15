<template class="size-full">
  <div class="drawer lg:drawer-open size-full">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content h-[100vh]">
      <!-- Nav -->
      <slot name="navbar"></slot>
      <main class="h-[calc(100%-64px)] overflow-y-scroll p-4 lg:h-full">
        <!-- Main -->
        <slot></slot>
      </main>
    </div>
    <div class="drawer-side">
      <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-base-200 text-base-content text-md min-h-full w-64 p-4">
        <div class="bg-base-200 text-base-content mb-4 flex items-center text-xl font-bold">
          <TPLangButton />
          <h1 class="ml-4">{{ props.title }}</h1>
        </div>
        <hr />
        <!-- Sidebar content here -->
        <slot name="sidebaritem"></slot>
        <li class="mt-auto">
          <div id="logoutBtn" @click="authStore.logout">
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
            </svg>
            Logout
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '../stores/authStore';
import TPLangButton from './TPLangButton.vue';

const props = defineProps<{
  title: string;
}>();

const authStore = useAuthStore();
</script>
