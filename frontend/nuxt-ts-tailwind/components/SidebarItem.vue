<template>
  <div v-for="item, index in items" :key="index">
    <li v-if="item.text">
      <details open>
        <summary>{{ item.text }}</summary>
        <ul>
          <li v-for="i, num in item.items" :key="num">
            <NuxtLink :to='i.link'>{{ i.text }}</NuxtLink>
          </li>
        </ul>
      </details>
    </li>
    <li v-else v-for="i, num in item.items" :key="num">
      <NuxtLink :to='i.link' class="active">{{ i.text }}</NuxtLink>
    </li>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
console.log(route.path)
const props = defineProps<{
  items: TTPSidebar[]
}>()
</script>