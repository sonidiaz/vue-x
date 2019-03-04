<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Header/>
    <Lista/>
  </div>
</template>

<script>

import Header from './components/Header'
import Lista from './components/Lista'

export default {
  name: 'app',
  components: {
    Header,
    Lista
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
