<template>
    <div>
      <HeaderCompo />
      <h1>Fases</h1>
  
      <div class="container">
        <button class="btn btn-success align-right" v-on:click="crear()">Agregar</button>
  
        <br>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="fase in ListaFases" :key="fase.id">
              <th scope="row">{{ fase.id }}</th>
              <td>{{ fase.nombreF }}</td>
              <td>
                <button class="btn btn-danger" @click="eliminarFase(fase.id)">Eliminar</button>
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
        ListaFases: null,
        pagina: 1
      }
    },
    components: {
      HeaderCompo,
    },
    methods: {
      crear() {
        this.$router.push('/crearFases');
      },
      eliminarFase(idFase) {
        if (confirm("¿Estás seguro de que quieres eliminar esta fase?")) {
          axios.delete(`http://127.0.0.1:8000/api/fase/fases/${idFase}/`)
            .then(response => {
              console.log('Fase eliminada con éxito:', response.data);
              // Actualizar la lista de fases después de eliminar
              this.obtenerFases();
            })
            .catch(error => {
              console.error('Error al eliminar la fase:', error);
            });
        }
      },
      obtenerFases() {
        let fases = "http://127.0.0.1:8000/api/fase/fases/";
        axios.get(fases).then(response => {
          this.ListaFases = response.data;
          console.log(this.ListaFases)
        });
      }
    },
    mounted: function () {
      this.obtenerFases();
    }
  }
  </script>
  
  <style scoped>
  .align-right {
    float: right;
  }
  </style>
  