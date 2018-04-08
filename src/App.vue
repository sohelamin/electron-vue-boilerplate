<template>
  <div>
    <h1>{{ msg }}</h1>
    <clock></clock>
  </div>
</template>

<script>
  import Clock from './components/Clock.vue'

  export default {
    data () {
      return {
        msg: 'Welcome to Electron & Vue.js World!'
      }
    },
    components: {
      Clock
    }
  }
</script>

<style>
  .container {
    text-align: center;
    margin: 0 auto;
    padding-top: 70px;
  }
</style>
