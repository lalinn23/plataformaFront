<template>
  <div>

    <HeaderCompo/>
    <h1>Lista clientes</h1>

    <div class="container">
      <button class="btn btn-success align-right" v-on:click="crear()">Nuevo cliente</button>

      <br>
        <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="cliente in ListaClientes" :key="cliente.id" v-on:click="editar(cliente.id)">
      <th scope="row">{{ cliente.id }}</th>
      <td>{{ cliente.nombreC}}</td>
    </tr>

  </tbody>
</table>
    </div>
  </div>
</template>

<script>
import HeaderCompo from '@/components/HeaderCompo.vue';
import axios from 'axios';

export default {
    name:"PanelView",
    data(){
      return {
        ListaClientes: null,
        pagina:1
      }
    },
    components:{
        HeaderCompo,
    },
    methods:{
      crear(){
        this.$router.push('/crearCliente');
      },
      editar(id){
        //console.log(id)
        this.$router.push('/editarCliente/' + id);
      }
    },
    mounted: function(){
      let clientes = "http://127.0.0.1:8000/api/cliente/clientes/";
       // console.log(data);
       axios.get(clientes).then( data =>{
        this.ListaClientes = data.data;
      });
    }
}
</script>

<style  scoped>
.align-right {
    float: right;
}

</style>