<template>
  <!-- Registration Form with Shadow -->
  <div class="bg-light py-3 py-md-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
          <div class="card border border-light-subtle rounded-3 shadow">
            <!-- Agregué la clase "shadow" para aplicar sombreado -->
            <div class="card-body p-3 p-md-4 p-xl-5">
              <div class="text-center mb-3">
                <a href="#!">
                  <img src="../assets/data2.png" alt="Data Logo" width="350" height="150">
                </a>
              </div>
              <h2 class="fs-6 fw-normal text-center text-secondary mb-4">Registro</h2>
              <form v-on:submit.prevent="login">
                <div class="row gy-2 overflow-hidden">
  
                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" name="username" id="username" placeholder="Username" v-model="username" required>
                      <label for="username" class="form-label">Nombre</label>
                    </div>
                  </div>
  
                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" name="last_name" id="last_name" placeholder="Last Name" v-model="last_name" required>
                      <label for="last_name" class="form-label">Apellidos</label>
                    </div>
                  </div>
  
                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com" v-model="email" required>
                      <label for="email" class="form-label">Email</label>
                    </div>
                  </div>
  
                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" name="puesto" id="puesto" placeholder="Puesto" v-model="puesto" required>
                      <label for="puesto" class="form-label">Puesto</label>
                    </div>
                  </div>
  
                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <input type="password" class="form-control" name="password" id="password"  placeholder="Password" v-model="password" required>
                      <label for="password" class="form-label">Password</label>
                    </div>
                  </div>
  
                  <!-- para mostrar el error -->
                  <div class="alert alert-danger" role="alert" v-if="error">
                      {{ error_msg }}
                  </div>
  
                  <div class="col-12">
                    <div class="d-grid my-3">
                      <button class="btn btn-primary btn-lg" type="submit" value="Crear">Sign up</button>
                    </div>
                  </div>
  
                  <div class="col-12">
                    <p class="m-0 text-secondary text-center">Already have an account? <a href="/" class="link-primary text-decoration-none">Sign in</a></p>
                  </div>
  
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
import axios from 'axios';
export default {
  name: 'HomeView',
  data: function() {
    return {
      username: "",
      last_name:"",
      email:"",
      puesto:"",
      password:"",
      error: false,
      error_msg:"",
    }
  },
  methods:{
    login(){
      let json = {
        "username": this.username,
        "last_name":this.last_name,
        "email": this.email,
        "puesto": this.puesto,
        "password":this.password
      };
      axios.post('http://127.0.0.1:8000/register/', json)
      .then(data => {
        console.log(data); // para ver si muestra datos
        if(data.status == 201){
          console.log("Usuario creado correctamente");
          this.$router.push('/');
        }else{
          console.log("Ya existe el usuario");
        }
      });
    }
  }
}
</script>

<style scoped>
/* Estilos adicionales existentes */

/* Ajustes para los campos de entrada y etiquetas */
input[type=text],
input[type=email],
input[type=password],
input[type="puesto"],
.form-floating input[type=text],
.form-floating input[type=email],
.form-floating input[type=password],
.form-floating input[type="puesto"] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 0 15px 15px; /* Ajusta el padding para que el texto se alinee a la izquierda */
  text-align: left; /* Alinea el texto a la izquierda */
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 100%; /* Cambia el ancho al 100% para que ocupe todo el contenedor */
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}

/* Ajustes para las etiquetas */
.form-floating label {
  padding: 0 15px; /* Ajusta el padding para que la etiqueta esté alineada a la izquierda */
}

</style>
