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
        </tr>
      </thead>
      <tbody>
        <tr v-for="proyecto in proyectos" :key="proyecto.id">
          <td>{{ proyecto.id }}</td>
          <td>{{ proyecto.nombreP }}</td>
          <td>{{ proyecto.cliente ? proyecto.cliente.nombreC : 'N/A' }}</td>
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