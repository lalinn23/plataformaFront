<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<style>
#app {
 /* font-family: Avenir, Helvetica, Arial, sans-serif;*/
  height: 100vh; /* Establece la altura al 100% de la altura de la ventana */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #f9fff9;
  background: rgba(130, 160, 130, 0.1);
}

h1 {
  text-align: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
