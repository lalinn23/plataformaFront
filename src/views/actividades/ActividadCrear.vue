<template>
<div>
  <HeaderCompo/>

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-body">
            <h2 class="text-center mb-4">Crear Nueva Actividad</h2>
            <form @submit.prevent="crearActividad">

              <div class="mb-3" style="text-align: left;">
                <label for="lider" class="form-label fw-normal" style="color: black;">Nombre del Lider:</label>
                <input type="text" id="lider" v-model="lider" class="form-control" placeholder="Nombre del Lider">
              </div>

              <div class="mb-3" style="text-align: left;">
                <label for="user" class="form-label fw-normal" style="color: black;">Nombre del consultor:</label>
                <!-- <input type="text" id="user" v-model="user" class="form-control" placeholder="Nombre del consultor"> -->
                <select v-model="usuarioSeleccionado" class="form-select">
                  <option v-for="usuario in users" :key="usuario.id" :value="usuario.id">{{ usuario.username }}</option>
                </select>
              </div>

              <div class="mb-3" style="text-align: left;">
                <label for="proyecto" class="form-label fw-normal" style="color: black;">Proyecto:</label>
                <select v-model="proyectoSeleccionado" class="form-select">
                  <option v-for="proyecto in proyectos" :key="proyecto.id" :value="proyecto.id">{{ proyecto.nombreP }}</option>
                </select>
              </div>

              <div class="mb-3" style="text-align: left;">
                <label for="actividad" class="form-label fw-normal" style="color: black;">Actividad:</label>
                <input type="text" id="actividad" v-model="actividad" class="form-control" placeholder="Nombre de la actividad">
              </div>

              <div class="mb-3" style="text-align: left;">
                <label for="fase" class="form-label fw-normal" style="color: black;">Fase:</label>
                <select v-model="faseSeleccionada" class="form-select">
                  <option v-for="fase in fases" :key="fase.id" :value="fase.id">{{ fase.nombreF }}</option>
                </select>
              </div>

              <div class="mb-3" style="text-align: left;">
                <label for="etapa" class="form-label fw-normal" style="color: black;">Etapa:</label>
                <select v-model="etapaSeleccionada" class="form-select">
                  <option v-for="etapa in etapas" :key="etapa.id" :value="etapa.id">{{ etapa.nombreE }}</option>
                </select>
              </div>

              <div class="mb-3" style="text-align: left;">
                <label for="descripcion" class="form-label fw-normal" style="color: black;">Descripción:</label>
                <textarea class="form-control" id="descripcion" v-model="descripcion" placeholder="Describe la actividad" rows="3"></textarea>
              </div>

              <div class="mb-3" style="text-align: left;">
                <label for="hora" class="form-label fw-normal" style="color: black;">Hora:</label>
                <input type="number" id="hora" v-model="hora" class="form-control" placeholder="Horas dedicadas a la actividad">
              </div>

              <div class="d-grid">
                <button type="submit" class="btn btn-primary">Crear Actividad</button>
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
    name:"PanelView",
    data() {
      return {
        lider: '',
        usuarioSeleccionado: null,
        proyectoSeleccionado: null,
        actividad: '',
        faseSeleccionada: null,
        etapaSeleccionada: null,
        descripcion: '',
        hora: '',
        users: [],
        proyectos: [],
        fases: [],
        etapas: []
      };
    },
    components:{
      HeaderCompo,
    },
    mounted() {
      this.fetchUsers();
      this.fetchProyectos();
      this.fetchFases();
      this.fetchEtapas();
    },
    methods: {
      fetchUsers(){
        axios.get('http://127.0.0.1:8000/users/')
          .then(response =>{
            this.users = response.data;
          })
          .catch((error) => {
            console.log('Error al obtener proyectos: ',error);
          });
      },
      fetchProyectos() {
        axios.get('http://127.0.0.1:8000/api/proyectos/')
          .then(response => {
            this.proyectos = response.data;
          })
          .catch(error => {
            console.error('Error al obtener proyectos: ', error);
          });
      },
      fetchFases() {
        axios.get('http://127.0.0.1:8000/api/fase/fases/')
          .then(response => {
            this.fases = response.data;
          })
          .catch(error => {
            console.error('Error al obtener fases: ', error);
          });
      },
      fetchEtapas() {
        axios.get('http://127.0.0.1:8000/api/etapa/etapas/')
          .then(response => {
            this.etapas = response.data;
          })
          .catch(error => {
            console.error('Error al obtener etapas: ', error);
          });
      },
      crearActividad() {
        const actividad = {
          lider: this.lider,
          user_id: this.usuarioSeleccionado,
          proyecto_id: this.proyectoSeleccionado,
          actividad: this.actividad,
          fase_id: this.faseSeleccionada,
          etapa_id: this.etapaSeleccionada,
          descripcion: this.descripcion,
          hora: this.hora
        };
        axios.post('http://127.0.0.1:8000/api/actividad/', actividad)
          .then(response => {
            console.log('Actividad creada:', response.data);
            // Aquí puedes redirigir a otra página o hacer cualquier otra acción después de crear la actividad
          })
          .catch(error => {
            console.error('Error al crear actividad: ', error);
          });
      }
    }
  };
  </script>
  

  <style scoped>
  .form-label {
    color: black !important;
    font-weight: normal !important;
  }
</style>