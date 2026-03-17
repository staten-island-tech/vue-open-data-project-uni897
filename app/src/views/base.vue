<template>
    <div>
      <select v-if="loaded">
        <option>--Select--</option>
        <Options v-for="rest in rests" :key="rest.dba" :rest="rest"></Options>
      </select>
    </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import Options from '@/components/options.vue'
const rests = ref({})
const loaded = ref(false)
async function getData() {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/43nn-pn8j.json')
    const data = await response.json()
    rests.value = data
    loaded.value = true
  } catch (error) {
    console.log(error)
  }
}
onBeforeMount(() =>
 {
  getData()
})

</script>

<style scoped>

</style>