<script setup>
import { ref } from 'vue';
import cabecera from './components/cabecera.vue';
import navp from './components/nav.vue';
import pie from './components/pie.vue'

import preguntas from './views/Preguntas.vue';
import {RouterLink, RouterView} from 'vue-router';



const iniciarSesion = function (nombre,rol){
  sesionUsuario.value.nombre=nombre;
  sesionUsuario.value.rol=rol;
}

const sesionUsuario=ref({nombre:"",rol:""});

</script>

<template>
  <div>
    <cabecera @iniciarsesion="iniciarSesion" :sesionUser="sesionUsuario" titulo="Proyecto HLC 2º Trimestre"/>
    
    <navp/>
    <RouterView/>

    <pie />
  </div>

</template>

<style scoped>
 body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
  }

  #app {
    text-align: center;
  }
  
</style>
./components/Preguntas.vue