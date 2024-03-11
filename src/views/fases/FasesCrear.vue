<template>
    <div>
       <HeaderCompo />
       <div class="container">
         <div class="row mt-5">
           <div class="col-md-6 offset-md-3">
             <div class="card shadow">
               <div class="card-body text-left">
                 <h2 class="card-title">Agregar Fase</h2>
                 <br>
                 <form>
                   <div class="form-group ">
                     <label for="nombreF">Nombre</label>
                     <input type="text" class="form-control" id="nombreF" placeholder="Ingrese su nombre" v-model="form.nombreF">
                   </div>
                   <br>
                   <div class="form-group">
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
   data:function() {
       return {
           form: {
       
               "nombreF": ""
           }
       };
   },
   components:{
       HeaderCompo,
   },
   methods:{
        crear(){
            axios.post("http://127.0.0.1:8000/api/fase/fases/", this.form)
                .then( data => {
                    console.log(data);
                    alert('Se ha agregado una nueva Fase');
                    //this.$router.push("/FasesView");
                }).catch( e => {
                    console.log(e);
                    alert('Error al Agregar la Fase');
                });
                
        },
        salir(){
            this.$router.push("/FasesView");
        }

    }

}
</script>

<style>

</style>