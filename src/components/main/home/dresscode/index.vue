<template>
  <div class="dresscode-container">
    <img class="photo singing" alt="Singing in the rain" src="./singing_in_the_rain.jpg">
    <img class="photo hulot" alt="Monsieur Hulot" src="./hulot.png">
    <img class="photo new-look" alt="Coupe femme année 50" src="./new_look.jpg">
    <img class="photo audrey" alt="Audrey Hepburn robe fuseau noire" src="./audrey.jpg">
    <img class="photo dancing" alt="Pas de danse" src="./3dancing.png">
    <div class="text">
      <h1>Dress code conseillé</h1>
      <p>
        Si le coeur vous en dit, inspirez-vous de la mode des années 50&nbsp; et sortez vos plus belles tenues&nbsp;!<br>
        Pour les hommes&nbsp;: chapeau, veston, bretelles...<br>
        Pour les femmes&nbsp;: <i>tea length</i>, gants, robe de cocktail...<br>
        Et quoi de plus mignon qu'un enfant costumé&nbsp;?
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'dresscode',
  components: { },
  data() {
    return {};
  },
};
</script>

<style scoped>
:root {
}

.dresscode-container {
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

.text {
  position: absolute;
  top: 300px;
  left: 30px;
  width: 400px;
}

h1 {
  font-family: AvenirNext;
  color: var(--dark-blue);
  font-size: 20px;
}

p {
  line-height: 1.3em;
  color: var(--dark-blue);
}

.singing {
  width: 400px;
  top: 0;
  left: 0;
}

.hulot {
  width: 100px;
  top: 30px;
  left: 350px;
  box-shadow: 0 3px 4px 0 var(--shadow-black);
}

.new-look {
  width: 270px;
  top: 100px;
  right: 0;
}

.audrey {
  width: 250px;
  top: 508px;
  left: 30px;
}

.dancing {
  width: 300px;
  top: 570px;
  left: 230px;
  box-shadow: 0 3px 4px 0 var(--shadow-black);
}
</style>
