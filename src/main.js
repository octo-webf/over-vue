import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import Hello from './components/Hello';
import About from './components/About';
import Contact from './components/Contact';
import PokemonList from './components/PokemonList';

/* eslint-disable no-new */

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes: [
    { path: '/', component: Hello },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/pokemons', component: PokemonList }
  ]
});

new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
});
