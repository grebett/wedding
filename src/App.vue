<template>
  <div id="app">
    <app-header></app-header>
    <app-main></app-main>
  </div>
</template>

<script>
import AppHeader from './components/header';
import AppMain from './components/main';

export default {
  name: 'app',
  components: {
    AppHeader,
    AppMain,
  },
};
</script>

<style>
html, body {
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-image: url(./assets/festival-flags-garden-party-large.jpg);
  background-size: cover;
  background-position: top;
  background-attachment: fixed;
  margin: auto;
  width: 100%;
  min-height: 100%;
  height: auto;
}
</style>
