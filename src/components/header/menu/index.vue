<template>
  <div class="header-menu-container">
    <ul>
      <!-- Todo: bold the selected menu -->
      <li><router-link to="/accueil">Accueil</router-link></li>
      <li><router-link to="/programme">Programme</router-link></li>
      <li><router-link to="/découvrir">Découverte</router-link></li>
      <li><router-link to="/organisation">Organisation</router-link></li>
      <li><router-link to="/photos">Photos</router-link></li>
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
  font-family: AvenirNext, sans-serif;
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
