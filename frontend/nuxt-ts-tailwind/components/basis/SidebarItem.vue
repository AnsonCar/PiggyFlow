<template>
  <div v-for="item, index in props.items" :key="index">
    <li v-if="item.text">
      <details open>
        <summary>{{ item.text }}</summary>
        <ul>
          <li v-for="i, num in item.items" :key="num">
            <NuxtLink :to="i.link" :class="{ active : i.link === route.path }">{{ i.text }}</NuxtLink>
          </li>
        </ul>
      </details>
    </li>
    <li v-else v-for="i, num in item.items" :key="num">
      <NuxtLink :to="i.link" :class="{ active : i.link === route.path }">{{ i.text }}</NuxtLink>
    </li>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()

const props = defineProps<{
  items: TTPSidebar[]
}>()
</script>