<template>
  <div class="photos-container">
    <h1 class="main_title">À venir&nbsp;!</h1>
    <h2 class="main_subtitle">Patience...</h2>
    <p class="centered">
      Nous vous proposerons une solution centralisée pour nous envoyer toutes vos photos. Cette page sera mise à jour peu après la cérémonie.
    </p>
  </div>
</template>

<script>

export default {
  name: 'photos',
  components: { },
  data() {
    return {};
  },
};
</script>

<style scoped>

.photos-container {
  position: relative;
  box-sizing: border-box;
  padding: 20px 80px;
  width: 800px;
  margin: auto;
  margin-top: 50px;
  background-color: var(--white);
  background-image: url(../../../assets/noisy-grid.png);
  box-shadow: 0 2px 4px 0 var(--shadow-black);
  z-index: 1;
}

h1.main_title {
  font-family: Playfair;
  color: var(--blue);
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 50px;
  position: relative;
  z-index: 1;
}

h1.main_title:before {
  content: "";
  position: absolute;
  left: calc(50% - 100px);
  bottom: -35px;
  width: 200px;
  height: 3px;
  border-bottom: 2px outset var(--dark-blue);
}

h2.main_subtitle {
  margin-top: 70px;
  font-family: AvenirNext;
  font-weight: bold;
  text-align: center;
  color: var(--dark-blue);
}

p {
  line-height: 1.3em;
  color: var(--dark-blue);
}

a {
  color: var(--dark-blue);
  text-decoration: none;
  font-weight: bold;
}
</style>
