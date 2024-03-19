import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import register from '../views/register.vue'
import PanelView from '../views/PanelView.vue'
import ClientesView from '../views/clientes/ClientesView.vue'
import ClentesEditar from '../views/clientes/ClentesEditar.vue'
import ClientesCrear from '../views/clientes/ClientesCrear.vue'
import ProyectsView from '../views/proyectos/ProyectsView.vue'
import ProyectsCrear from '../views/proyectos/ProyectsCrear.vue'
import ProyectsEditar from '../views/proyectos/ProyectsEditar.vue'
import FasesView from '../views/fases/FasesView.vue'
import FasesCrear from '../views/fases/FasesCrear.vue'
import EtapasView from '../views/etapas/EtapasView.vue'
import EtapasCrear from '../views/etapas/EtapasCrear.vue'
import ActividadView from '../views/actividades/ActividadView.vue'
import ActividadCrear from '../views/actividades/ActividadCrear.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/registro',
    name: 'register',
    component: register
  },
                          /* Usuarios */
  {
    path: '/panelView',
    name: 'PanelView',
    component: PanelView
  },
                          /* Clientes */
  {
    path: '/clienteView',
    name: 'ClientesView',
    component: ClientesView
  },
  {
    path: '/crearCliente',
    name: 'CrearCliente',
    component: ClientesCrear
  },
  {
    path: '/editarCliente/:id',
    name: 'ClentesEditar',
    component: ClentesEditar
  },

                        /*Proyectos */
  {
    path: '/proyectView',
    name: 'ProyectsView',
    component: ProyectsView
  },
  {
    path: '/crearProyects',
    name: 'ProyectsCrear',
    component: ProyectsCrear
  },
  {
    path: '/editarProyects/:id',
    name: 'ProyectsEditar',
    component: ProyectsEditar
  },

                        /*Proyectos */
  {
    path: '/FasesView',
    name: 'FasesView',
    component: FasesView
  },
  {
    path: '/crearFases',
    name: 'FasesCrear',
    component: FasesCrear
  },

                            /*Etapas */
  
  {
    path: '/etapasView',
    name: 'EtapasView',
    component: EtapasView
  },
  {
    path: '/etapasCrear',
    name: 'EtapasCrear',
    component: EtapasCrear
  },

  /*Actividades */
  {
    path: '/actividadView',
    name: 'ActividadView',
    component: ActividadView
  },
  {
    path: '/actividadCrear',
    name: 'ActividadCrear',
    component: ActividadCrear
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
