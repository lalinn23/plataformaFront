<template>
  <div>
    <HeaderCompo />
    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card shadow" style="width: 453.79px; height: 333.26px;"> <!-- Agregado: estilos en línea -->
            <div class="card-body">
              <h1 class="card-title text-center mb-4">Crear Nuevo Proyecto</h1>
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
                <br>
                <div class="d-grid gap-2 mb-2">
                  <button type="submit" class="btn btn-primary btn-block">Crear Proyecto</button>
                  <button type="submit" class="btn btn-success btn-block"  v-on:click="salir()">Atrás</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    salir() {
            this.$router.push("/proyectView");

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
