<template>
  <div class="overflow-y-scroll">
    <TPBox>
      <h1 class="text-xl pl-1 flex items-center">
        <TPIcon icon="edit_note" />
        <p class="pl-2">Todo</p>
      </h1>
      <TPInput type="datetime-local" label="Date" :error="false" v-model="selectDateTime"></TPInput>
      <TPInput type="text" label="Event" :error="hasLabel" v-model="selectLabel"></TPInput>
      <div class="card-actions justify-between ">
        <div>
          <TPButton icon="edit" :active="editMode" @click="() => editMode = !editMode" class="mr-2" />
          <TPButton icon="download" class="mr-2" @click="downloalCsv(downloadTodoCsv(), 'todo.csv')" />
          <TPButton icon="upload" class="mr-2" />
        </div>
        <TPButton label="Save" icon="note" @click="saveTodo" />
      </div>
    </TPBox>
    <br>
    <!-- Histoty -->
    <TodoHistory :data="historyData" :editMode="editMode" @initData="initData"></TodoHistory>
  </div>
</template>

<script setup lang="ts">
const selectDateTime = ref<string>(formatDateTime(new Date()));
const selectLabel = ref<string>('');

const hasLabel = ref<boolean>(false);
const editMode = ref<boolean>(false);

const historyData = ref<ToDoOut[]>([]);

async function saveTodo() {
  hasLabel.value = await checkNull(selectLabel.value)

  if (!hasLabel.value) {
    const data: ToDoIn = {
      "datetime": formatDateTime(new Date(selectDateTime.value)).toString(),
      "label": selectLabel.value,
    }
    const res = await createTodo(data)
    console.log(res)
    if (res.id) initData()
  }
}

async function initData() {
  historyData.value = (await getTodos()).data
}

onMounted(() => {
  initData()
})


</script>