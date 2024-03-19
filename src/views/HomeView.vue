<template>
  <div class="home">
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <!-- Tabs Titles -->

        <!-- Icon -->
        <div class="fadeIn first">
          <img src="@/assets/data2.png" id="icon" alt="User Icon" />
        </div>

        <!-- Login Form -->
        <form v-on:submit.prevent="login" class="mt-4">
          <div class="form-group">
            <input type="email" id="login" class="form-control fadeIn second" name="login" placeholder="Email" v-model="email">
          </div>
          <div class="form-group">
            <input type="password" id="password" class="form-control fadeIn third" name="password" placeholder="Password" v-model="password">
          </div>
          <button type="submit" class="btn btn-primary btn-block fadeIn fourth">Log In</button>
        </form>

        <!-- para mostrar el error -->
        <div class="alert alert-danger mt-3" role="alert" v-if="error">
          {{ error_msg }}
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomeView',
  data() {
    return {
      email: "",
      password: "",
      error: false,
      error_msg: "",
    }
  },
  methods: {
    login() {
      let json = {
        "email": this.email,
        "password": this.password
      };
      axios.post('http://127.0.0.1:8000/login/', json)
        .then(data => {
          console.log(data); 
          if (data.status === 200) {
            console.log("Inicio de sesión correcto");
            this.$router.push('/panelView');
            // Aquí deberías manejar la respuesta del servidor, por ejemplo,
            // guardar el token de acceso en el almacenamiento local y redirigir
            // al usuario a otra página.
          } else {
            this.error = true;
            this.error_msg = data.response.data.error; // Cambiar a la respuesta del error adecuada
          }
        })
        .catch(error => {
          console.error('Error durante la solicitud:', error);
          this.error = true;
          this.error_msg = "Error durante la solicitud";
        });
    }
  }
}
</script>
