<template>
  <div class="castle-container">
    <h1 class="main_title">le lieu des festivités</h1>
    <h2 class="main_subtitle">Le château de Pralong Satillieu</h2>
    <img class="photo castle" src="./castle-front.jpg" alt="façade du château de Pralong">
    <p class="centered">
      Le château de Pralong, composé de différents bâtiments et jardins, nos offre tout le confort nécessaire à une fête d'exception. Nous avons carte blanche du vendredi 18 au lundi 21 août. Alors profitons-en&nbsp;!
    </p>
    <div class="patchwork-container">
      <img class="photo entrance" src="./entrance.jpg" alt="entrée du château">
      <img class="photo pool" src="./pool.jpg" alt="la piscine">
      <img class="photo the-room" src="./the-room.jpg" alt="la salle des fêtes">
      <img class="photo living-room" src="./living-room.jpg" alt="le salon">
      <div class="text gardens">
        <h1>Les jardins</h1>
        <h2>Cour, jardins et piscine</h2>
        <p>
          La cour où nous vous accueillerons et pourrons prendre le petit-déjeuner du dimanche.<br><br>
          Les jardins avec leur vue panoramique sur la vallée seront transformés en fête foraine. Un coin particulier sera amménagé pour la cérémonie sous les grands pins.<br><br>
          Envie de vous rafraîchir sous le soleil aoûtien&nbsp;? La piscine chauffée n'attend que vous&nbsp;!
        </p>
      </div>
      <div class="text room">
        <h1>Les salles de réception</h1>
        <h2>Salles des citronniers &amp; des glycines</h2>
        <p>
          La salle des citronniers, située dans la partie haute de la grange, hébergera la réception et la piste de danse.<br><br>
          La salle des glycines juste en dessous pourra servir de dortoir pour la nuit du samedi si vous êtes trop éprouvés pour reprendre la route (l'Ardèche est connue pour ses routes dangereuses&nbsp;!). Pensez à prendre un matelas et un sac de couchage.
        </p>
      </div>
      <div class="text life">
        <h1>Les lieux de vie</h1>
        <h2>Grande &amp; petite maison</h2>
        <p>
          La grande maison avec ses différents salons, sa grande cuisine et sa salle de billard&nbsp;!<br><br>
          La petite maison et ses quelques chambres.<br><br>
          Le jardin de la petite maison où les campeurs auront la possibilité de planter leurs tentes pour dormir à moindre frais&nbsp;!
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
  height: 1270px;
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

.castle {
  position: relative;
  width: 640px;
  margin-bottom: 20px;
}

.entrance {
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
  top: 922px;
  right: -20px;
  width: 300px;
}
</style>
