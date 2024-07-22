<template>
  <div class="overflow-y-scroll">
    <TPBox>
      <h1 class="text-xl pl-1 flex items-center"><TPIcon icon="edit_note" /><p class="pl-2">Todo</p></h1>
      <TPInput type="datetime-local" label="Date" :error="false" v-model="selectDateTime"></TPInput>
      <TPInput type="text" label="Event" :error="hasLabel" v-model="selectLabel"></TPInput>
      <div class="card-actions justify-between ">
        <div>
          <TPButton icon="edit" :active="editMode" @click="() => editMode = !editMode" class="mr-2" />
          <TPButton icon="download" class="mr-2" @click="downloadTodoCSV" />
          <!-- <TPButton icon="upload" class="mr-2"/> -->
        </div>
        <TPButton label="Save" icon="note" @click="saveAccount" />
      </div>
    </TPBox>
    <br>
    <!-- Histoty -->
    <TodoHistory :data="historyData" :editMode="editMode" @initData="initData"></TodoHistory>
  </div>
</template>

<script setup lang="ts">
import { getsTodo, addTodo, downloadTodoCSV } from '~/utils/db/todo'
import { groupDataByDay } from '~/utils/formatDate';

const selectDateTime = ref<string>('');
const selectLabel = ref<string>('');

const hasLabel = ref<boolean>(false);
const editMode = ref<boolean>(false);

const historyData = ref<any>({});

async function saveAccount() {
  hasLabel.value = checkNull(selectLabel.value)

  if (!hasLabel.value) {
    const data = {
      "datetime": formatDateTimeZone(selectDateTime.value),
      "label": selectLabel.value,
    }
    const res = await addTodo(data)
    if (res.id) {
      initData()
    }
  }
}

async function initData() {
  // data
  const res = await getsTodo()
  const dataGroup = groupDataByDay(res)
  historyData.value = dataGroup
}

onMounted(() => {
  selectDateTime.value = formatDateTime(new Date())
  initData()
})


</script>