<template>
  <div class="countryside-container">
    <h1>la région</h1>
    <h2>Le nord de l'Ardèche</h2>
  </div>
</template>

<script>

export default {
  name: 'countryside',
  components: { },
  data() {
    return {};
  },
};
</script>

<style scoped>
:root {
}

.countryside-container {
  position: relative;
  box-sizing: border-box;
  padding: 20px 80px;
  height: 800px;
  width: 800px;
  margin: auto;
  margin-top: 50px;
  background-color: var(--white);
  background-image: url(../../../../assets/noisy-grid.png);
  box-shadow: 0 2px 4px 0 var(--shadow-black);
  z-index: 1;
}

.photo {
  border: 3px solid var(--white);
  position: absolute;
  box-sizing: border-box;
  box-shadow: 0 2px 4px 0 var(--shadow-black);
}

h1 {
  font-family: Playfair;
  color: var(--blue);
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 50px;
  position: relative;
  z-index: 1;
}

h1:before {
  content: "";
  position: absolute;
  left: calc(50% - 100px);
  bottom: -35px;
  width: 200px;
  height: 3px;
  border-bottom: 2px outset var(--dark-blue);
}

h2 {
  margin-top: 70px;
  font-family: AvenirNext;
  font-weight: bold;
  text-align: center;
  color: var(--dark-blue);
}
</style>
