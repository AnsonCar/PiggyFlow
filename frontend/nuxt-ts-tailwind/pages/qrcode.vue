<template>
  <div>
    <div class="tp-card">
      <div class="tp-card-body">
        <label class="tp-input">
          URL
          <input type="text" class="tp-input-body" v-model="url">
        </label>
      </div>
    </div>
    <br>
    <div class="tp-card">
      <div class="tp-card-body flex-center m-6">
        <QrcodeVue :value="url" :size="size" level="H" render-as="svg" class="p-4 bg-white"></QrcodeVue>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import QrcodeVue from 'qrcode.vue'
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()

const url = ref<string>('http://localhost:3000/qrcode')
const size = ref<number>(400)

onMounted(() => {
  if (width.value < 800) {
    size.value = width.value / 1.5
  } else {
    size.value = width.value / 2.5
  }

})
watch(() => width.value, (newWidth: number) => {
  if (newWidth < 800) {
    size.value = newWidth / 1.5
  } else {
    size.value = newWidth / 2.5
  }
})
</script>