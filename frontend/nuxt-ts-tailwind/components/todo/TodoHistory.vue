<template>
  <!-- History Table -->
  <div v-for="tableData, index in inData" :key="`card_${index}`">
    <div class="tp-card">
      <div class="tp-card-body">
        <div class="overflow-x-auto">
          <div class="flex justify-between px-2 pb-2">
            <div>{{ tableData.date }}</div>
            <div>{{ (tableData.total/tableData.item.length * 100).toFixed(0) }} %</div>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th class="w-6"></th>
                <th class=""></th>
                <th class="w-10" v-if="props.editMode"></th>
              </tr>
            </thead>
            <tbody v-for="i, index in tableData.item" :key="index">
              <tr class="h-14">
                <td class="w-10">
                  <input type="checkbox" class="checkbox checkbox-sm" :checked="i.done" @click="editDone(!i.done, i.uuid)">
                </td>
                <td class="pb-4" :class="{ 'line-through contrast-50 dark:brightness-50': i.done }">{{ i.label }}</td>
                <td v-if="props.editMode" class="flex">
                  <TPButton icon="edit2" size="xs" class="mr-2" onclick="diag.showModal()"
                    @click="() => openEditDiag(i)" />
                  <TPButton icon="delect" size="xs" onclick="diag.showModal()" @click="openDelDiag(i.uuid)" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <br>
  </div>

  <!-- Diag -->
  <TPDiag id="diag">
    <!-- Delect -->
    <div v-if="isDelData" class="h-36">
      <h3 class="text-lg font-bold text-error">Delect Data</h3>
      <p class="py-4 flex justify-between">
        <span>Delect Data ?</span>
      <form method="dialog">
        <TPButton label="Delect" icon="delect" class="absolute bottom-2 right-2 btn-error"
          @click="delAccount()" />
      </form>
      </p>
    </div>
    <!-- Edit -->
    <div v-else class="flex flex-col justify-between h-64 ">
      <h3 class="text-lg font-bold">Edit Data</h3>
      <TPInput type="datetime-local" label="Date" :error="false" v-model="selectDateTime"></TPInput>
      <TPInput type="text" label="Label" :error="hasLabel" v-model="selectLabel"></TPInput>
      <TPButton label="Edit" icon="eidt2" class="w-full" @click="() => eidtData()" />
    </div>
  </TPDiag>
</template>

<script lang="ts" setup>
import { editTodo, delTodo, editTodoDone } from '~/utils/db/todo'

const props = defineProps<{
  data: any
  editMode: boolean
}>()

const emit = defineEmits(['initData'])

const selectDateTime = ref<string>('');
const selectLabel = ref<string>('');
const selectPrice = ref<number | string>('');
const itemUUID = ref<string>('')

const hasLabel = ref<boolean>(false);
const hasPrice = ref<boolean>(false);

const inData = computed(() => {
  let ret = []

  for (const e in props.data) {
    let tableData: { date: string, total: number, item: { datetime: string, label: string, done: boolean, uuid: string }[] } = { date: '', total: 0, item: [] }
    tableData.date = e
    for (const i of props.data[e]) {
      tableData.total += i.done ? 1 : 0
      tableData.item.push({ datetime: i.datetime, label: i.label, done: i.done, uuid: i.uuid })
    }
    ret.push(tableData)
  }
  return ret
})

// Mode
const isDelData = ref<boolean>(false)

// Delect Data
async function openDelDiag(uuid: string) {
  isDelData.value = true
  itemUUID.value = uuid
}

async function delAccount() {
  await delTodo(itemUUID.value)
  emit('initData')
}

// Edit Data
async function openEditDiag(data: { datetime: string, label: string, done?: boolean, uuid: string }) {
  isDelData.value = false
  selectDateTime.value = formatDateTime(new Date(data.datetime))
  selectLabel.value = data.label
  itemUUID.value = data.uuid
}

async function eidtData() {
  hasLabel.value = checkNull(selectLabel.value)

  if (!hasLabel.value) {
    const data = {
      "datetime": formatDateTimeZone(selectDateTime.value),
      "label": selectLabel.value
    }
    const res = await editTodo(data, itemUUID.value)
    emit('initData')
  }
}

async function editDone(done:boolean, uuid:string ) {
  await editTodoDone({done:done}, uuid)
  emit('initData')
}


</script>