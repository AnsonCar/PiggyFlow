<template>
  <div class="overflow-x-auto">
    <table class="table" :class="`table-${props.size}`" v-if="props.data.length > 0">
      <!-- Header -->
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" :class="`checkbox-${props.size}`" v-model="selectAll" />
            </label>
          </th>
          <th v-for="header in tableHeader" :key="header" @click="changeSort(header)">
            <span class="flex">
              {{ header }}
              <svg xmlns=" http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"
                v-if="sortByCol === header" class="fill-current" :transform="`scale(1, ${sortReverse ? -1 : 1})`">
                <path d="M480-360 280-560h400L480-360Z" />
              </svg>
            </span>
          </th>
        </tr>
      </thead>
      <!-- Body -->
      <tbody>
        <tr v-for="(item) in displayData" :key="item[props.keyCol as string]">
          <td class="w-8">
            <label>
              <input type="checkbox" class="checkbox" :class="`checkbox-${props.size}`" v-model="selectIdArr"
                :value="item[props.keyCol as string]" />
            </label>
          </td>
          <template v-for="(value, colKey) in item" :key="colKey">
            <td v-if="!hideCol.includes(colKey as unknown as string)">
              {{ value }}
            </td>
          </template>
        </tr>
      </tbody>
    </table>
    <div v-else>
      <div role="alert" class="alert">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current text-warning" fill="none"
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <span class="text-warning">Warning: No Data!</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

const props = withDefaults(
  defineProps<{
    data: Record<string, any>[];
    hideCol?: string[];
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    keyCol?: string;
  }>(),
  {
    hideCol: () => [],
    size: 'md',
    keyCol: 'uuid',
  }
);

const sortByCol = ref<string>(props.keyCol);
const sortReverse = ref<boolean>(false);

// 使用 defineModel 來實現 v-model
const selectData = defineModel<any[]>('selectData', { default: () => [] });

const displayData = computed<any[]>(() => {
  // 創建數據副本以避免修改原始數據
  const data = [...props.data];

  if (!sortByCol.value) return data; // 如果沒有排序列，返回原始順序

  return data.sort((a, b) => {
    const valueA = a[sortByCol.value];
    const valueB = b[sortByCol.value];

    // 處理空值或未定義值
    if (valueA == null && valueB == null) return 0;
    if (valueA == null) return sortReverse.value ? -1 : 1;
    if (valueB == null) return sortReverse.value ? 1 : -1;

    // 數值比較
    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return sortReverse.value ? valueB - valueA : valueA - valueB;
    }

    // 字符串比較
    const strA = String(valueA);
    const strB = String(valueB);
    return sortReverse.value
      ? strB.localeCompare(strA)
      : strA.localeCompare(strB);
  });
});

function changeSort(column: string) {
  if (sortByCol.value === column) {
    // 同一列點擊，切換排序方向
    sortReverse.value = !sortReverse.value;
  } else {
    // 不同列點擊，設置新排序列，默認升序
    sortByCol.value = column;
    sortReverse.value = false;
  }
}

// Select Data
const selectAll = ref<boolean>(false);
const selectIdArr = ref<(string | number)[]>(selectData.value.map(item => item[props.keyCol as string]));
const stopUpdate = ref(false);

watch(selectAll, (newVal, oldVal) => {
  // false -> true
  if (!oldVal && newVal) {
    const newSelectData = [...displayData.value];
    selectIdArr.value = newSelectData.map((item) => item[props.keyCol as string]);
    selectData.value = newSelectData;
  } else if (!stopUpdate.value && oldVal && !newVal) { // ture -> true
    selectIdArr.value = [];
    selectData.value = [];
  }
  if (stopUpdate.value) {
    stopUpdate.value = false;
  }
});


watch(selectIdArr, (newVal, oldVal) => {
  const newSelectData = props.data.filter((item) =>
    selectIdArr.value.includes(item[props.keyCol as string])
  );
  if (newSelectData.length === displayData.value.length) {
    selectAll.value = true;
  } else if (selectAll.value && newSelectData.length !== displayData.value.length) {
    stopUpdate.value = true;
    selectAll.value = false;
  }
  selectData.value = newSelectData;
});

const tableHeader = computed(() => {
  if (props.data.length > 0) {
    return Object.keys(props.data[0]).filter((key) => !props.hideCol.includes(key));
  }
  return [];
});
</script>
