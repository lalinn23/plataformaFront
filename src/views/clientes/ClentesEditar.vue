<template>
    <div>
      <HeaderCompo />
      <div class="container">
        <div class="row mt-5">
          <div class="col-md-6 offset-md-3">
            <div class="card shadow">
              <div class="card-body text-left"> <!-- Aplicamos text-left aquí -->
                <h2 class="card-title">Actualizar Cliente</h2>
                <br>
                <form>
                  <div class="form-group ">
                    <label for="nombre">Nombre</label>
                    <input type="text" class="form-control" id="nombre" placeholder="Ingrese su nombre" v-model="form.nombre">
                  </div>
                  <br>
                  <div class="form-group">
                    <button type="buroton" class="btn btn-primary" v-on:click="editar()">Actualizar</button>
                    <button type="buroton" class="btn btn-danger">Eliminar</button>
                    <button type="buroton" class="btn btn-success">Atras</button>

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
    name: "ClentesEditar",
    components:{
        HeaderCompo
    },
    data:function(){
        return{
            form:{
                "id":"",
                "nombre" : "",
            }
        }
    },
    methods:{
        editar(){
            axios.put("http://127.0.0.1:8000/api/cliente/clientes/", this.form.id)
            .then( data => {
                console.log(data);
            })
        }
    },
    mounted:function(){
        this.form.id = this.$route.params.id;
        //console.log(this.id)
        axios.get("http://127.0.0.1:8000/api/cliente/clientes/" + this.form.id)
        .then( data => {
            //console.log(data);
            this.form.nombre = data.data.nombreC;
            console.log(this.form);
        })
    }

}
</script>

<style scoped>
.left{
    text-align: left;
}

</style>