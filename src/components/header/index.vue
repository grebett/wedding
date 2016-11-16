<template>
  <div class="header-container">
    <header-menu></header-menu>
    <header-title v-bind:scale='1.4' v-bind:y='60'></header-title>
  </div>
</template>

<script>
import HeaderMenu from './menu';
import HeaderTitle from './title';

export default {
  name: 'app-header',
  components: { HeaderMenu, HeaderTitle },
  data() {
    return {};
  },
};
</script>

<style scoped>
:root {
}

.header-container {
  position: fixed;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100%;
  height: 200px;
  box-shadow: 0 10px 20px 2px var(--shadow-black);
}
</style>
