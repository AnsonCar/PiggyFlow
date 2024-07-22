<template>
  <label class="tp-input" :class="{'tp-input-error': props.error}">
    {{ props.label }}
    <span v-if="props.text" class="pl-2">{{ props.text }}</span>
    <input :placeholder="props.placeholder" :type="props.type" class="tp-input-body" :class="{'tp-input-body-error': props.error, 'pl-0': props.text }" v-model="model" />
  </label>
</template>

<script lang="ts" setup>
const model = defineModel()

const props = defineProps<{
  type: string
  label?: string
  placeholder?: string
  error?: boolean
  text?: string
}>()
</script>