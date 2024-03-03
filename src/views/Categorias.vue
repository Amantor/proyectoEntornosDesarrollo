<script setup>
import { ref} from 'vue';

const categorias = ref([
      {id: 1, categoria: 'Historia'},
      {id: 2, categoria: 'Literatura'}, 
      {id: 3, categoria: 'Informática'}
    ]);

const categoriasGuardadas = localStorage.getItem('categoria');
        if (categoriasGuardadas){
            categorias.value = JSON.parse(categoriasGuardadas);
        }

const nuevaCategoria = ref("");
const categoriaEditable = ref("");

const agregarCategoria = function() {
        if (nuevaCategoria.value!=='') {
            const nuevaId = categorias.value.length + 1;
            categorias.value.push({
                id: nuevaId,
                categoria: nuevaCategoria.value,
            });

            localStorage.setItem('categorias', JSON.stringify(categorias.value));

            nuevaCategoria = '';
        }
    }

const borrarCategoria = function(id){
  categorias.value = categorias.value.filter(categoria => categoria.id !== id);
  localStorage.setItem('categorias', JSON.stringify(categorias.value));
};

const editarCategoria = function(id, categoria){
  categoriaEditable.value.id = id;
  categoriaEditable.value.categoria = categoria;
};

const guardarEdicion = function(){
        const categoriaEditada = categorias.value.find(categoria => categoria.id === categoriaEditable.value.id);
        if (categoriaEditada) {
            categoriaEditada.categoria = categoriaEditable.value.categoria;

            localStorage.setItem('categorias', JSON.stringify(categorias.value));

            categoriaEditable.value.id = null;
            categoriaEditable.value.categoria = '';
        }
    };

    const eliminarCategorias = function(){
        categorias.value=[];
        localStorage.removeItem("categorias");
    }

</script>

<template>
  <main>
    <h1>Categorias</h1>
    <div class="lista-categorias">
          <div v-for="categoria in categorias" :key="categoria.id" class="categoria">
              <div v-if="categoriaEditable.id === categoria.id">
                  <input v-model="categoriaEditable.categoria" class="input-categoria-editable" />
                  <button @click="guardarEdicion" class="boton-guardar">Guardar</button>
              </div>
              <div v-else>
                  <span>{{ categoria.categoria }}</span>
                  <button @click="editarCategoria(categoria.id, categoria.categoria)" class="boton-editar">Editar</button>
                  <button @click="borrarCategoria(categoria.id)" class="boton-borrar">Borrar</button>
              </div>
          </div>
    </div>

      <form @submit.prevent="agregarCategoria" class="formulario">
          <label for="nuevacategoria">Nueva categoria</label>
          <input type="text" v-model="nuevaCategoria" id="nuevaCategoria" required />

          <button type="submit">Agregar</button>
      </form>
      <hr>
      <div class="acciones-finales">
          <button @click="eliminarCategorias()">Eliminar categorias</button>
      </div>
  </main>
</template>

<style>
  main {
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  color: #C1A5A9;
}

.lista-categorias {
  justify-content: center;
}

.categoria {
  background-color: #ecf0f1;
  border: 1px solid #bdc3c7;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.input-categoria-editable {
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

.acciones-finales {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
</style>
