<template>
  <div>
    <HeaderCompo />
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-6 offset-md-3">
          <div class="card mt-5 shadow" style="width: 453.79px; height: 380.26px;">
            <div class="card-body text-left">
              <h1 class="card-title">Actualizar <span class="resaltado">Cliente</span></h1>
              
              <br>
              <form>
                <div class="form-group ">
                  <label for="nombreC">Nombre</label>
                  <input type="text" class="form-control" id="nombreC" placeholder="Ingrese su nombre"
                    v-model="form.nombreC">
                </div>
                <br>
                <div class="d-grid gap-2 mb-2" >
                  <button type="button" class="btn btn-primary" v-on:click="editar()">Actualizar</button>
                  <button type="button" class="btn btn-danger" v-on:click="eliminarCliente()">Eliminar</button>
                  <button type="button" class="btn btn-success" v-on:click="salir()">Atras</button>
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
import HeaderCompo from '@/components/HeaderCompo.vue';
import axios from 'axios';

export default {
  name: "ClientesEditar",
  components: {
    HeaderCompo
  },
  data: function () {
    return {
      form: {
        "id": "",
        "nombreC": ""
      }
    };
  },
  methods: {
    editar() {
      axios.patch("http://127.0.0.1:8000/api/cliente/clientes/" + this.form.id + "/", this.form)
        .then(response => {
          console.log(response.data);
          this.$router.push("/clienteView");

        })
        .catch(error => {
          console.error('Error al actualizar los datos:', error);
        });
    },
    salir() {
      this.$router.push("/clienteView");
    },
    eliminarCliente() {
      axios.delete(`http://127.0.0.1:8000/api/cliente/clientes/${this.form.id}/`)
        .then(response => {
          console.log('Cliente eliminado con éxito:', response.data);
          this.$router.push("/clienteView");
        })
        .catch(error => {
          console.error('Error al eliminar el cliente:', error);
        });
    }

  },
  mounted() {
    this.form.id = this.$route.params.id;
    axios.get("http://127.0.0.1:8000/api/cliente/clientes/" + this.form.id)
      .then(data => {
        this.form.nombreC = data.data.nombreC;
        // console.log(this.form);
      })
      .catch(error => {
        console.error('Error al obtener los datos del cliente:', error);
      });
  }
}
</script>

<style scoped>
.left {
  text-align: left;
}

/* H1*/ 
h1{
  font-family: fantasy;
}
.titulo {
    color: black; /* Color negro para la palabra "Lista" */
}

.resaltado {
  color: #2bbb2f; /* Color verde para la palabra "clientes" */
}

</style>
