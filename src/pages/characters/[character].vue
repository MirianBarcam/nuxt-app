<template>
  <div v-if="loading">Cargando...</div>
  <div v-else class="container">
    <div class="container-img">

    </div>
    <div class="container-description">

    </div>
    <h1>{{ characterData._rawValue.name.last + ' ' +  characterData._rawValue.name.middle + ' ' +  characterData._rawValue.name.first }}</h1>
    <div class="container-">
    </div>
  </div>
</template>

<script setup>

import { useGetData } from "@/composables/getData";
import { ref } from "vue";

const { getData, data, loading } = useGetData();
const characterData = ref();

const route = useRoute();
const param = ref(route.params.character)

console.log('parametro de la ruta:', param.value)

getData("https://api.sampleapis.com/futurama/characters/"+param.value)
  .then((characterData.value = data))
  .then(console.log("el personaje traído:", characterData.value));


</script>