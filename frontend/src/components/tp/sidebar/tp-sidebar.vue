<template>
  <div class="drawer lg:drawer-open">
    <input :id="props.buttonLabel" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content h-[100vh]">
      <slot></slot>
    </div>
    <div class="drawer-side">
      <label :for="props.buttonLabel" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu text-base-content bg-base-300 min-h-full w-80 p-4">
        <!-- Title -->
        <div class="text-base-content mb-4 text-2xl font-bold">
          <h1>{{ VITE_APP_NAME }}</h1>
        </div>
        <!-- Items -->
        <div v-for="(item, index) in props.items" :key="index">
          <li v-if="item.text">
            <details open>
              <summary>{{ item.text }}</summary>
              <ul>
                <li v-for="(i, num) in item.items" :key="num">
                  <p @click="() => router.push({ name: i.name })" :class="{ 'menu-active': i.name === route.name }">{{ i.text }}</p>
                </li>
              </ul>
            </details>
          </li>
          <li v-else v-for="(i, num) in item.items" :key="num">
            <p @click="() => router.push({ name: i.name })" :class="{ 'menu-active': i.name === route.name }">{{ i.text }}</p>
          </li>
        </div>
        <!-- Logout -->
        <TPSidebarLoginButton />
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import TPSidebarLoginButton from './tp-sidebar-login-button.vue';
const route = useRoute();
const router = useRouter();

const props = defineProps<{
  buttonLabel: string;
  items: TTPSidebar[];
}>();

const VITE_APP_NAME = import.meta.env.VITE_APP_NAME;
</script>
