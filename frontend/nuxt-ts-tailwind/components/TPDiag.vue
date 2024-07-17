<template>
  <dialog :id="props.id" class="modal">
    <div class="modal-box bg-base-300">
      <form method="dialog">
        <TPButton class="absolute right-2 top-2" icon="close" size="sm"></TPButton>
      </form>
      <slot></slot>
    </div>
  </dialog>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: string
}>()
</script>