<template>
  <div v-if="loading">Cargando...</div>
  <div v-else>
    <h1>Characters</h1>
    <div class="container-character-list">
      <Card
        v-for="character in charactersList._rawValue"
        :nameCard="
          character.name.last +
          ' ' +
          character.name.middle +
          ' ' +
          character.name.first
        "
        :imgCard="character.images.main"
        :occupation="character.occupation"
        :species="character.species"
        :key="character.id"
        @click="toCharacter(character.id)"
      >
      </Card>
    </div>
  </div>
</template>
<script setup>
import { useGetData } from "@/composables/getData";
import { ref } from "vue";

const { getData, data, loading } = useGetData();
const router = useRouter();
const characterSelectedId = ref();
const charactersList = ref();

getData("https://api.sampleapis.com/futurama/characters").then(
  (charactersList.value = data)
);

const toCharacter = (id) => {
  characterSelectedId.value = id;
  router.push('/characters/'+characterSelectedId.value);
};

</script>
<style>
.container-character-list {
  display: flex;
  flex-flow: row wrap;
  column-gap: 3rem;
}
</style>
