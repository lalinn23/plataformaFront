<template>

  <div>
    <HeaderCompo />
    <h1>Lista Proyectos</h1>

    <div class="container">
      <button class="btn btn-success align-right" v-on:click="crear()">Nuevo Proyecto</button>
      <br>
      <br>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre del proyecto</th>
            <th scope="col">Cliente</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="proyecto in ListaProyectos" :key="proyecto.id" v-on:click="editar(proyecto.id)">
            <th scope="row">{{ proyecto.id }}</th>
            <td>{{ proyecto.nombreP }}</td>
            <td>{{ proyecto.cliente.nombreC }}</td>
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
  name: "ClientesEditar",
  data() {
    return {
      ListaProyectos: null,
      pagina: 1
    }
  },
  components: {
    HeaderCompo
  },

  methods: {
    crear() {
      this.$router.push('/crearProyects');

    },
    editar(id) {
      //console.log(id);
      this.$router.push('/editarProyects/' + id);
    }
  },
  mounted: function () {
    let proyectos = "http://127.0.0.1:8000/proyectos/";
    axios.get(proyectos).then(data => {
      this.ListaProyectos = data.data;
    });

  }
}
</script>

<style scoped>
.align-right {
  float: right;
}
</style>