<template>
  <div class="header-container">
    <header-menu></header-menu>
    <header-title></header-title>
  </div>
</template>

<script>
import HeaderMenu from './menu/';
import HeaderTitle from './title';

export default {
  name: 'app-header',
  components: { HeaderMenu, HeaderTitle },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
:root {
}

.header-container {
  position: absolute;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100%;
  height: 300px;
}
</style>
