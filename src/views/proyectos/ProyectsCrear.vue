<template>
  <div>
    <HeaderCompo />
    <h2>Crear Nuevo Proyecto</h2>
    <form @submit.prevent="crearProyecto">
      <div class="form-group">
        <label for="nombre">Nombre del Proyecto:</label>
        <input type="text" id="nombre" v-model="nombreProyecto" class="form-control">
      </div>
      <div class="form-group">
        <label for="cliente">Cliente:</label>
        <select v-model="clienteSeleccionado" class="form-control">
          <option v-for="cliente in clientes" :key="cliente.id" :value="cliente.id">{{ cliente.nombreC }}</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Crear Proyecto</button>
    </form>
  </div>
</template>

<script>
import HeaderCompo from '@/components/HeaderCompo.vue'
import axios from 'axios';

export default {
  name: "PanelView",
  data() {
    return {
      nombreProyecto: '',
      clienteSeleccionado: null,
      clientes: []
    };
  },
  components: {
    HeaderCompo
  },
  mounted() {
    this.fetchClientes();
  },
  methods: {
    fetchClientes() {
      axios.get('http://127.0.0.1:8000/api/cliente/clientes/')
        .then(response => {
          this.clientes = response.data;
        })
        .catch(error => {
          console.error('Error al obtener clientes: ', error);
        });
    },
    crearProyecto() {
      const proyecto = {
        nombreP: this.nombreProyecto,
        cliente_id: this.clienteSeleccionado
      };
      axios.post('http://127.0.0.1:8000/api/proyectos/', proyecto)
        .then(response => {
          console.log('Proyecto creado:', response.data);
          // Aquí puedes redirigir a otra página o hacer cualquier otra acción después de crear el proyecto
          this.$router.push("/proyectView");
        })
        .catch(error => {
          console.error('Error al crear proyecto: ', error);
        });
    }
  }
};
</script>
