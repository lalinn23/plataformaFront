<template>
  <div>
    <HeaderCompo />
    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card mt-5 shadow" style="width: 453.79px; height: 380.26px;"> <!-- Agregamos las clases y estilos -->
            <div class="card-body">
              <h1 class="card-title">Actualizar <span class="resaltado">Proyecto</span></h1>

              <form @submit.prevent="editarProyecto">
                <div class="mb-3">
                  <label for="nombreP" class="form-label">Nombre del proyecto</label>
                  <input type="text" v-model="form.nombreP" class="form-control" id="nombreP" name="nombreP" placeholder="Nombre del proyecto">
                </div>
                <div class="mb-3">
                  <label for="cliente" class="form-label">Cliente</label>
                  <select v-model="form.clienteSeleccionado" id="cliente" name="cliente" class="form-select">
                    <option disabled value="">Selecciona el cliente</option>
                    <option v-for="cliente in clientes" :key="cliente.id" :value="cliente.id">{{ cliente.nombreC }}</option>
                  </select>
                </div>
                <div class="d-grid gap-2 mb-2">
                  <button type="submit" class="btn btn-primary btn-block">Actualizar Proyecto</button>
                  <button type="button" class="btn btn-success btn-block" @click="salir">Atrás</button>
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
import HeaderCompo from '@/components/HeaderCompo.vue';
import axios from 'axios';

export default {
  name: "ProyectosEditar",
  components: {
    HeaderCompo
  },
  data() {
    return {
      form: {
        nombreP: '',
        clienteSeleccionado: null,
      },
      idProyecto: null,
      clientes: [],
    };
  },
  methods: {
    editarProyecto() {
      axios.patch(`http://127.0.0.1:8000/api/proyectos/${this.idProyecto}/`, {
        nombreP: this.form.nombreP,
        cliente_id: this.form.clienteSeleccionado // Envía solo el ID del cliente
      })
        .then(response => {
          console.log('Proyecto actualizado con éxito:', response.data);
          this.$router.push("/proyectView");
        })
        .catch(error => {
          console.error('Error al actualizar el proyecto:', error);
        });
    },

    salir() {
      this.$router.push("/proyectView");
    },
    obtenerDatosProyecto() {
      this.idProyecto = this.$route.params.id;
      axios.get(`http://127.0.0.1:8000/api/proyectos/${this.idProyecto}/`)
        .then(response => {
          const proyecto = response.data;
          this.form.nombreP = proyecto.nombreP;
          this.form.clienteSeleccionado = proyecto.cliente.id; // Asigna el ID del cliente
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
/* H1*/ 
h1{
  font-family: fantasy;
}
.titulo {
    color: black; /* Color negro para la palabra "Lista" */
}

.resaltado {
  color: #2bbb2f; /* Color verde para la palabra "clientes" */
}
</style>
