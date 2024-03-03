<script setup>
import { ref } from 'vue';
import router from '@/router';

const preguntasExamen= ref();
const preguntasExamenGuardadas= localStorage.getItem('preguntasExamen');
    if (preguntasExamenGuardadas) {
      preguntasExamen.value = JSON.parse(preguntasExamenGuardadas);
    }

const examenes= ref([
  {id: 1, nombre: 'Examen de Historia', fecha: '12/04/2024'}
]);

const cambiarVista=function(){
  router.push("crearExamen")
}
</script>

<template>
    <h1>Examen</h1>
    <div class="examen">
            <div v-for="examen in examenes" :key="examen.id" class="examenes">
                <div>
                    <span>{{ examen.nombre }}. {{ examen.fecha }}</span>
                    <button @click="">Ver</button>
                </div>
            </div>
        </div>
        <div class="acciones-finales">
            <button @click="cambiarVista()">Crear Examen</button>
        </div>
  </template>
  
  <style scoped>
    main {
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  color: #C1A5A9;
}
.examen{
  text-align: center;
}

.examenes {
  background-color: #ecf0f1;
  border: 1px solid #bdc3c7;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
  </style>
  