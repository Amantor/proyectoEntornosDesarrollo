<script setup>
import { ref, defineEmits } from 'vue';
import router from '@/router';

const nombre = ref('');
const rol =ref('');

const emit = defineEmits("datosactualizados");

const iniciarSesion = function () {
  fetch("/datos.json")
    .then(response => response.json())
    .then(function (data) {
      data.forEach(element => {
        console.log(element.nombre);
      });
    });

  localStorage.setItem("sesion", nombre.value);
  localStorage.setItem("rol", rol.value);
  emit('datosactualizados');
  router.push("home")
};


</script>

<template>
  <main>
    <h1>Inicie Sesión</h1>
    <input placeholder="Nombre" v-model="nombre">
    <select v-model="rol">
      <option value="Profesor">Profesor</option>
      <option value="Alumno">Alumno</option>
    </select>
    <button @click="iniciarSesion">Iniciar Sesión</button>
  </main>
</template>

<style scoped>
main {
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1{
  color: #C1A5A9;
}

input,
select {
  padding: 8px 15px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  margin-top: 5px;
  border-radius: 5px;
}

button{
  background-color: #f08cae;
  color: white;
  padding: 8px 15px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  margin-top: 5px;
  border-radius: 5px;
}

button:hover{
  background-color: rgb(154, 76, 149)
}
</style>