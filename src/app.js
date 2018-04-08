import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

Vue.use(VueRouter)

import Contacts from './components/Contacts.vue'
import Music from './components/Music.vue'

const router = new VueRouter({
  routes: [
    { path: '/', component: App },
    { path: '/contacts', component: Contacts },
    { path: '/music', component: Music }
  ]
})

const app = new Vue({
  router
}).$mount('#app')
