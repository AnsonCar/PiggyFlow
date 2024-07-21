<template>
  <!-- History Table -->
  <!-- <div v-for="tableData, index in inData" :key="`card_${index}`"> -->
  <div>
    <div class="tp-card">
      <div class="tp-card-body">
        <div class="overflow-x-auto">
          <div class="flex justify-between px-2 pb-2">
            <div>User</div>
            <div></div>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th class="w-6"></th>
                <th class="">Username</th>
                <th class="w-10" v-if="props.editMode">Action</th>
              </tr>
            </thead>
            <!-- <tbody v-for="i, index in tableData" :key="index"> -->
            <tbody v-for="i, index in inData" :key="index">
              <tr class="h-14">
                <td class="w-10">
                </td>
                <td class="pb-4">{{ i.username }}</td>
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
        <TPButton label="Delect" icon="delect" class="absolute bottom-2 right-2 btn-error" @click="delAccount()" />
      </form>
      </p>
    </div>
    <!-- Edit -->
    <div v-else class="flex flex-col justify-between h-64 ">
      <h3 class="text-lg font-bold">Edit Data</h3>
      Edit The User Name
      <TPInput type="text" placeholder="Username" :error="hasUserName" v-model="selectUserName"></TPInput>
      <TPButton label="Edit" icon="eidt2" class="w-full" @click="() => eidtData()" />
    </div>
  </TPDiag>
</template>

<script lang="ts" setup>
import { editUser, delUser } from '~/utils/db/user'
import { killToken } from "~/utils/logout.js";

const props = defineProps<{
  data: any
  editMode: boolean
}>()

const emit = defineEmits(['initData'])

const selectDateTime = ref<string>('');
const selectUserName = ref<string>('');
const selectPrice = ref<number | string>('');
const itemUUID = ref<string>('')

const hasUserName = ref<boolean>(false);
const hasPrice = ref<boolean>(false);

const inData = computed(() => {
  return props.data
})

// Mode
const isDelData = ref<boolean>(false)

// Delect Data
async function openDelDiag(uuid: string) {
  isDelData.value = true
  itemUUID.value = uuid
}

async function delAccount() {
  await delUser(itemUUID.value)
  emit('initData')
}

// Edit Data
async function openEditDiag(data: { datetime: string, label: string, done?: boolean, uuid: string }) {
  isDelData.value = false
  selectDateTime.value = formatDateTime(new Date(data.datetime))
  selectUserName.value = data.label
  itemUUID.value = data.uuid
}

async function eidtData() {
  hasUserName.value = checkNull(selectUserName.value)

  if (!hasUserName.value) {
    const data = {
      "username": selectUserName.value
    }
    const res = await editUser(data, itemUUID.value)
    emit('initData')
  }
}

</script>