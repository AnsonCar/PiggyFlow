<template>
  <button class="btn" @click="emit('click')" :class="getClass()">
    {{ mode }}
  </button>
</template>

<script setup lang="ts">

const props = defineProps<{
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  mode: 'add' | 'edit' | 'delete';
}>();

const emit = defineEmits<{
  (e: 'click'): void;
}>();

function getClass() {
  let className = [];
  className.push(`btn-${props.size || 'md'}`);
  switch (props.mode) {
    case 'add':
      className.push('btn-primary');
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
