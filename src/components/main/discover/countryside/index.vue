<template>
  <div class="countryside-container">
    <h1 class="main_title">la région</h1>
    <h2 class="main_subtitle">Le nord de l'Ardèche</h2>
    <img class="photo balloons" src="./balloons.jpg" alt="plusieurs montgolfières">
    <p class="centered">
      Si vous ne connaissez pas la région et que vous avez un peu de temps cet été, profitez en pour découvrir les alentours.
    </p>
    <div class="patchwork-container">
      <img class="photo dance" src="./dance.jpg" alt="danse autour d'une vieille montgolfière">
      <img class="photo accrobranche" src="./accrobranche.jpg" alt="accrobranche">
      <img class="photo ardeche" src="./ardeche.jpg" alt="vue d'Ardèche">
      <div class="text annonay">
        <h1>Les frères Montgolfiers</h1>
        <h2>Annonay</h2>
        <p>
          Les inventeurs de la montgolfière viennent d'Annonay, tout comme les créateurs du papier Canson. Vous comprenez maintenant pourquoi le logo Canson est une montgolfière&nbsp;!<br><br>
          Pour les aventuriers qui voudraient prendre un peu de hauteur, de nombreux voyages en montgolfière sont organisés dans la région. Une autre vision de l'Ardèche à ne pas manquer.
        </p>
      </div>
      <div class="text gorges">
        <h1>Le grand air</h1>
        <h2>Gorges et montagnes</h2>
        <p>
          Pour les sportifs, l'Ardèche est un merveilleux terrain d'escalade. À proximité de Satillieu, on compte pas moins de six sites, dont la <a href="http://www.yadugaz07.com/escalade-villevocance.php">Mer de Glace</a> où l'on grimpe le long des ruisseaux et des cascades. Il y a également un parc d'accrobranche dans les environs et plein de circuits pour vélo et la randonnée.<br><br>
          Autre sortie dépaysante, le <a href="http://www.safari-peaugres.com/">Safari de Peaugres</a>. Amis des animaux, profitez-en&nbsp;!
        </p>
      </div>
    </div>
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

.relative {
  position: relative;
}

.centered {
  text-align: center;
}

.patchwork-container {
  width: 100%;
  height: 750px;
  position: relative;
  margin-top: 50px;
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

.text {
  position: absolute;
  box-sizing: border-box;
}
.text p {
  line-height: 1.3em;
}
.text h1 {
  font-family: AvenirNext;
  color: var(--dark-blue);
  font-size: 20px;
}
.text h2 {
  font-family: PlayFair;
  color: var(--light-blue);
  font-size: 20px;
  font-weight: normal;
  text-transform: none;
  margin-top: -10px;
}

a {
  color: var(--dark-blue);
  text-decoration: none;
  font-weight: bold;
}

.balloons {
  position: relative;
  width: 640px;
}

.annonay {
  position: absolute;
  top: 0;
  left: -40px;
  width: 350px;
}

.dance {
  position: absolute;
  top: 0;
  right: -80px;
  width: 350px;
}

.accrobranche {
  position: absolute;
  top: 350px;
  left: -80px;
  width: 450px;
}

.ardeche {
  position: absolute;
  top: 450px;
  left: -40px;
  width: 360px;
}

.gorges {
  position: absolute;
  top: 340px;
  right: -40px;
  width: 270px;
}

</style>
