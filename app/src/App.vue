<template>
  <div></div>
  <RouterView/>
</template>

<script>
import { ref } from "vue"
export async function getData() {
    try {
        const response = await fetch('https://data.cityofnewyork.us/resource/43nn-pn8j.json')
        const data = await response.json()
        return ref(data)
    }catch (error) {
            console.log(error)
    }
}
</script>

<style scoped>

</style>