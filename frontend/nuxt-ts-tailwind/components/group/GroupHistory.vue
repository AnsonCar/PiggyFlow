<template>
  <!-- History Table -->
  <!-- <div v-for="tableData, index in inData" :key="`card_${index}`"> -->
  <div>
    <div class="tp-card">
      <div class="tp-card-body">
        <div class="overflow-x-auto">
          <div class="flex justify-between px-2 pb-2">
            <div>Group</div>
            <div></div>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th class="w-6"></th>
                <th class="">Group Name</th>
                <th class="w-10" v-if="props.editMode">Action</th>
              </tr>
            </thead>
            <!-- <tbody v-for="i, index in tableData" :key="index"> -->
            <tbody v-for="i, index in inData" :key="index">
              <tr class="h-14">
                <td class="w-10">
                </td>
                <td class="pb-4">{{ i.name }}</td>
                <td v-if="props.editMode" class="flex">
                  <TPButton icon="edit2" size="xs" class="mr-2" onclick="diag.showModal()"
                    @click="() => openEditDiag(i)" />
                  <TPButton icon="delect" size="xs" onclick="diag.showModal()" @click="openDelDiag(i.id)" />
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
        <TPButton label="Delect" icon="delect" class="absolute bottom-2 right-2 btn-error" @click="delGroup()" />
      </form>
      </p>
    </div>
    <!-- Edit -->
    <div v-else class="flex flex-col justify-between h-64 ">
      <h3 class="text-lg font-bold">Edit Data</h3>
      Edit The Group Name
      <TPInput type="text" placeholder="Group Name" :error="hasGroupName" v-model="selectGroupName"></TPInput>
      <TPButton label="Edit" icon="eidt2" class="w-full" @click="() => eidtData()" />
    </div>
  </TPDiag>
</template>

<script lang="ts" setup>
const props = defineProps<{
  data: any
  editMode: boolean
}>()

const emit = defineEmits(['initData'])

const selectGroupName = ref<string>('');
const itemUUID = ref<number>(0)
const hasGroupName = ref<boolean>(false);
const inData = computed(() => {
  return props.data
})

// Mode
const isDelData = ref<boolean>(false)

// Delect Data
async function openDelDiag(uuid: number) {
  isDelData.value = true
  itemUUID.value = uuid
}

async function delGroup() {
  await deleteGroup(itemUUID.value)
  emit('initData')
}

// Edit Data
async function openEditDiag(data: { name: string, id: number }) {
  isDelData.value = false
  selectGroupName.value = data.name
  itemUUID.value = data.id
}

async function eidtData() {
  hasGroupName.value = await checkNull(selectGroupName.value)

  if (!hasGroupName.value) {
    const data = {
      "name": selectGroupName.value
    }
    const res = await updateGroup(data, itemUUID.value)
    emit('initData')
  }
}

</script>