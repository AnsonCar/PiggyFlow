<template>
  <div class="overflow-y-scroll">
    <!-- add -->
    <TPBox>
      <TPInput type="datetime-local" label="Date" :error="false" v-model="selectDateTime"></TPInput>
      <TPInput type="text" label="Label" :error="hasLabel" v-model="selectLabel"></TPInput>
      <TPInput type="number" label="Price" text="$" :error="hasPrice" v-model="selectPrice"></TPInput>
      <div class="card-actions justify-between ">
        <div>
          <TPButton icon="edit" :active="editMode" @click="() => editMode = !editMode" class="mr-2"/>
          <TPButton icon="download" class="mr-2" @click="downloadTransactionCSV" />
          <!-- <TPButton icon="upload" class="mr-2"/> -->
        </div>
        <TPButton label="Save" icon="pig" @click="saveAccount" />
      </div>
    </TPBox>
    <br>
    <AccountHistory :data="accountHistoryData" :editMode="editMode" @initData="initData"></AccountHistory>
  </div>
</template>

<script setup lang="ts">
import { getsTransaction, addTransaction, downloadTransactionCSV } from '~/utils/db/transaction'

const selectDateTime = ref<string>('');
const selectLabel = ref<string>('');
const selectPrice = ref<string>('');

const hasLabel = ref<boolean>(false);
const hasPrice = ref<boolean>(false);
const editMode = ref<boolean>(false);

const accountHistoryData = ref<any>({});

async function saveAccount() {
  hasLabel.value = checkNull(selectLabel.value)
  hasPrice.value = checkNull(selectPrice.value)

  if (!hasLabel.value && !hasPrice.value) {
    const data = {
      "datetime": formatDateTimeZone(selectDateTime.value),
      "label": selectLabel.value,
      "price": selectPrice.value
    }
    const res = await addTransaction(data)
    console.log(res)
    if (res.id) {
      initData()
    }
  }
}

async function initData() {
  console.log('init')
  // data
  const res = await getsTransaction()
  let allUUid = []
  const dataGroup: any = {}
  for (const e of res.data.reverse()) {
    const date = formatDate(e.datetime)
    if (typeof dataGroup[date] === 'object') {
      dataGroup[date] = [...dataGroup[date], e]
    } else {
      dataGroup[date] = [e]
    }
  }
  Object.keys(dataGroup).reverse()
  accountHistoryData.value = dataGroup
}

onMounted(() => {
  selectDateTime.value = formatDateTime(new Date())
  initData()
})

</script>