<template>
  <div class="overflow-x-auto">
    <table class="table" :class="`table-${props.size}`">
      <!-- Header -->
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" :class="`checkbox-${props.size}`" v-model="selectAll" />
            </label>
          </th>
          <th v-for="header in tableHeader" :key="header">
            {{ header }}
          </th>
        </tr>
      </thead>
      <!-- Body -->
      <tbody>
        <tr v-for="(item) in props.data" :key="item[props.keyCol as string]">
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

// 使用 defineModel 來實現 v-model
const selectData = defineModel<any[]>('selectData', { default: () => [] });

const displayData = computed<any[]>(() => {
  return props.data;
});

// Select Data
const selectAll = ref<boolean>(false);
const selectIdArr = ref<(string | number)[]>(selectData.value.map(item => item[props.keyCol as string]));
const stopUpdate = ref(false);

watch(selectAll, (newVal) => {
  if (newVal) {
    const newSelectData = [...displayData.value];
    selectIdArr.value = newSelectData.map((item) => item[props.keyCol as string]);
    selectData.value = newSelectData;
  } else {
    if (!stopUpdate.value || selectData.value.length === displayData.value.length) {
      selectIdArr.value = [];
      selectData.value = [];
    } else {
      stopUpdate.value = false;
    }
  }
});

watch(selectIdArr, () => {
  const newSelectData = props.data.filter((item) => selectIdArr.value.includes(item[props.keyCol as string]));
  selectData.value = newSelectData;
  if (newSelectData.length === displayData.value.length) {
    selectAll.value = true;
  } else {
    stopUpdate.value = true;
    selectAll.value = false;
  }
});

// 監聽外部 selectData 的變化
watch(selectData, (newVal) => {
  if (newVal) {
    selectIdArr.value = newVal.map(item => item[props.keyCol as string]);
    selectAll.value = newVal.length === displayData.value.length;
  }
}, { deep: true });

const tableHeader = computed(() => {
  if (props.data.length > 0) {
    return Object.keys(props.data[0]).filter((key) => !props.hideCol.includes(key));
  }
  return [];
});
</script>
