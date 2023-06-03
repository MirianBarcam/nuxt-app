<template>
  <div class="container-app">
    <Navbar />
    <div class="container-default">
      <slot></slot>
    </div>
    
  </div>
</template>
<style>
.container-app{
  width: 100vw;
  height: 100vh;
}
.container-default{
  padding: 2rem;
  max-width: 100rem ;
  margin: auto;
}
</style>
