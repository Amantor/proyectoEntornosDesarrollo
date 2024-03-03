<script setup>
import { ref } from 'vue';
import router from '@/router';

const props = defineProps({
    sesionUser: Object,
    titulo: String
})

const datosSesionGlobal = ref({
  nombre:"",
  rol:""
})

const emit=defineEmits(['cerrarsesion','iniciarsesion','datosactualizados']);

const cambiarVista=function (){
  router.push("login");
}

const recuperarDatos=function(){
 datosSesionGlobal.value.nombre=localStorage.getItem("sesion");
}

recuperarDatos();

</script>

<template>
    <header class="cabecera">
      <div class="izquierda">
        <img src="@/assets/logo.svg" alt="Logo" class="logo" />
        <h1>{{ titulo }}</h1>
      </div>
      <div class="derecha">
        <p v-if="sesionUser.nombre !== ''">Bienvenido {{ datosSesionGlobal.nombre }}</p>
        <button v-else @click="cambiarVista" class="boton-iniciar-sesion">Iniciar sesión</button>
      </div>
    </header>
  </template>
  
  <style scoped>
    .cabecera {
      background-color: rgb(77, 45, 82);
      color: 	#C1A5A9;
      padding: 10px;
      margin: 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    .izquierda {
      display: flex;
      align-items: center;
    }
  
    .logo {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
  
    h1 {
      margin: 0;
    }
  
    .derecha {
      text-align: right;
    }
  
    .mensaje-bienvenida {
      font-size: 16px;
      margin-bottom: 10px;
      margin-right: 5px;
    }
  
    .boton-cerrar-sesion,
    .boton-iniciar-sesion {
      background-color: #f08cae;
      color: white;
      padding: 8px 15px;
      border: none;
      cursor: pointer;
      font-size: 14px;
      margin-top: 5px;
      border-radius: 5px;
    }
  
    .boton-cerrar-sesion:hover,
    .boton-iniciar-sesion:hover {
      background-color: rgb(154, 76, 149)
    }
  </style>
  