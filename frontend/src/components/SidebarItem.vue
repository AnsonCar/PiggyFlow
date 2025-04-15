<template>
  <div v-for="(item, index) in props.items" :key="index">
    <li v-if="item.text">
      <details open>
        <summary>{{ item.text }}</summary>
        <ul>
          <li v-for="(i, num) in item.items" :key="num">
            <RouterLink :to="i.link" :class="{ active: i.link === route.path }">{{ i.text }}</RouterLink>
          </li>
        </ul>
      </details>
    </li>
    <li v-else v-for="(i, num) in item.items" :key="num">
      <RouterLink :to="i.link" :class="{ active: i.link === route.path }">{{ i.text }}</RouterLink>
    </li>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const props = defineProps<{
  items: TTPSidebar[];
}>();
</script>
