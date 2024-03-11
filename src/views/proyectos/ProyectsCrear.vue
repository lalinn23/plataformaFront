<template>
  <div>
    <HeaderCompo />
  <div class="container">
    <div class="card mt-5">
      <div class="card-body">
        <form @submit.prevent="crearProyecto">
          <legend class="mb-4">Crear Proyectos</legend>
          <div class="mb-3">
            <label for="nombreP" class="form-label">Nombre del proyecto</label>
            <input type="text" v-model="nombreP" class="form-control" id="nombreP" name="nombreP" placeholder="Nombre del proyecto">
          </div>
          <div class="mb-3">
            <label for="cliente" class="form-label">Clientes</label>
            <select v-model="clienteSeleccionado" id="cliente" name="cliente" class="form-select">
              <option disabled value="">Selecciona el cliente</option>
              <option v-for="cliente in clientes" :key="cliente.id" :value="cliente.id">{{ cliente.id }}</option>
            </select>
          </div>

          <button type="submit" class="btn btn-primary">Crear Proyecto</button>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import HeaderCompo from '@/components/HeaderCompo.vue';
import axios from 'axios';

export default {
  name: "ClientesEditar",
  components: {
    HeaderCompo
  },
  data() {
    return {
      nombreP: '',
      clienteSeleccionado: null,
      clientes: []
    };
  },
  created() {
    this.obtenerClientes();
  },
  methods: {
    obtenerClientes() {
      axios.get('http://127.0.0.1:8000/api/cliente/clientes/')
        .then(response => {
          this.clientes = response.data;
        })
        .catch(error => {
          console.error('Error al obtener clientes:', error);
        });
    },
    crearProyecto() {
      const datosProyecto = {
        nombreP: this.nombreP,
        cliente: this.clienteSeleccionado
      };

      axios.post('http://127.0.0.1:8000/proyectos/', datosProyecto)
        .then(response => {
          console.log('Proyecto creado exitosamente:', response.data);
        })
        .catch(error => {
          console.error('Error al crear el proyecto:', error);
        });
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}

.card {
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
