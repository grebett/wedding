<template>
  <div class="facilities-container">
    <h1 class="main_title">Les hébergements</h1>
    <h2 class="main_subtitle">Possibilité d'hébergement<br>dans les environs</h2>
    <p class="intro centered">
      C'est vrai, l'Ardèche, c'est un peu loin. Mais comme c'est une région magnifique et qu'en plus c'est le mois d'Août, pourquoi n'en profiteriez-vous pas pour prendre quelques vacances&nbsp;? Nous avons sélectionné pour vous une liste de logement dans le coin.<br><br>
      Réservez vite, les prix n'en seront que plus intéressants. Si vous vous groupez, nous pourrons négocier des réductions auprès de ces établissements. Pour nous prévenir, utilisez <a target="_blank" href="https://docs.google.com/spreadsheets/d/1KjHtz0uj-PvThJK2NuKtflnV9esqpPkZlDrpPEUWCTc/edit?usp=sharing">ce formulaire</a>, accessible uniquement aux invités, ou <a href="mailto:gregory.betton@gmail.com,chl.payot@gmail.com">contactez-nous directement par email</a>.
      Nous essaierons de vous obtenir les meilleurs prix et vous préviendrons quand vous pourrez finaliser vous-même votre réservation.
    </p>
    <div class="patchwork-container">
      <img class="photo gentilhommiere" src="./gentilhommiere.png" alt="La gentilhommière">
      <img class="photo gite" src="./gite.png" alt="Un gîte rural">
      <img class="photo agathe" src="./agathe.png" alt="Chez Agathe">
      <img class="photo canopee" src="./camping.png" alt="Tente de camping">
      <div class="text hotel">
        <h1>Hôtel</h1>
        <h2>La Gentilhommière</h2>
        <p>
          La Gentilhommière est l'hôtel le plus proche. Vous pourrez même rentrer du château à pied&nbsp;! C'est un hôtel 3 étoiles avec piscine chauffée, restaurant, terrasse et jardin.<br>
          Comptez entre 70 et 100 € la nuit. Il est possible de réserver des chambres d'hôtel ou des duplex pour un séjour prolongé.<br><br>
          Nous pouvons organiser un tarif de groupe à partir de 20 personnes.
        </p>
      </div>
      <div class="text gites">
        <h1>Gîtes</h1>
        <h2>Domaine vignes vieilles</h2>
        <p>
          Le <a href="http://www.domainevignevieille.com/4596.html?*session*id*key*=*session*id*val*">domaine vignes vieilles</a> se trouve dans le premier village à 4 km de Satillieu. Idéal pour ceux qui sont en groupe et veulent louer un gîte. Vous pouvez y loger à 16 dans les 6 chambres.<br><br>
          Ancienne grange, entièrement transformée en maison de charme. Belle demeure en pierre qui offre une grande pièce à vivre et des chambres spacieuses avec salle de bain privée. Tarif de 1000€ à 2800€ pour tout le gîte.
        </p>
        <h2 class="margin-top">Chez Agathe</h2>
        <p>
          Au bord d'une rivière de la montagne ardéchoise, dans un village pittoresque, découvrez <a href="http://www.ardeche-gite-1669.fr/">Chez Agathe</a> une demeure de caractère du XVIIème siècle, ancien couvent puis pensionnat de jeunes filles.<br><br>
          L'aile droite de la bâtisse conçue en gîte offre une grande capacité d'accueil (de 6 à 14 personnes) avec des espaces modulables. Tarif de 650€ à 1200€ pour 3 nuits.
        </p>
      </div>
      <div class="text camping">
        <h1>Camping sur place</h1>
        <h2>Dans les jardins du château</h2>
        <p>
          Si vous êtes jeune et que vous aimez le grand air, nous réservons pour vous un espace dans le jardin pour planter quelques tentes.<br>
          Ammenez votre materiel de camping, les toilettes, les salles de bain et la cuisine du château sont à disposition.<br><br>
          Vous pouvez séjourner au château les trois nuits, du vendredi 18 au lundi 21 août. Tarifs&nbsp;: c'est l'avantage, c'est gratuit.<br>
          Manifestez-vous à l'avance en vous <a target="_blank" href="https://docs.google.com/spreadsheets/d/1KjHtz0uj-PvThJK2NuKtflnV9esqpPkZlDrpPEUWCTc/edit?usp=sharing#gid=725102490">inscrivant sur ce formulaire</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'facilities',
  components: { },
  data() {
    return {};
  },
};
</script>

<style scoped>
:root {
}

.facilities-container {
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

a {
  color: var(--dark-blue);
  text-decoration: none;
  font-weight: bold;
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

.intro {
  margin-top: 30px;
}

.patchwork-container {
  width: 100%;
  height: 1550px;
  position: relative;
  margin-top: 50px;
}

.hotel {
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
}

.gentilhommiere {
  position: absolute;
  top: 0;
  right: -80px;
  width: 250px;
}

.gites {
  position: absolute;
  top: 450px;
  right: 0;
  width: 300px;
}

.gite {
  position: absolute;
  top: 480px;
  left: -80px;
  width: 360px;
  z-index: 2;
}

.agathe {
  position: absolute;
  top: 690px;
  left: -40px;
  width: 340px;
  z-index: 1;
}

.camping {
  position: absolute;
  top: 1150px;
  left: 0;
  width: 320px;
}

.canopee {
  position: absolute;
  top: 1200px;
  right: -80px;
  width: 330px;
}

.margin-top {
  margin-top: 30px !important;
}
</style>
