const Vue = require('vue')
const VueRouter = require('vue-router')

const App = require('./App.vue')

var Main = Vue.extend({})

Vue.use(VueRouter)

const Contacts = require('./components/Contacts.vue')
const Music = require('./components/Music.vue')

var router = new VueRouter()

router.map({
    '/': {
        component: App
    },
    '/contacts': {
        component: Contacts
    },
    '/music': {
        component: Music
    }
})

router.start(Main, '#app')