<template>
  <div>
    <HeaderUser />
    <h1 class="titulo">Bitacora De <span class="resaltado">Actividades</span></h1>

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
              <th scope="col">Proyecto</th>
              <th scope="col">Actividad</th>
              <th scope="col">Fase</th>
              <th scope="col">Etapa</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Horas</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="actividad in actividadesPaginadas" :key="actividad.id" v-on:click="editar(actividad.id)">
              <th scope="row">{{ actividad.id }}</th>
              <td>{{ actividad.lider }}</td>
              <td>{{ actividad.user ? actividad.user.username : 'N/A' }}</td>
              <td>{{ actividad.created_at }}</td>
              <td>{{ actividad.proyecto ? actividad.proyecto.nombreP : 'N/A' }}</td>
              <td>{{ actividad.actividad }}</td>
              <td>{{ actividad.fase ? actividad.fase.nombreF : 'N/A' }}</td>
              <td>{{ actividad.etapa ? actividad.etapa.nombreE : 'N/A' }}</td>
              <td>{{ actividad.descripcion }}</td>
              <td>{{ actividad.hora }}</td>
            </tr>
            <tr>
              <th colspan="9" class="text-end">Total Horas:</th>
              <td>{{ totalHoras }}</td>
            </tr>
          </tbody>
        </table>
        <!-- Paginación -->
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-end">
            <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
              <a class="page-link" @click="prevPage()">Previous</a>
            </li>
            <li v-for="pageNumber in totalPages" :key="pageNumber" class="page-item" :class="{ 'active': pageNumber === currentPage }">
              <a class="page-link" @click="changePage(pageNumber)">{{ pageNumber }}</a>
            </li>
            <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
              <a class="page-link" @click="nextPage()">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderUser from '@/components/HeaderUser.vue';
import axios from 'axios';

export default {
  name: "PanelView",
  data() {
    return {
      actividades: [],
      totalHoras: 0,
      currentPage: 1,
      pageSize: 8,
      orderBy: 'created_at', // Cambiado a ordenar por fecha
    };
  },
  components: {
    HeaderUser,
  },
  mounted() {
    this.fetchProyectos();
  },
  computed: {
    actividadesPaginadas() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      return this.actividades.slice(startIndex, startIndex + this.pageSize);
    },
    totalPages() {
      return Math.ceil(this.actividades.length / this.pageSize);
    },
  },
  methods: {
    editar(id){
      this.$router.push('/actividadEditar/' + id);
    },
    crear() {
      this.$router.push('/actividadCrear');
    },
    fetchProyectos() {
      axios.get('http://127.0.0.1:8000/api/actividad/', {
        params: {
          page: this.currentPage,
          pageSize: this.pageSize,
          orderBy: this.orderBy, // Enviar el parámetro de orden
        }
      })
      .then(response => {
        // Ordenar las actividades por fecha antes de asignarlas
        this.actividades = response.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        this.totalHoras = this.calcularTotalHoras(response.data);
      })
      .catch(error => {
        console.error('Error al obtener proyectos: ', error);
      });
    },
    calcularTotalHoras(actividades) {
      return actividades.reduce((total, actividad) => total + parseFloat(actividad.hora), 0);
    },
    changePage(pageNumber) {
      this.currentPage = pageNumber;
      this.fetchProyectos();
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchProyectos();
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchProyectos();
      }
    },
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
</style>
