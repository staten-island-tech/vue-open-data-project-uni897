<template>
    <div class="m-5">      
      <h1 v-if="!checkSelect">Please select a restuarant</h1>
      <select @change="getCritical" v-if="loaded" v-model="selected" class="bg-teal-300 border-3 border-teal-500">
        <option>--Select--</option>
        <option v-for="rest in rests" :key="rest.dba" :value="rest">{{ rest.dba }}</option>
      </select>
      <RestuarantCard v-if="checkSelect" :rest="selected"/>
    </div>
</template>

<script setup>
import { ref, onBeforeMount, computed } from 'vue'
import RestuarantCard from '@/components/RestuarantCard.vue'
const rests = ref()
const loaded = ref(false)
const selected = ref("--Select--")

const checkSelect = computed(() => selected.value !== "--Select--")

function getCritical(){
  console.log(selected.value.critical_flag)
}
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