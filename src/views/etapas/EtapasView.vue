<template>
    <div>
      <HeaderCompo />
      <h1 class="titulo">Catalogo De <span class="resaltado">Etapas</span></h1>
  
      <div class="container ">
        <button class="btn btn-success align-right" v-on:click="crear()">Agregar Etapa</button>
        <br>
        <br>
        <table class="table table-hover ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="etapa in ListaEtapas" :key="etapa.id">
              <th scope="row">{{ etapa.id }}</th>
              <td>{{ etapa.nombreE }}</td>
              <td>
                <button class="btn btn-danger" @click="eliminarFase(etapa.id)">Eliminar</button>
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
        ListaEtapas: null,
        pagina: 1
      }
    },
    components: {
      HeaderCompo,
    },
    methods: {
      crear() {
        this.$router.push('/etapasCrear');
      },
      eliminarFase(idEtapa) {
        if (confirm("¿Estás seguro de que quieres eliminar esta fase?")) {
          axios.delete(`http://127.0.0.1:8000/api/etapa/etapas/${idEtapa}/`)
            .then(response => {
              console.log('Fase eliminada con éxito:', response.data);
              // Actualizar la lista de etapas después de eliminar
              this.obtenerEtapas();
            })
            .catch(error => {
              console.error('Error al eliminar la fase:', error);
            });
        }
      },
      obtenerEtapas() {
        let etapas = "http://127.0.0.1:8000/api/etapa/etapas/";
        axios.get(etapas).then(response => {
          this.ListaEtapas = response.data;
          console.log(this.ListaEtapas)
        });
      }
    },
    mounted: function () {
      this.obtenerEtapas();
    }
  }
  </script>
  <style scoped>
  .align-right {
    float: right;
  }
  
  /* H1*/
  h1 {
    font-family: fantasy;
  }
  
  .titulo {
    color: black;
    /* Color negro para la palabra "Lista" */
  }
  
  .resaltado {
    color: #2bbb2f;
    /* Color verde para la palabra "clientes" */
  }
  </style>
  