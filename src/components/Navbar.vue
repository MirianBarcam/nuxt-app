<script setup lang="ts"></script>

<template>
  <div>
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="https://imborrable.com/wp-content/uploads/2022/10/psicologia-del-color.jpg"
            alt="Logo"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          Colores
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
.active {
  border-bottom: 2px solid purple;
}
.nav-link {
  color: dimgray;
}
.nav-link:hover {
  color: rgb(3, 224, 224);
}
</style>
