<template>
  <!-- History Table -->
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
                <th class="">User Name</th>
                <th class="">Group</th>
                <th class="w-10">{{ props.editMode ? 'Action' : '' }}</th>
              </tr>
            </thead>
            <tbody v-for="i, index in props.data " :key="index">
              <tr class="h-14">
                <td class="w-10">
                </td>
                <td class="pb-4">{{ i.username }}</td>
                <td>
                  <span v-for="group in i.groups">
                    {{ group.name }}
                  </span>
                </td>
                <td v-if="props.editMode" class="flex">
                  <!-- Edit -->
                  <TPButton icon="edit2" size="xs" class="mr-2" onclick="diag.showModal()"
                    @click="() => openEditDiag(i)" />
                  <TPButton icon="password" size="xs" class="mr-2" onclick="diag_password.showModal()"
                    @click="() => openPassworddDiag(i.uuid)" />
                  <!-- Group -->
                  <TPButton icon="user_group" size="xs" class="mr-2" onclick="diag_group.showModal()"
                    @click="openGroupDiag(i.uuid, i.groups.map(e => e.name))" />
                  <!-- Delect -->
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
      <TPButton label="Edit" icon="edit2" class="w-full" @click="() => eidtData()" />
    </div>
  </TPDiag>
  <!-- password -->
  <TPDiag id="diag_password">
    <!-- Edit -->
    <div class="flex flex-col justify-between min-h-64 ">
      <h3 class="text-lg font-bold">Edit Data - Password</h3>
      Edit The User password
      <TPInput type="text" placeholder="Password" :error="hasPassword" v-model="selectPassword"></TPInput>
      <TPInput type="text" placeholder="Again Password" :error="hasAgainPassword" v-model="selectAgainPassword">
      </TPInput>
      <TPButton label="Edit" icon="edit2" class="w-full" @click="() => eidtPassword()" />
      <p class="h-10 text-error" v-if="passwordNotSame">password not same</p>
    </div>
  </TPDiag>

  <!-- Group -->
  <TPDiag id="diag_group">
    <div class="min-h-36">
      <h3 class="text-lg font-bold">User Group</h3>
      <table class="table">
        <thead>
          <tr>
            <th class="w-6"></th>
            <th class="">Group Name</th>
            <th class="w-10"></th>
          </tr>
        </thead>
        <tbody v-for="i, index in groupList" :key="index">
          <tr class="h-14">
            <td class="w-10">
              <input type="checkbox" class="checkbox checkbox-sm" :checked="userGorup.includes(i.name)"
                @click="editGroup(i.id)" :id="i.id" :value="i.name">
            </td>
            <td class="pb-4">{{ i.name }}</td>
            <td class="flex">
            </td>
          </tr>
        </tbody>
      </table>
      <br>
    </div>
  </TPDiag>
</template>

<script lang="ts" setup>
const props = defineProps<{
  data: any
  editMode: boolean
}>()

const emit = defineEmits(['initData'])
// const inData = computed(() => { return props.data })

// eidt 
const selectDateTime = ref<string>('');
const selectUserName = ref<string>('');
const hasUserName = ref<boolean>(false);
// edit password
const selectPassword = ref<string>('');
const selectAgainPassword = ref<string>('');
const hasPassword = ref<boolean>(false);
const hasAgainPassword = ref<boolean>(false);
const passwordNotSame = ref<boolean>(false);
// group
const userGorup = ref<string[]>([])
const groupList = ref<any[]>([])
const itemUUID = ref<string>('')
// Edit Mode
const isDelData = ref<boolean>(false)

// Delect Data
async function openDelDiag(uuid: string) {
  isDelData.value = true
  itemUUID.value = uuid
}

async function delAccount() {
  await deleteUser(itemUUID.value)
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
  hasUserName.value = await checkNull(selectUserName.value)
  if (!hasUserName.value) {
    const data = {
      "username": selectUserName.value
    }
    const res = await updateUser(data, itemUUID.value)
    emit('initData')
  }
}
// password Data
async function openPassworddDiag(uuid: string) {
  itemUUID.value = uuid
}

async function eidtPassword() {
  hasPassword.value = await checkNull(selectPassword.value)
  hasAgainPassword.value = await checkNull(selectAgainPassword.value)
  if (hasPassword && hasAgainPassword) {
    if (selectPassword.value !== selectAgainPassword.value) {
      passwordNotSame.value = true
      return
    }
    const res = await updateUserPassword({ password: selectPassword.value }, itemUUID.value)
  }
  emit('initData')
}


// Group Name
async function openGroupDiag(uuid: string, userGroups: string[]) {
  userGorup.value = userGroups
  groupList.value = (await getGroups()).data
  if (itemUUID.value != uuid) itemUUID.value = uuid
}

async function editGroup(groupID: number) {
  console.log('editGroup')

  let hasGroup: boolean = false
  let name = ''

  for (const group of groupList.value) {
    // console.log('-----------------------------')
    // console.log('userGorup', userGorup.value)
    // console.log('groupName', group.name)
    if (userGorup.value.includes(group.name)) {
      // console.log('hasGroup')
      userGorup.value = userGorup.value.filter((e: string) => e !== group.name)
      hasGroup = true
    } else if (group.id === groupID) {
      // console.log('no Group ans is this!', group.name)
      name = group.name
    }
  }

  if (hasGroup) {
    // console.log('delete')
    await deleteUserGroup({ id: groupID }, itemUUID.value)
  } else {
    // console.log('add', name)
    userGorup.value.push(name)
    await createUserGroup({ id: groupID }, itemUUID.value)
  }
  emit('initData')
  openGroupDiag(itemUUID.value, userGorup.value)
}
</script>