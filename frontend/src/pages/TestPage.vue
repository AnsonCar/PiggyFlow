<template>
  <div class="bg-base-300 flex-center size-full p-4">
    <!-- Content -->
    <div class="bg-base-100 size-[99%] rounded-3xl p-4">
      <button class="btn" @click="onClick1">Test</button>
      <button class="btn" @click="onClick2">Test</button>
      <button class="btn" @click="onClick3">Test</button>
      <button class="btn" @click="onClick4">Test</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAlertStore } from '../stores/alertStore';
const alertStore = useAlertStore();

function onClick1() {
  alertStore.addItem({ level: 'info', message: ' test' });
}
function onClick2() {
  alertStore.addItem({ level: 'success', message: ' test' });
}
function onClick3() {
  alertStore.addItem({ level: 'warning', message: ' test' });
}

function onClick4() {
  alertStore.addItem({ level: 'error', message: ' test' });
}
</script>

<style scoped></style>
