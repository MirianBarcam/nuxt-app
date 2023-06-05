<template>
  <div v-if="loading">Cargando...</div>
  <div v-else class="container">
    <div class="container-img">
      <img :src="characterData.value.images.main" />
    </div>
    <div class="container-data">
      <h1 class="title-name">
        {{
          characterData.value.name.last +
          " " +
          characterData.value.name.middle +
          " " +
          characterData.value.name.first
        }}
      </h1>
      <div class="description-data">
        <h6>Age:</h6>
        <p>{{ characterData.value.age }}</p>
      </div>
      <div class="description-data">
        <h6>Gender:</h6>
        <p>{{ characterData.value.gender }}</p>
      </div>
      <div class="description-data">
        <h6>Home planet:</h6>
        <p>{{ characterData.value.homePlanet }}</p>
      </div>
      <div class="description-data">
        <h6>Occupation:</h6>
        <p>{{ characterData.value.occupation }}</p>
      </div>
      <div class="description-data">
        <h6>Specie:</h6>
        <p>{{ characterData.value.species }}</p>
      </div>
      <h6>Sayings:</h6>
      <p v-for="saying in characterData.value.sayings">{{ saying }}</p>
    </div>
  </div>
</template>

<script setup>
import { useGetData } from "@/composables/getData";
import { ref } from "vue";

const { getData, data, loading } = useGetData();
const characterData = ref();

const route = useRoute();
const param = ref(route.params.character);

console.log("parametro de la ruta:", param.value);

getData("https://api.sampleapis.com/futurama/characters/" + param.value)
  .then((characterData.value = data))
  .then(console.log("el personaje traído:", characterData.value));
</script>
<style>
.container {
  display: flex;
  flex-direction: row;
  gap: 3rem;
}
.container-data {
  display: flex;
  flex-direction: column;
}
.description-data {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
.title-name {
  margin-bottom: 2rem;
}
</style>
