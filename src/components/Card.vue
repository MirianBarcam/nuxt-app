<template>
  <div class="card-container" >
    <div class="card-container-wrapper-img">
      <img :src="imgCard" class="card-img" />
    </div>
    <div class="card-container-content">
      <div class="card-container-content-title">
        <strong>{{ nameCard }}</strong>
      </div>
      <div class="card-container-content-subtitle">
        {{ occupation }}
      </div>
      <div class="card-container-content-subtitle">
        {{ species }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["imgCard", "species", "nameCard","occupation","key"]);
// const emit = defineEmits(["characterId"]);
// const characterClicked = () => {
//   emit("characterId", { key });
// };
</script>

<style>

.card-container {
  font-size: small;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 25rem;
  height: 5rem;
  border-radius: 20px;
  padding: 1rem;
  gap: 2rem;
  overflow: hidden;
  background-color: rgba(191, 199, 195, 0.355);
  margin-top: 1rem;
  border: none;
}
.card-container-content{
  gap: 0.2rem;
}
.card-container-content-title {
  width: 100%;
  height: 20px;
  column-gap: 1rem;
  display: flex;
  flex-direction: row;
}
.card-container-content-subtitle {
  font-size: x-small;
  display: flex;
  flex-direction: row;
  height: 1rem;
}
.card-container:hover {
  transition: 0.2s;
  transform: scale(1.1);
  background-color: rgb(3, 224, 224);
}
.card-container-wrapper-img {
  object-fit: cover;
  object-position: center center;
}
.card-img {
  width: 4rem;
  height: 4.5rem;
  border-radius: 100%;
}
</style>
