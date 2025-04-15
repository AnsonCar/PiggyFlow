<template>
  <div class="absolute right-4 bottom-4 z-50">
    <TransitionGroup name="list" tag="div">
      <template v-for="alertItem in alertStore.alertList" :key="alertItem.uuid">
        <div role="alert" :class="getAlertLevelStyle(alertItem)" class="mb-2 w-64 md:w-96">
          <!-- info -->
          <svg v-if="alertItem.level === 'info'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-6 w-6 shrink-0 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <!-- success -->
          <svg v-if="alertItem.level === 'success'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <!-- warning -->
          <svg v-if="alertItem.level === 'warning'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <!-- error -->
          <svg v-if="alertItem.level === 'error'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span
            ><b>{{ getAlertLevelText(alertItem.level) }}</b> {{ alertItem.message }}</span
          >
        </div>
      </template>
    </TransitionGroup>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useAlertStore } from '../stores/alertStore';
const alertStore = useAlertStore();

function getAlertLevelStyle(alert: TAlertItem) {
  // alert-info
  // alert-success
  // alert-warning
  // alert-error
  // mb-2
  let alertStyle = `alert alert-${alert.level}`;
  return alertStyle;
}

function getAlertLevelText(level: string) {
  switch (level) {
    case 'info':
      return 'Info: ';
    case 'success':
      return 'Success: ';
    case 'warning':
      return 'Warning: ';
    case 'error':
      return 'Error! ';
  }
}

onMounted(() => {
  alertStore.clearItem();
});
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
