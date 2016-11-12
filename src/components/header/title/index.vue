<template>
  <div class="header-title-container">
    title
  </div>
</template>

<script>
export default {
  name: 'header-title',
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
:root {
}

.header-title-container {
  position: absolute;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100%;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.1); /*tmp*/
  z-index: 2;
}
</style>
