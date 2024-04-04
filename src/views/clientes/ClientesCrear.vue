<template>
  <div>
    <HeaderCompo />
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-6 offset-md-3">
          <div class="card shadow" style="width: 453.79px; height: 333.26px;">
            <div class="card-body text-left">
              <h1 class="card-title">Agregar <span class="resaltado">Cliente</span></h1>
              <br>
              <form>
                <div class="form-group ">
                  <label for="nombreC">Nombre</label>
                  <input type="text" class="form-control" id="nombreC" placeholder="Nombre del cliente" required
                    v-model="form.nombreC">
                </div>
                
                <br>
                <div class="d-grid gap-2 mb-2">
                    <button type="button" class="btn btn-primary  separado" v-on:click="crear()">Crear</button>
                    <button type="button" class="btn btn-success separado" v-on:click="salir()">Atrás</button>
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
import HeaderCompo from '@/components/HeaderCompo.vue'
import axios from 'axios';
export default {
  name: 'ClientesCrear.vue',
  data: function () {
    return {
      form: {

        "nombreC": ""
      }
    };
  },
  components: {
    HeaderCompo,
  },
  methods: {
    crear() {
      axios.post("http://127.0.0.1:8000/api/cliente/clientes/", this.form)
        .then(data => {
          console.log(data);
          this.$router.push("/clienteView");
        }).catch(e => {
          console.log(e);
          console.log("no se pudo guardar el cliente");
        });

    },
    salir() {
      //console.log("salir");
      this.$router.push("/clienteView");

    },
  },

}

</script>

<style scoped>
h1{
  font-family: fantasy;
}
.titulo {
    color: black; /* Color negro para la palabra "Lista" */
}

.resaltado {
  color: #2bbb2f; /* Color verde para la palabra "clientes" */
}
.separado {
    margin-right: 20px; /* Ajusta el margen derecho para separar los botones */
    margin-bottom: 10px;
}

</style>