<template>
    <div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
const rests = ref({})
async function getData() {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/43nn-pn8j.json')
    const data = await response.json()
    rests.value = data.results
  } catch (error) {
    console.log(error)
  }
}
onMounted(() => {
  getData()
})
</script>

<style scoped>

</style>