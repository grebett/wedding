<template>
  <div class="program-container">
    <div class="friday">
      <day date="vendredi 18 août" orientation="flag-right"></day>
      <div class="row">
        <div class="text padding-left"> <!-- could be an element -->
          <h1 class="prep">Préparation de la fête</h1>
          <h2>avec les premiers arrivants</h2>
          <p>
            Dans la journée du vendredi <strong>à partir de 13h</strong>, tous les volontaires sont les bienvenus pour nous <strong>aider à installer les décorations et préparer la fête du lendemain</strong>. Nous finirons la journée autour d'un barbecue à deux pas de la piscine&nbsp;!<br><br>
            Les résidents du Château pourront arriver <strong>à partir de 11h</strong> pour prendre possession de leurs chambres.
          </p>
        </div>
        <div class="photo-container">
          <img class="photo" src="./img_prog1.png" alt="Trois enfants marchant">
        </div>
      </div>
    </div>
    <div class="saturday">
      <day date="samedi 19 août" orientation="flag-left"></day>
      <div class="row">
        <div class="text padding-left">
          <h1 class="prep big">Jour de fête</h1>
          <h2>tous ensemble</h2>
          <p>
            Aujourd'hui nous célébrons notre amour dans la bonne humeur. Ambiance festive et chaleureuse garantie&nbsp;!
          </p>
        </div>
        <div class="text padding-right">
          <h1>Arrivée des invités</h1>
          <h2>à partir de 14h30</h2>
          <p>
            Rendez-vous directement au <router-link to="/découverte">château de Pralong à Satillieu</router-link>. Prenons le temps
            de tous nous retrouver&nbsp;!
          </p>
        </div>
      </div>
      <div class="row">
        <div class="photo-container">
          <img class="photo" height="100%" src="./grease.jpg" alt="La bande de Grease">
        </div>
        <div class="text centered padding-right">
          <h1>Cérémonie laïque</h1>
          <h2>15h30</h2>
          <p>
            Voici l'instant solannel et l'échange des alliances. Amis et familles sont invités à s'exprimer&nbsp;: si vous souhaitez prendre la parole durant la cérémonie, <a href="mailto:somebody@somewhere.com">envoyez un mail</a> aux témoins en charge de l'organisation.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="text padding-left">
          <h1>Fête foraine</h1>
          <h2>à partir de 16h30</h2>
          <p>
            C'est parti pour la fête du village&nbsp;!<br>
            Participez aux activités pour gagner des tickets et les échanger contre des peluches vintage&nbsp;!<br>
            Echangez autour d'une coupe de champagne ou retombez en enfance en vous offrant une barbe à papa.
          </p>
        </div>
        <div class="text padding-right">
          <h1>Concours crêpes / cookies</h1>
          <h2>à partir de 17h</h2>
          <p>
            Que serait un goûter sans crêpes ni cookies&nbsp;? Mais quand il s'agit de trouver la bonne recette, les avis divergent&nbsp;! C'est l'occasion de vous départager une bonne fois pour toute en nous apportant vos mets les plus réussis. Vous souhaitez participer&nbsp;? Alors <a target="_blank" href="https://docs.google.com/spreadsheets/d/1lS4NYXrLAOWLSIh-bRt5hw4xZEeG9foemUGRdZL1dgA/edit?usp=sharing">inscrivez-vous ici</a>.<br>
            Avis aux gourmands, les membres du jury seront choisis le jour J&nbsp;!
          </p>
        </div>
      </div>
      <div class="row">
        <div class="text centered padding-left">
          <h1>Photos</h1>
          <h2>à partir de 18h00</h2>
          <p>
            Les traditionnelles photos de groupe. Venez poser avec les mariés dans vos plus beaux apparâts&nbsp;!
          </p>
        </div>
        <div class="photo-container">
          <img class="photo" height="100%" src="./rock.jpg" alt="Jeunes dansant le Rock">
        </div>
      </div>
      <div class="row">
        <div class="text padding-left">
          <h1>Diner &amp; animations</h1>
          <h2>20h</h2>
          <p>
            Le goûter vous a mis en appétit&nbsp;? Alors direction la salle de réception&nbsp; pour un repas d'été savoureux&nbsp;!<br><br>
            Envie de nous surprendre avec une animation&nbsp;? <a href="mailto:damien@gmail.com">Contactez Damien</a>.
          </p>
        </div>
        <div class="text padding-right">
          <h1>Rock ‘n' roll et cie</h1>
          <h2>à partir de 22h30</h2>
          <p>
            Les années 50, c'est aussi une musique endiablée. Répétez vos pas de danse et échauffez vos guiboles&nbsp;! Rock, jazz, swing, les mariées ouvrent le bal et vous invite à rejoindre la piste.<br><br>
            Tout au long de la soirée, Martin notre DJ vous fera traverser les époques musicales jusqu'à aujourd'hui&nbsp;!
          </p>
        </div>
      </div>
      <div class="row">
        <div class="text padding-left">
          <h1>Surprise&nbsp;!</h1>
          <h2>vers minuit</h2>
          <p>
            Pour conclure ce jour de fête, retrouvons-nous dehors pour une surprise&nbsp; pyrotechnique&nbsp;!
          </p>
        </div>
        <div class="text padding-right">
          <h1>Play Time</h1>
          <h2>jusqu'à l'aube</h2>
          <p>
            Pour les plus téméraires, la piste de danse reste ouverte jusqu'à l'aube.<br>
            Vous préférez une ambiance plus posée&nbsp;? Finissez la soirée dans les salons de jeux. Au programme Billard, Tarot, Poker ou Black Jack.
          </p>
        </div>
      </div>
    </div>
    <div class="sunday">
      <day date="dimanche 20 août" orientation="flag-right"></day>
      <div class="row">
        <div class="text padding-left">
          <h1 class="prep">Brunch &amp; piscine </h1>
          <h2>à partir de 13h</h2>
          <p>
            Après une grasse matinée le Dimanche, rejoignez-nous pour un brunch et passons une après-midi tranquille au bord de la piscine.<br><br>
            N'oubliez pas vos maillots de bain et serviettes de plage&nbsp;!
          </p>
        </div>
        <div class="text padding-right">
          <h1>Dîner et feu de camp</h1>
          <h2>à partir de 20h30</h2>
          <p>
            Ceux qui pourront rester le soir sont invités à une petite soirée autour d'un feu de camp. Rejoignez-nous le jardin. Amis musiciens, vos instruments sont les bienvenus.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Day from './day';

