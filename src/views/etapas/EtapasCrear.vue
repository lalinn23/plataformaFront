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
                   <label for="nombreE">Nombre</label>
                   <input type="text" class="form-control" id="nombreE" placeholder="Ingrese la etapa" v-model="form.nombreE">
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