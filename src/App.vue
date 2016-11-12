<template>
  <div id="app">
    <app-header></app-header>
  </div>
</template>

<script>
import AppHeader from './components/header';

export default {
  name: 'app',
  components: {
    AppHeader,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: steelblue;
  margin: auto;
  width: 100%;
}
</style>
