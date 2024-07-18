<template>
  <button class="btn" :class="{ 'btn-square': !props.label, 'btn-success': props.active, 'btn-xs': props.size === 'xs', 'btn-sm': props.size === 'sm'}">
    {{ props.label }}
    <TPIcon v-if="props.icon" :icon="props.icon" />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  label?: string
  icon?: string
  active?: boolean
  size?: 'xs' | 'sm'
}>()
</script>