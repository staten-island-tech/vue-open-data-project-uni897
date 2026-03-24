<template>
    <div class="m-5">      
      <h1 v-if="!checkSelect">Please select a restuarant</h1>
      <input class="hover:ring-4 ring-blue-200 outline-4 outline-blue-300 rounded-3xl p-2 m-3" v-model="searched" placeholder="Please type a name"></input>
      <button type="button" @click="Search" class="hover:bg-blue-700 focus:outline-4 focus:outline-offset-2 focus:outline-blue-500 active:bg-blue-800 bg-blue-600 text-white border-border-4 rounded-3xl ml-3 h-10 w-30">Search</button>
      <br/>
      <select v-if="loaded" v-model="selected" class="bg-teal-300 border-3 border-teal-500">
        <option>--Select--</option>
        <option v-for="(rest, index) in rests" :key="index" :value="rest">{{ rest.dba }}</option>
      </select>
      <RestuarantCard v-if="checkSelect" :rest="selected"/>
      <CircleChart v-if="loaded" :rests="rests"></CircleChart>
    </div>
</template>

<script setup>
import { ref, onBeforeMount, computed, watch } from 'vue'
import { getData } from '@/state/state.js'
import CircleChart from '@/components/CircleChart.vue'
import RestuarantCard from '@/components/RestuarantCard.vue'
const rests = ref([])
const loaded = ref(false)
const selected = ref("--Select--")
const searched = ref("")
const Rawrests = ref([])

const checkSelect = computed(() => selected.value !== "--Select--")

onBeforeMount(() =>
 {
  Rawrests.value = getData()
})

function Search(){
  if(searched.value === ""){
    rests.value = Rawrests.value
    console.log("reseted", searched.value)
    return
  }
  rests.value = Rawrests.value.filter(item => item.dba.toLowerCase().includes(searched.value.toLowerCase()))
  console.log("changed", searched.value)
}

/* async function getData() {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/43nn-pn8j.json')
    const data = await response.json()
    Rawrests.value = data
    rests.value = Rawrests.value
    loaded.value = true
  } catch (error) {
    console.log(error)
  }
} */


</script>

<style scoped>

</style>