<template>
    <div class="h-100">
      <Bar 
          id="bar"
          :options="chartOptions"
          :data="chartData"
      />
    </div>
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { computed } from 'vue'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const props = defineProps({
    rests:{
        type: Array,
        required: true
    }
})

const chartData = computed(() =>{
  const counts = {}
  props.rests.forEach(r => {
    const label = r.boro
    if(r.critical_flag === "Critical" || r.critical_flag === "Not Critical"){
      counts[label] = (counts[label] || 0) + 1
    }
  });
  const backgroundColor = [
    "#36A2EB",
    "#FF6384",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40"  
  ]
  return {
    labels: Object.keys(counts),
    datasets: [
      {
        label: "# of restuarants breaking safety codes",
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