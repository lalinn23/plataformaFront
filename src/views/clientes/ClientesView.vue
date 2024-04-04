<template>
  <div>

    <HeaderCompo />
    <h1 class="titulo">LISTADO DE <span class="resaltado">CLIENTES</span></h1>

    <div class="container">
      <button class="btn btn-success align-right" v-on:click="crear()">Nuevo cliente</button>
      <br>
      <br>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cliente in ListaClientes" :key="cliente.id">
            <th scope="row">{{ cliente.id }}</th>
            <td>{{ cliente.nombreC }}</td>
            <td>
              <button class="btn btn-primary" v-on:click="editar(cliente.id)">Editar</button>
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
      ListaClientes: null,
      pagina: 1
    }
  },
  components: {
    HeaderCompo,
  },
  methods: {
    crear() {
      this.$router.push('/crearCliente');
    },

    editar(id) {
      this.$router.push('/editarCliente/' + id);
    }
  },
  mounted: function () {
    let clientes = "http://127.0.0.1:8000/api/cliente/clientes/";
    axios.get(clientes).then(data => {
      this.ListaClientes = data.data;
    });
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
