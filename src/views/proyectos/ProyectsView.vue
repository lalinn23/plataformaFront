<template>
  <div>
    <HeaderCompo />
    <h2>Lista de Proyectos</h2>
    <div class="container">
        <button class="btn btn-success align-right" v-on:click="crear()">Agregar</button>
        <br>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre del Proyecto</th>
          <th>Cliente</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="proyecto in proyectos" :key="proyecto.id">
          <td>{{ proyecto.id }}</td>
          <td>{{ proyecto.nombreP }}</td>
          <td>{{ proyecto.cliente ? proyecto.cliente.nombreC : 'N/A' }}</td>
          <td>
            <button class="btn btn-danger" @click="eliminarProyect(proyecto.id)">Eliminar</button>
            <button class="btn btn-primary"   v-on:click="editar(proyecto.id)">Editar</button>
          </td>

        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
import HeaderCompo from '@/components/HeaderCompo.vue';
import axios from 'axios';

export default {
  name: "PanelView",
  data() {
    return {
      proyectos: []
    };
  },
  components: {
    HeaderCompo,
  },
  mounted() {
    this.fetchProyectos();
  },
  methods: {
    
    crear(){
      this.$router.push('/crearProyects');

    },
    editar(id){
      this.$router.push('/editarProyects/' + id);
    },
    
    eliminarProyect(idProyect){
      if (confirm("¿Estás seguro de que quieres eliminar esta fase?")) {
          axios.delete(`http://127.0.0.1:8000/api/proyectos/${idProyect}/`)
            .then(response => {
              console.log('Fase eliminada con éxito:', response.data);
              // Actualizar la lista de fases después de eliminar
              this.fetchProyectos();
            })
            .catch(error => {
              console.error('Error al eliminar la fase:', error);
            });
        }
    },

    fetchProyectos() {
      axios.get('http://127.0.0.1:8000/api/proyectos/')
        .then(response => {
          this.proyectos = response.data;
        })
        .catch(error => {
          console.error('Error al obtener proyectos: ', error);
        });
    }
  }
};
</script>

<style scoped>
.align-right {
  float: right;
}
</style>