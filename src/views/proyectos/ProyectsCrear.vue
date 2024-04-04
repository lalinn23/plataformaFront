<template>
  <div>
    <HeaderCompo />
    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card shadow" style="width: 453.79px; height: 355.26px;">
            <div class="card-body">
              <h1 class="card-title">Agregar <span class="resaltado">Proyecto</span></h1>
              <br>
              <form @submit.prevent="crearProyecto">
                <div class="form-group">
                  <label for="nombre">Nombre del Proyecto:</label>
                  <input type="text" id="nombre" v-model="nombreProyecto" class="form-control">
                </div>
                <div class="form-group">
                  <label for="cliente">Cliente:</label>
                  <select v-model="clienteSeleccionado" class="form-control" required>
                    <option v-for="cliente in clientes" :key="cliente.id" :value="cliente.id">{{ cliente.nombreC }}</option>
                  </select>
                </div>
                <br>
                <div class="d-grid gap-2 mb-2">
                  <button type="submit" class="btn btn-primary separado">Crear Proyecto</button>
                  <button type="button" class="btn btn-success separado"  v-on:click="salir()">Atrás</button>
                </div>
                <div v-if="error" class="alert alert-danger" role="alert">
                  {{ error }}
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
      clientes: [],
      error: ''
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
      if (!this.nombreProyecto.trim()) {
        this.error = 'Por favor, ingresa un nombre para el proyecto.';
        return;
      }
      
      const proyecto = {
        nombreP: this.nombreProyecto,
        cliente_id: this.clienteSeleccionado
      };
      
      axios.post('http://127.0.0.1:8000/api/proyectos/', proyecto)
        .then(response => {
          console.log('Proyecto creado:', response.data);
          this.$router.push("/proyectView");
        })
        .catch(error => {
          console.error('Error al crear proyecto: ', error);
        });
    }
  }
};
</script>

<style scoped>
h1{
  font-family: fantasy;
}
.titulo {
    color: black;
}

.resaltado {
  color: #2bbb2f;
}
.separado {
    margin-right: 20px;
    margin-bottom: 10px;
}
</style>
