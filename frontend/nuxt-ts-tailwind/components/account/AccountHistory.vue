<template>
  <div class="tp-card" v-for="tableData, idnex in inData" :key="tableData.date">
    <div class="tp-card-body">
      <div class="overflow-x-auto">
        <div class="flex justify-between px-2 pb-2">
          <div>{{ tableData.date }}</div>
          <div>$ {{ tableData.total.toFixed(2) }}</div>
        </div>
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th class="">Label</th>
              <th class="">Price</th>
              <th class="w-10">Action</th>
            </tr>
          </thead>
          <tbody v-for="i, index in tableData.item" :key="index">
            <tr>
              <td class="w-2/5 ">{{ i.label }}</td>
              <td>{{i.price}}</td>
              <td>
                <button class="btn btn-square btn-xs" id="${i.uuid}">
                  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960"
                    width="20px">
                    <path
                      d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div><br>
</template>

<script lang="ts" setup>
const props = defineProps<{
  data: any
}>()

const inData = computed(() => {
  let ret = []
  let tableData: { date: string, total: number, item: { label: string, price: number, uuid: string }[] } = { date: '', total: 0, item: [] }

  for (const e in props.data) {
    tableData.date = e
    for (const i of props.data[e]) {
      tableData.total += parseFloat(i.price)
      tableData.item.push({ label: i.label, price: i.price, uuid: i.uuid })
    }
    ret.push(tableData)
  }
  console.log(ret)
  return ret
})

</script>