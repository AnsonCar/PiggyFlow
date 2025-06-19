<template>
  <dialog :id="props.id" class="modal">
    <div class="modal-box bg-base-300">
      <slot></slot>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: string;
}>();
</script>
