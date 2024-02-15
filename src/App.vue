<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Form</RouterLink>
      <br>
      <RouterLink to="/list">Lista de Objetos</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style>

</style>
