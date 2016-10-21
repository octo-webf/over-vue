<template>
  <div id="app">
    <app-header id="app-header"></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
import AppHeader from './components/AppHeader'
import Bootstrap from 'bootstrap'

export default {
  name: 'app',
  components: {
    AppHeader,
    Hello,
    Bootstrap
  }
}
</script>

<style scoped>
  @import '../node_modules/bootstrap/dist/css/bootstrap.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
