<script setup lang="ts">
</script>

<template>
  <div class="navbar-container">
    <nav class="navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Futurama_1999_logo.svg/2560px-Futurama_1999_logo.svg.png"
            alt="Logo"
            width="250"
            height="70"
            class="d-inline-block align-text-top"
          />
          <img
            src="https://www.pngplay.com/wp-content/uploads/10/Futurama-PNG-Images-HD.png"
            alt="Logo"
            width="100"
            height="80"
            class="d-inline-block align-text-top img-navbar-car"
          />
       
        </a>
        <ul class="nav nav-underline">
          <li class="nav-item">
            <NuxtLink
              :to="{ name: 'index' }"
              class="nav-link"
              active-class="active"
              >Home</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink
              :to="{ name: 'characters' }"
              class="nav-link"
              active-class="active"
              >Characters</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink
              :to="{ name: 'cast' }"
              class="nav-link"
              active-class="active"
              >Cast</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink
              :to="{ name: 'episodes' }"
              class="nav-link"
              active-class="active"
              >Episodes</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink
              :to="{ name: 'questions' }"
              class="nav-link"
              active-class="active"
              >Questions</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink
              :to="{ name: 'inventory' }"
              class="nav-link"
              active-class="active"
              >Inventory</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink
              :to="{ name: 'about' }"
              class="nav-link"
              active-class="active"
              >About</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink
              :to="{ name: 'login' }"
              class="nav-link"
              active-class="active"
              >Login</NuxtLink
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.img-navbar-car{
  margin-left: 4rem;
}
.navbar-container{
  background-color: #011325;
}
.container-fluid {
  max-width: 130rem;
  margin: auto;
}
.active {
  border-bottom: 2px solid rgb(3, 224, 224);
}
.nav-link {
  color: dimgray;
}
.nav-link:hover {
  color: rgb(3, 224, 224);
}
</style>
