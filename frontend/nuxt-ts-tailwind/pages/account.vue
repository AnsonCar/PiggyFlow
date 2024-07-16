<template>
  <div class="overflow-y-scroll">
    <!-- add -->
    <div class="tp-card">
      <div class="tp-card-body">
        <TPInput type="datetime-local" label="Date" :error="false" v-model="selectDateTime"></TPInput>
        <TPInput type="text" label="Label" :error="hasLabel" v-model="selectLabel"></TPInput>
        <TPInput type="number" label="Price" text="$" :error="hasPrice" v-model="selectPrice"></TPInput>
        <div class="card-actions justify-end">
          <button class="btn" @click="saveAccount">
            Save
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
              width="24px">
              <path
                d="M237-120q-23 0-44.5-16T164-175q-25-84-41-145.5t-25.5-108Q88-475 84-511t-4-69q0-92 64-156t156-64h200q27-36 68.5-58t91.5-22q25 0 42.5 17.5T720-820q0 6-1.5 12t-3.5 11q-4 11-7.5 22t-5.5 24l91 91h47q17 0 28.5 11.5T880-620v210q0 13-7.5 23T852-372l-85 28-50 167q-8 26-29 41.5T640-120h-80q-33 0-56.5-23.5T480-200h-80q0 33-23.5 56.5T320-120h-83Zm3-80h80v-80h240v80h80l62-206 98-33v-141h-40L620-720q0-20 2.5-39t7.5-37q-29 8-51 27.5T547-720H300q-58 0-99 41t-41 99q0 41 21 140.5T240-200Zm400-320q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520Zm-160-80q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680H360q-17 0-28.5 11.5T320-640q0 17 11.5 28.5T360-600h120Zm0 102Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <br>
    <AccountHistory :data="accountHistoryData"></AccountHistory>
  </div>
</template>

<script setup lang="ts">
import AccountHistory from '~/components/account/AccountHistory.vue';
import { getsTransaction, addTransaction, delTransaction, downloadTransactionCSV } from '~/utils/db/transaction'

const selectDateTime = ref<string>('');
const selectLabel = ref<string>('');
const selectPrice = ref<string>('');

const hasLabel = ref<boolean>(false);
const hasPrice = ref<boolean>(false);

const accountHistoryData = ref<any>({});

async function saveAccount() {
  console.log(123)
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

async function delAccount(uuid: string) {
  await delTransaction(uuid)
  await initData()
}

async function initData() {
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