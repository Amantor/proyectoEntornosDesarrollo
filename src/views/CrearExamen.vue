<script setup>
import { ref } from 'vue';

const examen = ref([
  {nombre: '', fecha: ''}
])

const nuevoExamen = ref("");

const agregarExamen = function() {
        if (nuevoExamen.value!=='') {
            const nuevaId = examen.value.length + 1;
            examen.value.push({
                id: nuevaId,
                nombre: nuevoExamen.value
            });

            localStorage.setItem('examenes', JSON.stringify(examenes.value));

            nuevoExamen = '';
        }
    }

</script>

  <template>
    <div>
      <h1>Crear Examen</h1>
      <label for="nombre">Título:</label>
      <input type="text" id="nombre" v-model="nombre"><br>
      <label for="fecha">Fecha:</label>
      <input type="date" id="fecha" v-model="fecha"><br>
      <h2>Preguntas:</h2>
      <ul>
        <li v-for="(question, index) in questions" :key="index">
          <input type="checkbox" v-model="selectedQuestions" :value="question">{{ question }}
        </li>
      </ul>
      <button @click="saveExam">Guardar</button>
    </div>
  </template>

<style scope>
   main {
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1, h2 {
  color: #C1A5A9;
}
label{
  color: #C1A5A9;
}
</style>