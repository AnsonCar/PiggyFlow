<template>
  <TPBox>
    <header class="flex justify-between">
      <h1 class="text-xl">User</h1>
      <div>
        <TPCrudBtn class="ml-2" mode="add" @click="() => { }" />
        <TPCrudBtn class="ml-2" mode="edit" @click="() => { }" />
        <TPCrudBtn class="ml-2" mode="delete" @click="() => { }" />
      </div>
    </header>
    <TDataTable :data="displayData" :hide-col="['uuid']" v-model:selectData="selectData" />
  </TPBox>
</template>

<script setup lang="ts">
import { getUsers } from '@/api/api.authUser';
import TPBox from '@/components/tp/tp-box.vue';
import TPCrudBtn from '@/components/tp/tp-crud-btn.vue';
import TDataTable from '@/components/tp/tp-data-table.vue';
import { onMounted, ref } from 'vue';

const data = ref<UserOut[]>([]);
const displayData = ref<any[]>([]);
const selectData = ref<any[]>([]);
async function fetchUserData() {
  const res = await getUsers();
  if ('data' in res) {
    data.value = res.data;
  }
}

async function initDisplayData() {
  const srcData = data.value;
  displayData.value = srcData.map((e) => {
    return {
      uuid: e.uuid,
      username: e.username,
      email: e.email,
      groups: e.groups.join(','),
    };
  });
}

onMounted(async () => {
  await fetchUserData();
  await initDisplayData();
});
</script>
