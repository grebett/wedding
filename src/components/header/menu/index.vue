<template>
  <div class="header-menu-container">
    <ul>
      <!-- Todo: bold the selected menu -->
      <li><a href="#">Accueil</a></li>
      <li><a href="#">Programme</a></li>
      <li><a href="#">Découverte</a></li>
      <li><a href="#">Organisation</a></li>
      <li><a href="#">Photos</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'header-menu',
  data() {
    return {};
  },
};
</script>

<style scoped>
:root {
  --grey: #9b9b9b;
}

.header-menu-container {
  position: absolute;
  box-sizing: border-box;
  top: 27px;
  right: 34px;
  width: auto;
  height: 19;
  z-index: 3;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  display: inline-block;
  font-family: Avenir, sans-serif;
  font-size: 16px;
  line-height: 19px;
}

li:not(:last-of-type) {
  margin-right: 21px;
}

a {
  text-decoration: none;
  color: var(--grey);
}


</style>
