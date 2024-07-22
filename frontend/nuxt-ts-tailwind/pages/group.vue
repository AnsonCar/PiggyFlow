<template>
    <div class="overflow-y-scroll">
      <TPBox>
        <h1 class="text-xl pl-1 flex items-center">
          <TPIcon icon="user_group" />
          <p class="pl-2">Group</p>
        </h1>
        <TPInput type="text" placeholder="Group Name" :error="hasGroupName" v-model="selectGroupName" class="py-2"></TPInput>
        <div class="card-actions justify-between">
          <div>
            <TPButton icon="edit" :active="editMode" @click="() => editMode = !editMode" class="mr-2" />
            <!-- <TPButton icon="download" class="mr-2" @click="downloadGroupCSV" /> -->
            <!-- <TPButton icon="upload" class="mr-2"/> -->
          </div>
          <TPButton label="Save" icon="user_group_add" @click="saveAccount" />
        </div>
      </TPBox>
      <br>
      <!-- Histoty -->
      <GroupHistory :data="historyData" :editMode="editMode" @initData="initData"></GroupHistory>
    </div>
  </template>
  
  <script setup lang="ts">
  import { getsGroup, addGroup } from '~/utils/db/group'
  
  const selectGroupName = ref<string>('');
  
  const hasGroupName = ref<boolean>(false);
  
  const editMode = ref<boolean>(false);
  
  const historyData = ref<any>({});
  
  async function saveAccount() {
    hasGroupName.value = checkNull(selectGroupName.value)
    const noteNullValue = !hasGroupName.value

    if (noteNullValue) {
      const data = {
        name: selectGroupName.value,
      }
      const res = await addGroup(data)
      if (res.id) {
        initData()
      }
    }
  }
  
  async function initData() {
    // data
    const res = await getsGroup()
    historyData.value = res.data
  }
  
  onMounted(() => {
    initData()
  })
  </script>