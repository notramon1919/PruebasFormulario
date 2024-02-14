<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Form</RouterLink>
      <br>
      <RouterLink to="/about">Lista de Objetos</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style>

</style>
