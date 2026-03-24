import { ref } from "vue"
const data = ref([])
let fetched = false
export async function getData() {
    if(fetched){
        return data.value
    }
    try {
        const response = await fetch('https://data.cityofnewyork.us/resource/43nn-pn8j.json')
        data.value = await response.json()
        fetched = true
    }catch (error) {
        console.log(error)
    }
    console.log(data)
    console.log(data.value)
    return data.value
}