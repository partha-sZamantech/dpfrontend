
<template>
  <div  class="flex flex-col gap-2 p-4 w-300px h-300px m-auto  bg-gray-500/5 rounded">
    <div v-for="item in dataState" :key="item" class="h-15 bg-gray-500/5 rounded p-3">
        <h2>{{  item.name }}</h2>
        <div v-html="item.description"></div>
    </div>
  </div>
</template>
<script setup>
const el = ref(null)
const dataState = useState(() => [])
const data = [{
    name: 'ok1',
    description: '<p>sdfsdfdsfsdfsdfsdf</p> <p>sdfsdfdsfsdfsdfsdf</p>'
}]
dataState.value = data

const loadData = ($state) => {
      //calling the api
  }
</script>
