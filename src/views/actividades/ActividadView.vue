<template>
  <div>
    <HeaderUser/>
    <h1>Lista De Actividades</h1>
    <div class="container">
        <button class="btn btn-success align-right" v-on:click="crear()">Agregar Actividad</button>
        <br>
        <br>
    <div class="container">
        <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Lider</th>
      <th scope="col">Consultor</th>
      <th scope="col">Fecha</th>
      <th scope="col">proyecto</th>
      <th scope="col">Actividad</th>
      <th scope="col">Fase</th>
      <th scope="col">etapa</th>
      <th scope="col">Descripcion</th>
      <th scope="col">Hora</th>

      


    </tr>
  </thead>
  <tbody>
    <tr v-for="actividad in actividades" :key="actividad.id">
      <th scope="row">{{ actividad.id }}</th>
      <td>{{ actividad.lider}}</td>
      <td>{{ actividad.user ? actividad.user.username : 'N/A'}}</td>
      <td>{{ actividad.created_at}}</td>
      <td>{{ actividad.proyecto ? actividad.proyecto.nombreP : 'N/A'}}</td>
      <td>{{ actividad.actividad}}</td>
      <td>{{ actividad.fase ? actividad.fase.nombreF : 'N/A' }}</td>
      <td>{{ actividad.etapa ? actividad.etapa.nombreE : 'N/A' }}</td>
      <td>{{ actividad.descripcion}}</td>
      <td>{{ actividad.hora}}</td>

    </tr>

  </tbody>
</table>
    </div>
  </div>
</div>

</template>

<script>
import HeaderUser from '@/components/HeaderUser.vue';
import axios from 'axios';

export default {
    name:"PanelView",
    data(){
      return {
        actividades: []
      };
    },
    components:{
      HeaderUser,
    },
    mounted(){
     this.fetchProyectos();
    },
    methods: {
      crear(){
      this.$router.push('/actividadCrear');
    },
    fetchProyectos(){
      axios.get('http://127.0.0.1:8000/api/actividad/')
      .then(response =>{
        this.actividades =  response.data;
      })
      .catch(error => {
        console.error('Error al obtener proyectos: ', error);
      });
    }
  }
};
</script>

<style scoped>
.align-right {
  float: right;
}
</style>