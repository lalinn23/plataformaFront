<template>
  <div>
     <HeaderCompo />
     <div class="container">
       <div class="row mt-5">
         <div class="col-md-6 offset-md-3">
           <div class="card shadow">
             <div class="card-body text-left">
               <h2 class="card-title">Crear Etapa</h2>
               <br>
               <form>
                 <div class="form-group ">
                   <label for="nombreE">Nombre</label>
                   <input type="text" class="form-control" id="nombreE" placeholder="Ingrese la etapa" v-model="form.nombreE">
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
export default{
   name: 'ClientesCrear.vue',
   data:function() {
       return {
           form: {
       
               "nombreE": ""
           }
       };
   },
   components:{
       HeaderCompo,
   },
   methods:{
       crear(){
           axios.post("http://127.0.0.1:8000/api/etapa/etapas/", this.form)
           .then(data => {
               console.log(data);
               this.$router.push("/etapasView");
           }).catch( e =>{
             console.log(e);
             console.log("no se pudo guardar la etapa");
           });

       },
       salir(){
           //console.log("salir");
           this.$router.push("/etapasView");

       },
   },

}

</script>

<style scoped>

</style>