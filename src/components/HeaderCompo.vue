<template>
<div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item href="/panelView">Administrador de reportes</b-nav-item>

      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="Menu" right>
          <b-dropdown-item href="/clienteView">Clientes</b-dropdown-item>
          <b-dropdown-item href="#">Proyectos</b-dropdown-item>
          <b-dropdown-item href="#">Actividades</b-dropdown-item>
          <b-dropdown-item href="#">Etapas</b-dropdown-item>
          <b-dropdown-item href="#">Fases</b-dropdown-item>

      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="User" right>
        <b-dropdown-item href="#">Account</b-dropdown-item>
        <b-dropdown-item href="#">Settings</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
  <br><br>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>