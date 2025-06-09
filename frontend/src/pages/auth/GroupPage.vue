<template>
  <TPBox>
    <h1 class="text-xl">Group</h1>
    <TDataTable :data="displayData" :hide-col="['uuid']" v-model:selectData="selectData" />
  </TPBox>
</template>

<script setup lang="ts">
import { getGroups } from '@/api/api.authGroup';
import TPBox from '@/components/tp/tp-box.vue';
import TDataTable from '@/components/tp/tp-data-table.vue';
import { onMounted, ref } from 'vue';

const data = ref<UserOut[]>([]);
const displayData = ref<any[]>([]);
const selectData = ref<any[]>([]);
async function fetchData() {
  const res = await getGroups();
  if ('data' in res) {
    data.value = res.data;
  }
}

async function initDisplayData() {
  const srcData = data.value;
  displayData.value = srcData.map((e) => {
    return e;
  });
}

onMounted(async () => {
  await fetchData();
  await initDisplayData();
});
</script>
