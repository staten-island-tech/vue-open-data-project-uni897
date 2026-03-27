<template>
    <div class="w-150 h-50 font-bold bg-teal-300 rounded-2xl border-10 border-teal-500 mt-5 p-1">
        <h1>Name: {{ props.rest.dba }}</h1>
        <h1>Address: {{ props.rest.building }} {{ props.rest.street }}, {{ props.rest.boro }}</h1>
        <h1>Phone Number: {{ props.rest.phone }}</h1>
        <h1>Criticality: {{ props.rest.critical_flag }}</h1>
        <h1 v-if="props.rest.critical_flag === 'Critical' || props.rest.critical_flag === 'Not Critical'">Description: {{ props.rest.violation_code }} {{ props.rest.violation_description }}</h1>
    </div>
</template>

<script setup>
const props = defineProps({
    rest:{
        type: Object,
        required: true
    }
})
</script>

<style scoped>

</style>