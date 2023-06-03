<script setup>
import {ref} from 'vue'
import {useGetData} from '@/composables/getData'
const {getData,data,loading} = useGetData();
const infoData = ref()
getData('https://api.sampleapis.com/futurama/info').then(infoData.value=data).then(console.log('lo que trae:', infoData.value))
</script>

<template>
  <div v-if="loading">
      Cargando...
  </div>
  <div v-else >
    <h1>Synopsis</h1><br/>
    <h6>{{ infoData._rawValue[0].synopsis }}</h6><br/><br/>
    <h6>Creators:</h6>
    <p v-for="creator in infoData._rawValue[0].creators">
      {{creator.name}}
    </p>

    
  </div>
</template>

<style>

</style>
