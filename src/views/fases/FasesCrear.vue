<template>
  <div>
    <HeaderCompo />
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-6 offset-md-3">
          <div class="card shadow" style="width: 453.79px; height: 333.26px;">
            <div class="card-body text-left">
              <h1 class="card-title">Agregar <span class="resaltado">Fase</span></h1>
              <br>
              <form>
                <div class="form-group ">
                  <label for="nombreF">Nombre</label>
                  <input type="text" class="form-control" id="nombreF" placeholder="Nombre de la fase" required
                    v-model="form.nombreF">
                </div>
                <br>
                <div class="d-grid gap-2 mb-2">
                  <button type="button" class="btn btn-primary" v-on:click="crear()">Crear</button>
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
import HeaderCompo from '@/components/HeaderCompo.vue'
import axios from 'axios';
export default {
  name: 'ClientesCrear.vue',
  data: function () {
    return {
      form: {

        "nombreF": ""
      }
    };
  },
  components: {
    HeaderCompo,
  },
  methods: {
    crear() {
      axios.post("http://127.0.0.1:8000/api/fase/fases/", this.form)
        .then(data => {
          console.log(data);
          alert('Se ha agregado una nueva Fase');
          //this.$router.push("/FasesView");
        }).catch(e => {
          console.log(e);
          alert('Error al Agregar la Fase');
        });

    },
    salir() {
      this.$router.push("/FasesView");
    }

  }

}
</script>

<style scoped>
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

.separado {
  margin-right: 20px;
  /* Ajusta el margen derecho para separar los botones */
  margin-bottom: 10px;
}
</style>