<template>
  <div class="where-container">
    <h1 class="main_title">Nous rejoindre</h1>
    <h2 class="main_subtitle">Itinéraires</h2>

    <iframe width="100% " height="450" frameborder="0" style="border:0"
      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJQSjxYPBt9UcR-a58QHWFJjM&key=AIzaSyAzUJmai0-8yggEngcVfq6npLBkDnJNcZI&language=fr_FR" allowfullscreen>
    </iframe>

    <p class="main-text centered">
      Le château de Pralong se trouve à Satillieu en Ardèche 07920.<br>Dans le village, tournez au niveau du crédit Agricole. Des panneaux vous indiqueront le chemin à suivre.
    </p>

    <div class="row">
      <div class="photo-container">
        <img class="photo" width="100%" height="100%" src="./road.png" alt="Route de montagne">
      </div>
      <div class="text centered padding-right">
        <h1>Trajets </h1>
        <h2>Comment nous rejoindre</h2>
        <p>
          Si vous venez en transport en commun&nbsp;:<br>
          Depuis Lyon, prenez le train jusqu’au Péage de Rousillon. Puis un bus vous emmenera jusqu’à Annonay, puis Satillieu.<br><br>
          Si vous êtes en voiture&nbsp;:<br>
          Comptez environ 1h30 de route depuis Lyon&nbsp;;<br>
          4h30 depuis Limoges&nbsp;;<br>
          5h depuis Paris, Nancy, Orléans&nbsp;;<br>
          8h depuis Saint Malo
        </p>
      </div>
    </div>

    <p class="carpooling-text centered">
      Et si vous faisiez du covoiturage ??<br><br>
      Si vous avez des places disponibles dans vos voitures ou si vous cherchez quelqu’un pour vous emmener, nous vous avons préparer un formulaire ici.
    </p>
  </div>
</template>

<script>

export default {
  name: 'where',
  components: { },
  data() {
    return {};
  },
};
</script>

<style scoped>
:root {
}

.where-container {
  position: relative;
  box-sizing: border-box;
  padding: 20px 80px;
  width: 800px;
  margin: auto;
  margin-top: 50px;
  background-color: var(--white);
  background-image: url(../../../../assets/noisy-grid.png);
  box-shadow: 0 2px 4px 0 var(--shadow-black);
  z-index: 1;
}

.centered {
  text-align: center;
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

iframe,
.main-text {
  margin-bottom: 30px;
}

.row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}

.row h1 {
  font-family: AvenirNext;
  color: var(--dark-blue);
  font-size: 20px;
  text-align: left;
}

.row h2 {
  font-family: PlayFair;
  color: var(--light-blue);
  font-size: 20px;
  font-weight: normal;
  text-transform: none;
  margin-top: -10px;
  text-align: left;
}

.row p {
  line-height: 1.3em;
  color: var(--dark-blue);
  text-align: left;
}

.photo-container {
  width: 300px;
  margin-left: -80px;
}

.photo {
  border: 3px solid var(--white);
  box-sizing: border-box;
  box-shadow: 0 2px 4px 0 var(--shadow-black);
  width: 100%;
}

.text {
  box-sizing: border-box;
  flex: 1;
  padding-left: 60px;
}
.text p {
  line-height: 1.5em;
}

</style>
