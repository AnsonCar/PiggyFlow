<template>
  <div class="overflow-y-scroll">
    <TPBox>
      <h1 class="text-xl pl-1 flex items-center">
        <TPIcon icon="user" />
        <p class="pl-2">User</p>
      </h1>
      <TPInput type="text" placeholder="User Name" :error="hasUserName" v-model="selectUserName"></TPInput>
      <TPInput type="password" placeholder="Password" :error="hasPassword" v-model="selectPassword"></TPInput>
      <TPInput type="password" placeholder="Again Password" :error="hasPasswordAgain" v-model="selectPasswordAgain"></TPInput>
      <div class="card-actions justify-between">
        <div>
          <TPButton icon="edit" :active="editMode" @click="() => editMode = !editMode" class="mr-2" />
          <!-- <TPButton icon="download" class="mr-2" @click="downloadUserCSV" /> -->
          <!-- <TPButton icon="upload" class="mr-2"/> -->
        </div>
        <TPButton label="Save" icon="user_add" @click="saveAccount" />
      </div>
    </TPBox>
    <br>
    <!-- Histoty -->
    <UserHistory :data="historyData" :editMode="editMode" @initData="initData"></UserHistory>
  </div>
</template>

<script setup lang="ts">
import { getUsersGroups, addUser } from '~/utils/db/user'

const selectUserName = ref<string>('');
const selectPassword = ref<string>('');
const selectPasswordAgain = ref<string>('');

const hasUserName = ref<boolean>(false);
const hasPassword = ref<boolean>(false);
const hasPasswordAgain = ref<boolean>(false);

const editMode = ref<boolean>(false);

const historyData = ref<any>({});

async function saveAccount() {
  hasUserName.value = checkNull(selectUserName.value)
  hasPassword.value = checkNull(selectPassword.value)
  hasPasswordAgain.value = checkNull(selectPasswordAgain.value)
  const noteNullValue = !hasUserName.value && !hasPassword.value && !hasPasswordAgain.value
  if (noteNullValue) {
    const data = {
      username: selectUserName.value,
      password: selectPassword.value
    }
    const res = await addUser(data)
    if (res.id) {
      initData()
    }
  }
}

async function initData() {
  // data
  const res = await getUsersGroups()
  historyData.value = res.data
}

onMounted(() => {
  initData()
})
</script>