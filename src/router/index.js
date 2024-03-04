import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import register from '../views/register.vue'
import PanelView from '../views/PanelView.vue'
import ClientesView from '../views/clientes/ClientesView.vue'
import ClentesEditar from '../views/clientes/ClentesEditar.vue'
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
    path: '/editarCliente/:id',
    name: 'ClentesEditar',
    component: ClentesEditar
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
