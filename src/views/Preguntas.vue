<script setup>
import router from '@/router';
import { ref} from 'vue';

const preguntas= ref([
        { id: 1, pregunta: '¿En qué año se descubrió America', categoria: 'Historia'}
    ]);

const preguntasGuardadas = localStorage.getItem(preguntas);
        if (preguntasGuardadas) {
            preguntas.value = JSON.parse(preguntasGuardadas);
        }

const nuevaPregunta = ref("");
    
const agregarPregunta = function() {
        if (nuevaPregunta.value!=='') {
            const nuevaId = preguntas.value.length + 1;
            preguntas.value.push({
                id: nuevaId,
                pregunta: nuevaPregunta.value,
                preguntaExamen: false,
            });

            localStorage.setItem('preguntas', JSON.stringify(preguntas.value));

            nuevaPregunta = '';
        }
    }

const borrarPregunta = function(id){
  preguntas.value = preguntas.value.filter(pregunta => pregunta.id !== id);
  localStorage.setItem('preguntas', JSON.stringify(preguntas.value));
    }


    const agregarPreguntaExamen = function() {
        const preguntasExamen = preguntas.value.filter(pregunta => pregunta.preguntaExamen);
        localStorage.setItem('preguntasExamen', JSON.stringify(preguntasExamen));

        router.push("/examen")
    };

    const eliminarPreguntas = function(){
        preguntas.value=[];
        localStorage.removeItem("preguntas");
    }

const categorias= ref();
const categoriasGuardadas= localStorage.getItem('categorias');
    if (categoriasGuardadas) {
      categorias.value = JSON.parse(categoriasGuardadas);
    }

</script>

<template>
  <main>
        <h1>Preguntas</h1>
        <div class="lista-preguntas">
            <div v-for="pregunta in preguntas" :key="pregunta.id" class="pregunta">
                <div>
                    <span>{{ pregunta.id }}. {{ pregunta.pregunta }}. {{ pregunta.categoria }}</span>
                    <input type="checkbox" v-model="pregunta.preguntaExamen" class="checkbox-examen" />
                    <button @click="borrarPregunta(pregunta.id)" class="boton-borrar">Borrar</button>
                </div>
            </div>
        </div>

        <form @submit.prevent="agregarPregunta" class="formulario">
            <label for="nuevaPregunta">Nueva Pregunta</label>
            <input type="text" v-model="nuevaPregunta" id="nuevaPregunta" required />

            <select v-model="nuevaCategoria" id="nuevaCategoria">
                <option v-for="categoria in categorias" :key="categoria.id" class="categoria">{{ categoria }}</option>
            </select>

            <button type="submit">Agregar</button>
        </form>
        <hr>
        <div class="acciones-finales">
            <button @click="eliminarPreguntas()">Eliminar Preguntas</button>
            <button @click="agregarPreguntaExamen()">Añadir preguntas examen</button>
        </div>
    </main>
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

.lista-preguntas {
  justify-content: center;
}

.pregunta {
  background-color: #ecf0f1;
  border: 1px solid #bdc3c7;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.input-pregunta-editable {
  padding: 8px;
  border: 1px solid #bdc3c7;
  border-radius: 5px;
  margin-right: 10px;
}

.boton-guardar {
  background-color: #3498db;
  color: white;
  padding: 8px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.boton-guardar:hover {
  background-color: #2980b9;
}

.boton-eliminar {
  background-color: #e74c3c;
  color: white;
  padding: 8px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.boton-eliminar:hover {
  background-color: #c0392b;
}

.boton-editar {
  background-color: #2ecc71;
  color: white;
  padding: 8px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.boton-editar:hover {
  background-color: #27ae60;
}

.formulario {
  margin-top: 20px;
}

label {
  margin-right: 10px;
  color: #C1A5A9;
}

input {
  padding: 8px;
  border: 1px solid #bdc3c7;
  border-radius: 5px;
}

button {
  padding: 8px 15px;
  background-color: #166b58;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin: 5px;
}

button:hover {
  background-color: #29b98b;
}

.input-limpiar {
  margin-top: 20px;
  background-color: #e74c3c;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.input-limpiar:hover {
  background-color: #c0392b;
}

.checkbox-examen {
  margin-right: 10px;
}

.acciones-finales {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

select {
  margin-right: 10px;
  padding: 8px;
  border: 1px solid #bdc3c7;
  border-radius: 5px;
}

.acciones-derecha {
    margin-left: auto;
    display: flex;
    justify-content: space-between;
  }
</style>