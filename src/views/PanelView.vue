<template>
  <div>
    <HeaderCompo/>
    <h1>Usuarios</h1>
    <div class="container">
        <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="cliente in ListaClientes" :key="cliente.id">
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
    mounted: function(){
      let clientes = "http://127.0.0.1:8000/api/cliente/clientes/";
       // console.log(data);
       axios.get(clientes).then( data =>{
        this.ListaClientes = data.data;
      });
    }
}
</script>

<style lang="stylus" scoped>

</style>