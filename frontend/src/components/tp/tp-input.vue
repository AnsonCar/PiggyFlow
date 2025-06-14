<template>
  <label class="input" :class="{ 'input-error': props.error }">
    {{ props.label }}
    <input :type="props.text" class="grow" :placeholder="props.placeholder" v-model="model" />
  </label>
</template>

<script lang="ts" setup>
const model = defineModel();

const props = defineProps<{
  type: string;
  label?: string;
  placeholder?: string;
  error?: boolean;
  text?: string;
}>();
</script>
