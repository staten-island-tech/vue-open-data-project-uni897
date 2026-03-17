<template>
    <div>
        <option>{{ props.rest.dba }}</option>
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