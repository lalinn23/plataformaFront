<template>
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item href="/actividadView">Administrador de reportes</b-nav-item>
  
          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown text="Menu" right>
            <b-dropdown-item href="/actividadView">Actividades</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        
        <!-- Div para alinear a la derecha -->
        <div class="ml-auto">
          
  
          <!-- Botón de cerrar sesión -->
          <b-navbar-nav>
            <b-nav-item href="#" @click="logout">Cerrar Sesión</b-nav-item>
          </b-navbar-nav>
        </div>
      </b-navbar>
      <br><br>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        currentUser: null
      };
    },
    mounted() {
      axios.get('http://127.0.0.1:8000/users/')
        .then(response => {
          this.currentUser = response.data;
        })
        .catch(error => {
          console.error('Error al obtener el usuario actual:', error);
        });
    },
    methods: {
      logout() {
        axios.post('http://127.0.0.1:8000/logout/')
          .then(response => {
            console.log(response);
            if (response.status === 200) {
              console.log("Sesión cerrada correctamente");
              // Redireccionar a la página de inicio de sesión o a cualquier otra página deseada
              this.$router.push('/');
            } else {
              console.error("Error al cerrar sesión");
              // Manejar el error de cierre de sesión adecuadamente
            }
          })
          .catch(error => {
            console.error('Error al cerrar sesión:', error);
            // Manejar el error de cierre de sesión adecuadamente
          });
      }
    }
  }
  </script>
  
  <style>
  /* Estilos si es necesario */
  </style>
  