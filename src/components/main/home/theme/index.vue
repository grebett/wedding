<template>
  <div class="theme-container">
    <h1>thématique</h1>
    <h2>Fête foraine des années 50</h2>
    <div class="youtube-iframe-wrapper">
      <youtube-iframe video-id="6MocOt8xBjo"></youtube-iframe>
    </div>
    <p>
      C'est la fête&nbsp;! Plongez dans l'univers de Jour de fête et retrouvez les jeux et les attractions librement inspirés d'une fête de village dans les années 50.
    </p>
  </div>
</template>

<script>
import YoutubeIframe from '../../../common/youtube-iframe';

export default {
  name: 'theme',
  components: { YoutubeIframe },
  data() {
    return {};
  },
};
</script>

<style scoped>
:root {
}

.theme-container {
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

p {
  color: var(--text-dark-blue);
  text-align: center;
  line-height: 1.3em;
}

.youtube-iframe-wrapper {
  box-shadow: 0 2px 4px 0 var(--shadow-black);
  padding: 0;
  height: auto;
  background: black;
  margin-bottom: 30px;
}
</style>
