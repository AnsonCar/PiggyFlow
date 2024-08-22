<template>
  <!-- History Table -->
  <div v-for="tableData, index in inData" :key="`card_${index.toString()}`">
    <div class="tp-card">
      <div class="tp-card-body">
        <div class="overflow-x-auto">
          <div class="flex justify-between px-2 pb-2">
            <div>{{ tableData.date }}</div>
            <div>$ {{ tableData.total.toFixed(2) }}</div>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th class="">Label</th>
                <th class="">Price</th>
                <th class="w-10" v-if="props.editMode">Action</th>
              </tr>
            </thead>
            <tbody v-for="i, index in tableData.item" :key="index">
              <tr class=" h-14 ">
                <td class="w-2/5 ">{{ i.label }}</td>
                <td>{{ i.price }}</td>
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
      <TPInput type="datetime-local" label="Date" :error="false" v-model="selectDateTime"></TPInput>
      <TPInput type="text" label="Label" :error="hasLabel" v-model="selectLabel"></TPInput>
      <TPInput type="number" label="Price" text="$" :error="hasPrice" v-model="selectPrice"></TPInput>
      <TPButton label="Edit" icon="eidt2" class="w-full" @click="() => eidtAcconut()" />
    </div>
  </TPDiag>
</template>

<script lang="ts" setup>
const props = defineProps<{
  data: TransactionIn[]
  editMode: boolean
}>()

const emit = defineEmits(['initData'])

const selectDateTime = ref<string>('');
const selectLabel = ref<string>('');
const selectPrice = ref<string>('');
const acconutUUID = ref<string>('')

const hasLabel = ref<boolean>(false);
const hasPrice = ref<boolean>(false);

const inData = computed<TransactionDisplay[]>(() => {
  const dataGroup: TTransactionTableFormData = groupDataByDay(props.data)
  const ret: TransactionDisplay[] = [];
  for (const e in dataGroup) {
    let tableData: TransactionDisplay = { date: '', total: 0, item: [] };
    tableData.date = e;
    for (const i of dataGroup[e]) {
      tableData.total += i.price;
      tableData.item.push({ datetime: i.datetime, label: i.label, price: i.price, uuid: i.uuid });
    }

    ret.push(tableData);
  }
  return ret;
});

// Mode
const isDelData = ref<boolean>(false)

// Delect Data
async function openDelDiag(uuid: string) {
  isDelData.value = true
  acconutUUID.value = uuid
}

async function delAccount() {
  await deleteTransaction(acconutUUID.value)
  await emit('initData')
}

// Edit Data
async function openEditDiag(data: { datetime: string, label: string, price: number, uuid: string }) {
  isDelData.value = false
  selectDateTime.value = formatDateTime(new Date(data.datetime))
  selectLabel.value = data.label
  selectPrice.value = data.price.toString()
  acconutUUID.value = data.uuid
}

async function eidtAcconut() {
  hasLabel.value = await checkNull(selectLabel.value)
  hasPrice.value = await checkNull(selectPrice.value as string)

  if (!hasLabel.value && !hasPrice.value) {
    const data: TransactionIn = {
      "datetime": formatDateTime(new Date(selectDateTime.value)).toString(),
      "label": selectLabel.value,
      "price": parseFloat(selectPrice.value)
    }
    const res = await updateTransaction(data, acconutUUID.value)
    emit('initData')
  }
}


</script>