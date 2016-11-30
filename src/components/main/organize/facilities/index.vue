<template>
  <div class="facilities-container">
    <h1 class="main_title">Les hébergements</h1>
    <h2 class="main_subtitle">Possibilité d’hébergement<br>dans les environs</h2>
    <p class="intro centered">
      Puisque nous sommes loin de tout, que c’est au mois d’Aout et que l’Ardeche est une belle région, nous vous conseillons de poser au moins une journée pour un week-end de 3 jours et de réserver un logement dans le coin.<br><br>
      Réservez vite, les prix seront plus interessants. Nous pourrons aussi obtenir des réductions pour des prix de groupe, donc dites nous où vous souhaitez loger.
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
          La Gentilhommière est l’hôtel le plus proche. Vous pourrez même rentrer à pied si trop d’excès. C’est un hôtel 3 étoiles avec piscine chauffée, restaurant et terrasse et jardin.<br>
          La nuit est entre 70 et 100 €. Il est possible de réserver des chambres d’hotel ou des duplex pour un séjour prolongé.<br><br>
          Nous pouvons organiser un tarif de groupe à partir de 20 personnes, donc si vous choississez cet Hotêl, inscrivez vous ici pour que nous négocions pour vous les meilleurs prix. Vous ferez votre réservation une fois les prix négociés.
        </p>
      </div>
      <div class="text gites">
        <h1>Gîtes</h1>
        <h2>Domaine vignes vieilles</h2>
        <p>
          Le domaine vignes vieilles se trouve dans le village suivant à 4 kilometres. Idéal pour ceux qui sont en groupe et veulent louer un gîte. Vous pouvez y loger à 16. Il y a 6 chambres.<br><br>
          Ancienne grange, entièrement transformée en maison de charme. Belle demeure en pierre qui offre une grande pièce à vivre et des chambres spacieuses avec salle de bain privée. Tarif de 1000€ à 2800€ pour tout le gite.
        </p>
        <h2 class="margin-top">Chez Agathe</h2>
        <p>
          Au bord d’une rivière de la montagne ardéchoise, dans un village pittoresque, découvrez Chez Agathe une demeure de caractère du XVIIème siècle, ancien couvent, ancien pensionnat de jeunes filles.<br><br>
          L’aile droite de la bâtisse conçue en gîte offre une grande capacité d’accueil (de 6 à 14 personnes) avec des espaces modulables. Tarif de 650€ à 1200€ pour 3 nuits.
        </p>
      </div>
      <div class="text camping">
        <h1>Camping sur place</h1>
        <h2>Dans les jardins du château</h2>
        <p>
          Si vous êtes jeune, que vous aimez le grand air et que vous voulez rester avec nous jusqu’au bout. Nous gardons un espace dans le jardin pour planter quelques tentes.<br>
          Ammenez votre materiel de camping, les toilettes, les salles de bain et la cuisine du chateau sont à disposition.<br><br>
          Nous pouvons rester 4 jours et 3 nuits du Vendredi 18 au Lundi 21 Août. Tarifs : c’est l’avantage, c’est gratuit.<br>
          <strong>Prévenez nous</strong>.
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
  height: 1600px;
  position: relative;
  margin-top: 50px;
}

.hotel {
  position: absolute;
  top: 0;
  left: 0;
  width: 350px;
}

.gentilhommiere {
  position: absolute;
  top: 0;
  right: -80px;
  width: 300px;
}

.gites {
  position: absolute;
  top: 500px;
  right: 0;
  width: 300px;
}

.gite {
  position: absolute;
  top: 500px;
  left: -80px;
  width: 300px;
  z-index: 2;
}

.agathe {
  position: absolute;
  top: 650px;
  left: -20px;
  width: 300px;
  z-index: 1;
}

.camping {
  position: absolute;
  top: 1200px;
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
