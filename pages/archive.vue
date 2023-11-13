<template>
    <div>
      <client-only>
        <h2>Calendar</h2>
        <!-- <VCalendar v-model="date" /> -->
        <h2>Date Picker</h2>
        <VDatePicker v-model="date" @change="okHandler"  />
      </client-only>
      {{ date }}
    </div>
  </template>

<script setup>
  import { ref } from '#imports'
  const ok = ref(null)
  const date = ref(new Date())
//   const attrs = ref([
//     {
//       key: 'today',
//       highlight: {
//         color: 'red',
//         fillMode: 'red'
//       },
//       dates: new Date()
//     }
//   ])
  const okHandler = (e) => {
    console.log(e.target.value)
  }
  console.log(date)
</script>
