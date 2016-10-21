import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Hello from './components/Hello'
import About from './components/About'
import Contact from './components/Contact'

/* eslint-disable no-new */

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: '/', component: Hello},
    {path: '/about', component: About},
    {path: '/contact', component: Contact}
  ]
})

new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: {App}
})