export default {
  name: 'program',
  components: { Day },
  data() {
    return {};
  },
};
</script>

<style scoped>
:root {
  --transparent-blue: color(#85beff alpha(20%));
}

.program-container {
  position: relative;
  box-sizing: border-box;
  padding: 0;
  width: 800px;
  margin: auto;
  margin-top: 50px;
  background-color: var(--white);
  background-image: url(../../../assets/noisy-grid.png);
  box-shadow: 0 2px 4px 0 var(--shadow-black);
  z-index: 1;
}

.friday,
.saturday,
.sunday {
  position: relative;
  height: inherit;
  padding: 50px 0;
}

.friday,
.saturday {
  /*margin-bottom: 100px;*/
}

.saturday {
  background-color: var(--transparent-blue);
}

.row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}

.photo-container {
  flex: 1;
  max-width: 45%;
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
  max-width: 45%;
}
.text p {
  line-height: 1.5em;
}

.centered {
  align-self: center;
}

.padding-left {
  padding-left: 60px;
}
.padding-right {
  padding-right: 60px;
}

h1 {
  font-family: AvenirNext;
  color: var(--dark-blue);
  font-size: 20px;
}

h1.prep:before {
  position: absolute;
  content: '–––';
  font-family: Arial;
  left: 0px;
}

h1.big {
  text-transform: uppercase;
}

h2 {
  font-family: PlayFair;
  color: var(--light-blue);
  font-size: 20px;
  font-weight: normal;
  text-transform: none;
  margin-top: -10px;
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
