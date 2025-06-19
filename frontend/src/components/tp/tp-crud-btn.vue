<template>
  <button class="btn" :class="getClass()">
    {{ mode }}
  </button>
</template>

<script setup lang="ts">

const props = defineProps<{
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  mode: 'add' | 'edit' | 'delete';
}>();

function getClass() {
  let className: string[] = [];
  className.push(`btn-${props.size || 'sm'}`);
  switch (props.mode) {
    case 'add':
      className.push('btn-info');
      break;
    case 'edit':
      className.push('btn-warning');
      break;
    case 'delete':
      className.push('btn-error');
  }
  return className.join(' ');
}
</script>
