<template>
    <svg v-if="props.icon === 'pig'" class="fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
      <path
        d="M237-120q-23 0-44.5-16T164-175q-25-84-41-145.5t-25.5-108Q88-475 84-511t-4-69q0-92 64-156t156-64h200q27-36 68.5-58t91.5-22q25 0 42.5 17.5T720-820q0 6-1.5 12t-3.5 11q-4 11-7.5 22t-5.5 24l91 91h47q17 0 28.5 11.5T880-620v210q0 13-7.5 23T852-372l-85 28-50 167q-8 26-29 41.5T640-120h-80q-33 0-56.5-23.5T480-200h-80q0 33-23.5 56.5T320-120h-83Zm3-80h80v-80h240v80h80l62-206 98-33v-141h-40L620-720q0-20 2.5-39t7.5-37q-29 8-51 27.5T547-720H300q-58 0-99 41t-41 99q0 41 21 140.5T240-200Zm400-320q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520Zm-160-80q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680H360q-17 0-28.5 11.5T320-640q0 17 11.5 28.5T360-600h120Zm0 102Z" />
    </svg>
    <svg v-if="props.icon === 'download'" class="fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m480-288 144-144-51-51-57 57v-150h-72v150l-57-57-51 51 144 144ZM263.72-96Q234-96 213-117.15T192-168v-504l192-192h312q29.7 0 50.85 21.15Q768-821.7 768-792v624q0 29.7-21.16 50.85Q725.68-96 695.96-96H263.72Zm.28-72h432v-624H414L264-642v474Zm0 0h432-432Z"/></svg>
    <svg v-if="props.icon === 'upload'" class="fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>
    <svg v-if="props.icon === 'edit'" class="fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/></svg>
    <svg v-if="props.icon === 'edit2'" class="fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
    <svg v-if="props.icon === 'delect'" class="fill-current" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
      <path
        d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" />
    </svg>
    <svg  v-if="props.icon === 'close'" class="fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: string
}>()
</script>