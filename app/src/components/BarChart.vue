<template>
    <div>
        <Bar
            id="bar"
            :options="chartOptions"
            :data="chartData"
        />
    </div>
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'
import { computed } from 'vue'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

const props = defineProps({
    rests:{
        type: Object,
        required: true
    }
})

const chartData = computed(() =>{
  const counts = {}
  props.rests.forEach(r => {
    const label = r.boro
    if(counts[label]){
      counts[label] ++
    }else{
      counts[label] = 1
    }
  });
  const backgroundColor = [
    "#36A2EB", 
    "#FFCE56", 
    "#9966FF", 
  ]
  return {
    labels: Object.keys(counts),
    datasets: [
      {
        label: 'Data One',
        data: Object.values(counts),
        backgroundColor: backgroundColor
      }
    ]
  }
})

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Restaurants by Breaking Safety Codes"
    }
  }
}
</script>

<style scoped>

</style>