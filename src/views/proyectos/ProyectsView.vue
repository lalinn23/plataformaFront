<template>
  <div>
    <HeaderCompo />
    <h1 class="titulo">Listado De <span class="resaltado">Proyectos</span></h1>
    <div class="container">
        <button class="btn btn-success align-right" v-on:click="crear()">Agregar Proyecto</button>
        <br>
        <br>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre del Proyecto</th>
          <th>Cliente</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="proyecto in proyectos" :key="proyecto.id">
          <td>{{ proyecto.id }}</td>
          <td>{{ proyecto.nombreP }}</td>
          <td>{{ proyecto.cliente ? proyecto.cliente.nombreC : 'N/A' }}</td>
          <td>
            <button class="btn btn-danger separado" @click="eliminarProyect(proyecto.id)">Eliminar</button>
            <button class="btn btn-primary separado"   v-on:click="editar(proyecto.id)">Editar</button>
          </td>

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
  name: "PanelView",
  data() {
    return {
      proyectos: []
    };
  },
  components: {
    HeaderCompo,
  },
  mounted() {
    this.fetchProyectos();
  },
  methods: {
    
    crear(){
      this.$router.push('/crearProyects');

    },
    editar(id){
      this.$router.push('/editarProyects/' + id);
    },
    
    eliminarProyect(idProyect){
      if (confirm("¿Estás seguro de que quieres eliminar este proyecto?")) {
          axios.delete(`http://127.0.0.1:8000/api/proyectos/${idProyect}/`)
            .then(response => {
              console.log('Fase eliminada con éxito:', response.data);
              // Actualizar la lista de fases después de eliminar
              this.fetchProyectos();
            })
            .catch(error => {
              console.error('Error al eliminar la fase:', error);
            });
        }
    },

    fetchProyectos() {
      axios.get('http://127.0.0.1:8000/api/proyectos/')
        .then(response => {
          this.proyectos = response.data;
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
/* H1*/
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
    margin-right: 10px; /* Ajusta el margen derecho para separar los botones */
}
</style>