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

const displayData = computed<any[]>(() => {
  return props.data;
});

// Select Data
const selectData = defineModel<any[]>('selectData', { default: () => [] });
const selectAll = ref<boolean>(false);
const selectIdArr = ref<(string | number)[]>([]);
const selectArr = ref<any[]>([]);
const stopUpdate = ref(false);

watch(selectAll, (newVal) => {
  if (newVal) {
    selectArr.value = displayData.value;
    selectIdArr.value = displayData.value.map((item) => item[props.keyCol as string]);
  } else {
    if (!stopUpdate.value || selectArr.value.length === displayData.value.length) {
      selectArr.value = [];
      selectIdArr.value = [];
    } else {
      stopUpdate.value = false;
    }
  }
});

watch(selectIdArr, () => {
  const selectData = props.data.filter((item) => selectIdArr.value.includes(item[props.keyCol as string]));
  selectArr.value = selectData;
  if (selectData.length === displayData.value.length) {
    selectAll.value = true;
  } else {
    stopUpdate.value = true;
    selectAll.value = false;
  }
});

const tableHeader = computed(() => {
  if (props.data.length > 0) {
    return Object.keys(props.data[0]).filter((key) => !props.hideCol.includes(key));
  }
  return [];
});
</script>
