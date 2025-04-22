<template>
  <TPBox class="">
    <button class="btn btn-info" @click="onClick1">Test Info</button>
    <button class="btn btn-success" @click="onClick2">Test</button>
    <button class="btn btn-warning" @click="onClick3">Test</button>
    <button class="btn btn-error" @click="onClick4">Test</button>
  </TPBox>
</template>

<script lang="ts" setup>
import TPBox from '@/components/tp/tp-box.vue';
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
