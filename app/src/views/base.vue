<template>
    <div class="m-5">      
      <h1 v-if="!checkSelect">Please select a restuarant</h1>
      <input class="hover:ring-4 ring-blue-200 outline-4 outline-blue-300 rounded-3xl p-2 m-3" v-model="searched" placeholder="Please type a name"></input>
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

onBeforeMount(async () => {
  Rawrests.value = await getData()
  rests.value = Rawrests.value
  loaded.value = true
}) 

watch(searched, (newValue) =>{
  if(newValue === ""){
    rests.value = Rawrests.value
    console.log("reseted", searched.value)
    return
  }
  rests.value = Rawrests.value.filter(item => item.dba.toLowerCase().includes(searched.value.toLowerCase()))
  console.log("changed", searched.value)
})
</script>

<style scoped>

</style>