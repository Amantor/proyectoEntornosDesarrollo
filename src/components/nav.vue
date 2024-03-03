<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    sesionUser: Object,
})
</script>

<template>
  <!--<nav v-if="sesionUser.rol === 'Profesor'">-->
  <nav>
    <RouterLink to="/" class="nav-button">Home</RouterLink>
    <RouterLink to="/preguntas" class="nav-button">Preguntas</RouterLink>
    <RouterLink to="/examen" class="nav-button">Examenes</RouterLink>
    <RouterLink to="/categorias" class="nav-button">Categorias</RouterLink>
  </nav>
  <!--<nav v-else-if="sesionUser.rol === 'Alumno'">
    <RouterLink to="/" class="nav-button">Home</RouterLink>
    <RouterLink to="/examen" class="nav-button">Examenes</RouterLink>
  </nav>
  <nav v-else>
    <RouterLink to="/" class="nav-button">Home</RouterLink>
  </nav>-->
</template>

<style scoped>
  nav {
    background-color: rgb(154, 76, 149);
    padding: 10px;
    height: 40px;
  }

  .nav-button {
    float: left;
    padding: 10px 40px;
    margin-right: 10px;
    text-decoration: none;
    color: #fff;
    background-color: #f08cae;
    border-radius: 5px;
  }

  .nav-button:hover {
    background-color: #4D2D52;
  }
</style>
