<template>
  <div>
    <HeaderCompo />
    <div class="container">
      <div class="card mt-5">
        <div class="card-body">
          <form @submit.prevent="editarProyecto">
            <legend class="mb-4">Actualizar Proyecto</legend>
            <div class="mb-3">
              <label for="nombreP" class="form-label">Nombre del proyecto</label>
              <input type="text" v-model="nombreP" class="form-control" id="nombreP" name="nombreP" placeholder="Nombre del proyecto">
            </div>
            <div class="mb-3">
              <label for="cliente" class="form-label">Cliente</label>
              <select v-model="clienteSeleccionado" id="cliente" name="cliente" class="form-select">
                <option disabled value="">Selecciona el cliente</option>
                <option v-for="cliente in clientes" :key="cliente.id" :value="cliente.id">{{ cliente.nombre }}</option>
              </select>
            </div>

            <button type="submit" class="btn btn-primary">Actualizar Proyecto</button>
            <button type="button" class="btn btn-danger" v-on:click="eliminarProyecto()">Eliminar Proyecto</button>
            <button type="button" class="btn btn-success" v-on:click="salir()">Atrás</button>
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
  name: "ProyectosEditar",
  components: {
    HeaderCompo
  },
  data() {
    return {
      nombreP: '',
      clienteSeleccionado: null,
      clientes: [],
      idProyecto: null
    };
  },
  methods: {
    editarProyecto() {
      const datosProyecto = {
        nombreP: this.nombreP,
        cliente: this.clienteSeleccionado
      };

      axios.patch(`http://127.0.0.1:8000/proyectos/${this.idProyecto}/`, datosProyecto)
        .then(response => {
          console.log('Proyecto actualizado con éxito:', response.data);
          this.$router.push("/proyectView");
        })
        .catch(error => {
          console.error('Error al actualizar el proyecto:', error);
        });
    },
    eliminarProyecto() {
      axios.delete(`http://127.0.0.1:8000/proyectos/${this.idProyecto}/`)
        .then(response => {
          console.log('Proyecto eliminado con éxito:', response.data);
          this.$router.push("/proyectView");
        })
        .catch(error => {
          console.error('Error al eliminar el proyecto:', error);
        });
    },
    salir() {
      this.$router.push("/proyectView");
    },
    obtenerDatosProyecto() {
      this.idProyecto = this.$route.params.id;
      axios.get(`http://127.0.0.1:8000/proyectos/${this.idProyecto}`)
        .then(response => {
          const proyecto = response.data;
          this.nombreP = proyecto.nombreP;
          this.clienteSeleccionado = proyecto.cliente;
        })
        .catch(error => {
          console.error('Error al obtener los datos del proyecto:', error);
        });
    },
    obtenerClientes() {
      axios.get('http://127.0.0.1:8000/api/cliente/clientes/')
        .then(response => {
          this.clientes = response.data;
        })
        .catch(error => {
          console.error('Error al obtener clientes:', error);
        });
    }
  },
  created() {
    this.obtenerDatosProyecto();
    this.obtenerClientes();
  }
}
</script>

<style scoped>
.left {
  text-align: left;
}
</style>
