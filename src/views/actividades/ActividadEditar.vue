<template>
    <div>
      <HeaderUser />
  
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card shadow">
              <div class="card-body">
                <h2 class="text-center mb-4">Actualizar Actividad</h2>
                <form @submit.prevent="actualizarActividad">
  
                  <div class="mb-3" style="text-align: left;">
                    <label for="lider" class="form-label fw-normal" style="color: black;">Nombre del Lider:</label>
                    <input type="text" id="lider" name="lider" v-model="form.lider" class="form-control" placeholder="Nombre del Lider"
                      required>
                  </div>
  
                  <div class="mb-3" style="text-align: left;">
                    <label for="user" class="form-label fw-normal" style="color: black;">Nombre del consultor:</label>
                    <select v-model="form.usuarioSeleccionado" id="usuario" name="usuario" class="form-select">
                      <option v-for="usuario in users" :key="usuario.id" :value="usuario.id">{{ usuario.username }}
                      </option>
                    </select>
                  </div>
  
                  <div class="mb-3" style="text-align: left;">
                    <label for="proyecto" class="form-label fw-normal" style="color: black;">Proyecto:</label>
                    <select v-model="form.proyectoSeleccionado" id="proyecto" name="proyecto" class="form-select">
                      <option v-for="proyecto in proyectos" :key="proyecto.id" :value="proyecto.id">{{ proyecto.nombreP }}
                      </option>
                    </select>
                  </div>
  
                  <div class="mb-3" style="text-align: left;">
                    <label for="actividad" class="form-label fw-normal" style="color: black;">Actividad:</label>
                    <input type="text" id="actividad" name="actividad" v-model="form.actividad" class="form-control"
                      placeholder="Nombre de la actividad" required>
                  </div>
  
                  <div class="mb-3" style="text-align: left;">
                    <label for="fase" class="form-label fw-normal" style="color: black;">Fase:</label>
                    <select v-model="form.faseSeleccionada" id="fase" name="fase" class="form-select">
                      <option v-for="fase in fases" :key="fase.id" :value="fase.id">{{ fase.nombreF }}</option>
                    </select>
                  </div>
  
                  <div class="mb-3" style="text-align: left;">
                    <label for="etapa" class="form-label fw-normal" style="color: black;">Etapa:</label>
                    <select v-model="form.etapaSeleccionada" id="etapa" name="etapa" class="form-select">
                      <option v-for="etapa in etapas" :key="etapa.id" :value="etapa.id">{{ etapa.nombreE }}</option>
                    </select>
                  </div>
  
                  <div class="mb-3" style="text-align: left;">
                    <label for="descripcion" class="form-label fw-normal" style="color: black;">Descripción:</label>
                    <textarea class="form-control" id="descripcion" name="descripcion" v-model="form.descripcion"
                      placeholder="Describe la actividad" rows="3" required></textarea>
                  </div>
  
                  <div class="mb-3" style="text-align: left;">
                    <label for="hora" class="form-label fw-normal" style="color: black;">Hora:</label>
                    <input type="number" id="hora" name="hora" v-model="form.hora" class="form-control"
                      placeholder="Horas dedicadas a la actividad" required>
                  </div>
                  <br>
                  <div class="d-grid">
                    <button type="submit" class="btn btn-primary">Actualizar Actividad</button>
                  </div>
                  <br>
                  <div class="d-grid">
                    <button type="button" class="btn btn-success" @click="salir">Atrás</button>
                  </div>
                  <br>
                  <br>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import HeaderUser from '@/components/HeaderUser.vue';
  import axios from 'axios';
  
  export default {
    name: "PanelView",
    components: {
      HeaderUser,
    },
    data() {
      return {
        form:{
            lider: '',
            usuarioSeleccionado: null,
            proyectoSeleccionado: null,
            actividad: '',
            faseSeleccionada: null,
            etapaSeleccionada: null,
            descripcion: '',
            hora: '',
        },
        idActividad: null,
        users: [],
        proyectos: [],
        fases: [],
        etapas: []
      };
    },
    
    mounted() {
      this.obtenerDatosActividad();
      this.fetchUsers();
      this.fetchProyectos();
      this.fetchFases();
      this.fetchEtapas();
    },
    methods: {
      fetchUsers() {
        axios.get('http://127.0.0.1:8000/users/')
          .then(response => {
            this.users = response.data;
          })
          .catch((error) => {
            console.log('Error al obtener proyectos: ', error);
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
      salir() {
        this.$router.push("/actividadView");
      },
      obtenerDatosActividad() {
        this.idActividad = this.$route.params.id;
        axios.get(`http://127.0.0.1:8000/api/actividad/${this.idActividad}/`)
          .then(response => {
            const actividad = response.data;
            this.form.lider = actividad.lider;
            this.form.usuarioSeleccionado = actividad.user.id;
            this.form.proyectoSeleccionado = actividad.proyecto.id;
            this.form.actividad = actividad.actividad;
            this.form.faseSeleccionada = actividad.fase.id;
            this.form.etapaSeleccionada = actividad.etapa.id;
            this.form.descripcion = actividad.descripcion;
            this.form.hora = actividad.hora;
          })
          .catch(error => {
            console.error('Error al obtener los datos de la actividad:', error);
          });
      },
      actualizarActividad() {
        const actividad = {
          lider: this.form.lider,
          user_id: this.form.usuarioSeleccionado,
          proyecto_id: this.form.proyectoSeleccionado,
          actividad: this.form.actividad,
          fase_id: this.form.faseSeleccionada,
          etapa_id: this.form.etapaSeleccionada,
          descripcion: this.form.descripcion,
          hora: this.form.hora
        };
  
        axios.patch(`http://127.0.0.1:8000/api/actividad/${this.idActividad}/`, actividad)
          .then(response => {
            console.log('Actividad actualizada con éxito:', response.data);
            this.$router.push("/actividadView");
          })
          .catch(error => {
            console.error('Error al actualizar la actividad:', error);
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
  