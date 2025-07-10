<template>
  <TPBox>
    <header class="flex justify-between">
      <h1 class="text-xl">User</h1>
      <div>
        <TPCrudBtn class="ml-2" mode="add" onclick="add.showModal()" />
        <TPCrudBtn class="ml-2" mode="edit" @click="openEditDiag" />
        <TPCrudBtn class="ml-2" mode="delete" onclick="delect.showModal()" />
      </div>
    </header>
    <TDataTable :data="displayData" :hide-col="['uuid']" v-model:selectData="selectData" />
    <!-- add diag -->
    <TPDiag id="add">
      <h3 class="text-lg font-bold mb-3">Add</h3>
      <div method="dialog flex flex-col" @keyup.enter="addUser">
        <TPInput type="text" label="username" class="w-full mb-3" v-model="username" />
        <TPInput type="text" label="password" class="w-full mb-3" v-model="password" />
        <TPCrudBtn class="w-full" mode="add" @click="addUser" />
      </div>
    </TPDiag>
    <!-- edit diag -->
    <TPDiag id="edit">
      <h3 class="text-lg font-bold">Edit</h3>
      <div method="dialog flex flex-col" @keyup.enter="editUser">
        <TPInput type="text" label="username" class="w-full mb-3" v-model="username" />
        <TPCrudBtn class="w-full" mode="add" @click="editUser" />
      </div>

    </TPDiag>
    <!-- delect diag -->
    <TPDiag id="delect">
      <h3 class="text-lg font-bold">Hello!</h3>
      <p class="py-4">Press ESC key or click the button below to close</p>
      <div class="modal-action">
        <TPCrudBtn class="ml-2" mode="delete" @click="delectUsers" />
      </div>
    </TPDiag>
  </TPBox>
</template>

<script setup lang="ts">
import { createUser, deleteUser, getUsers, updateUser } from '@/api/api.authUser';
import TPBox from '@/components/tp/tp-box.vue';
import TPCrudBtn from '@/components/tp/tp-crud-btn.vue';
import TDataTable from '@/components/tp/tp-data-table.vue';
import TPDiag from '@/components/tp/tp-diag.vue';
import TPInput from '@/components/tp/tp-input.vue';
import { useAlertStore } from '@/stores/alertStore';
import { onMounted, ref } from 'vue';

const alertStore = useAlertStore();
const data = ref<UserOut[]>([]);
const displayData = ref<any[]>([]);
const selectData = ref<any[]>([]);

const username = ref('');
const password = ref('');
const selectUUID = ref('');

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

async function addUser() {
  await createUser({
    username: username.value,
    password: password.value
  });
  const add = document.getElementById('add');
  (add as HTMLDialogElement).close();
  await fetchUserData();
  await initDisplayData();
  username.value = "";
  password.value = "";
}

async function openEditDiag() {
  if (selectData.value.length === 1) {
    selectUUID.value = selectData.value[0].uuid;
    const edit = document.getElementById('edit');
    (edit as HTMLDialogElement).showModal();
  } else {
    alertStore.addItem({
      message: 'Please select one user',
      level: 'warning'
    });
  }
}
async function editUser() {
  await updateUser({
    username: username.value
  }, selectUUID.value);
  await fetchUserData();
  await initDisplayData();
  username.value = "";
  password.value = "";
  const edit = document.getElementById('edit');
  (edit as HTMLDialogElement).close();
}
async function delectUsers() {
  for (const e of selectData.value) {
    await deleteUser(e.uuid);
  }
  const delect = document.getElementById('delect');
  (delect as HTMLDialogElement).close();
  await fetchUserData();
  await initDisplayData();
}

onMounted(async () => {
  await fetchUserData();
  await initDisplayData();
});
</script>
