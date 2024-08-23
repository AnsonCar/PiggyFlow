<template>
  <div class="overflow-y-scroll">
    <!-- add -->
    <TPBox>
      <h1 class="text-xl pl-1 flex items-center">
        <TPIcon icon="wallet" />
        <p class="pl-2">Account</p>
      </h1>
      <TPInput type="datetime-local" label="Date" :error="false" v-model="selectDateTime"></TPInput>
      <TPInput type="text" label="Label" :error="hasLabel" v-model="selectLabel"></TPInput>
      <TPInput type="number" label="Price" text="$" :error="hasPrice" v-model="selectPrice"></TPInput>
      <div class="card-actions justify-between">
        <div>
          <TPButton icon="edit" :active="editMode" @click="() => editMode = !editMode" class="mr-2" />
          <TPButton icon="download" class="mr-2" @click="downloalCsv(downloadTransactionCsv(), 'account.csv')" />
          <TPButton icon="upload" class="mr-2" />
        </div>
        <TPButton label="Save" icon="pig" @click="saveAccount" />
      </div>
    </TPBox>
    <br>
    <!-- Histoty -->
    <AccountHistory :data="accountHistoryData" :editMode="editMode" @initData="initData"></AccountHistory>
  </div>
</template>

<script setup lang="ts">
const selectDateTime = ref<string>(getDateTime(new Date()));
const selectLabel = ref<string>('');
const selectPrice = ref<string>('');

const hasLabel = ref<boolean>(false);
const hasPrice = ref<boolean>(false);
const editMode = ref<boolean>(false);

const accountHistoryData = ref<TransactionOut[]>([]);

async function saveAccount() {
  hasLabel.value = await checkNull(selectLabel.value)
  hasPrice.value = await checkNull(selectPrice.value)

  if (!hasLabel.value && !hasPrice.value) {
    const data: TransactionIn = {
      "datetime": selectDateTime.value,
      "label": selectLabel.value,
      "price": parseFloat(selectPrice.value)
    }
    const res = await createTransaction(data)
    if (res.id) initData()
  }
}

async function initData() {
  accountHistoryData.value = (await getTransactions()).data
}

onMounted(() => {
  initData()
})

</script>