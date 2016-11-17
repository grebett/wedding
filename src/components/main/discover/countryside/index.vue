<template>
  <div class="castle-container">
    <h1 class="main_title">la région</h1>
    <h2 class="main_subtitle">Le nord de l’Ardèche</h2>
    <img class="photo balloons" src="./balloons.jpg" alt="plusieurs montgolfières">
    <p class="centered">
      Si vous ne connaissez pas la région et que vous avez un peu de temps cet été profitez en pour découvrir les alentours.
    </p>
    <div class="patchwork-container">
      <img class="photo dance" src="./dance.jpg" alt="danse autour d'une vieille montgolfière">
      <img class="photo accrobranche" src="./accrobranche.jpg" alt="accrobranche">
      <img class="photo ardeche" src="./ardeche.jpg" alt="vue d'Ardèche">
      <div class="text gardens">
        <h1>Les jardins</h1>
        <h2>Cour, jardins et piscine</h2>
        <p>
          La cour où vous serez accueillis et où nous pourrons prendre le petit déjeuner du dimanche.<br><br>
          Les jardins avec vue panoramique sur la vallée seront l’espace fête foraine du mariage et celui des apéritifs. Un coin particulier sera amménagé pour la cérémonie sous les grands pins.<br><br>
          La piscine chauffée, ce sera pour ceux qui reviendront le dimanche ou les téméraires du Samedi soir…
        </p>
      </div>
      <div class="text room">
        <h1>Les salles de réception</h1>
        <h2>Salles des citronniers &amp; des glycines</h2>
        <p>
          La salle des citronniers dans la partie haute de la grange sera le lieu de réception et la piste de danse pour toute la nuit.<br><br>
          La salle des glycines en dessous, est une salle de secours en cas de pluie (peu probable, mais on ne sait jamais) et servira de dortoir pour ceux qui ont apporter leurs matelats ou ceux qui sont trop éprouvés pour repartir en voiture. Attention, personne ne prends les routes étroites et tordues de l’ardèche éméché ! On ne veut pas de drame.
        </p>
      </div>
      <div class="text life">
        <h1>Les lieux de vie</h1>
        <h2>Grande &amp; petite maison</h2>
        <p>
          La grande maison avec ses différents salons, sa grande cuisine et sa salle de billard&nbsp;!<br><br>
          La petite maison et ses quelques chambres.<br><br>
          Le jardin de la petite maison où les campeurs auront la possibilité de planter leurs tentes pour être au plus proche de la nature et des amis !
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'castle',
  components: { },
  data() {
    return {};
  },
};
</script>

<style scoped>
:root {
}

.castle-container {
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
  height: 1200px;
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

.balloons {
  position: relative;
  width: 640px;
}

.dance {
  position: absolute;
  top: 0;
  left: -80px;
  width: 450px;
}

.pool {
  position: absolute;
  top: 130px;
  left: -20px;
  width: 360px;
}

.the-room {
  position: absolute;
  top: 450px;
  right: -80px;
  width: 270px;
}

.living-room {
  position: absolute;
  top: 930px;
  left: -80px;
  width: 385px;
}

.gardens {
  position: absolute;
  top: -10px;
  right: -20px;
  width: 240px;
}

.room {
  position: absolute;
  top: 480px;
  left: -20px;
  width: 340px;
}

.life {
  position: absolute;
  top: 912px;
  right: -20px;
  width: 300px;
}
</style>
