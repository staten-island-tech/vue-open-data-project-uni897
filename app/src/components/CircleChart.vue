<template>
    <div>
         <Bar
            id="my-chart-id"
            :data="props.rest"
            />
    </div>
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const props = defineProps({
    rest:{
        type: Object,
        required: true
    }
})
</script>

<style scoped>

</style>