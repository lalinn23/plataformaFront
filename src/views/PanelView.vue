<template>
  <div>
    <HeaderCompo/>
    <h1>Usuarios</h1>
    <div class="container">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Correo</th>
            <th scope="col">Puesto</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cliente in ListaClientes" :key="cliente.id">
            <th scope="row">{{ cliente.id }}</th>
            <td>{{ cliente.first_name}}</td>
            <td>{{ cliente.last_name}}</td>
            <td>{{ cliente.email}}</td>
            <td>{{ cliente.puesto}}</td>
            <td>
              <button class="btn btn-danger" @click="eliminarUser(cliente.id)">Eliminar</button>
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
  mounted() {
    let clientes = "http://127.0.0.1:8000/users/";
    axios.get(clientes)
      .then(response => {
        this.ListaClientes = response.data;
      })
      .catch(error => {
        console.error('Error al obtener usuarios: ', error);
      });
  },
  methods: {
    eliminarUser(idUsuario) {
      if (confirm("¿Estás seguro de eliminar el usuario?")) {
        axios.delete(`http://127.0.0.1:8000/users/${idUsuario}/`)
          .then(() => {
            console.log('Usuario eliminado con éxito.');
            // Actualizar la lista de usuarios después de eliminar
            this.ListaClientes = this.ListaClientes.filter(cliente => cliente.id !== idUsuario);
          })
          .catch(error => {
            console.error('Error al eliminar usuario: ', error);
          });
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
/* Aquí puedes agregar estilos si los necesitas */
</style>
