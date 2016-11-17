<template>
  <div class="theme-container">
    <h1><span>thématique</span></h1>
    <h2>Fête foraine des années 50</h2>
    <div class="youtube-iframe-wrapper">
      <youtube-iframe video-id="6MocOt8xBjo"></youtube-iframe>
    </div>
    <p>
      Plongez dans l’univers d’une fête foraine des années 50 en France, venez participer aux attractions et concours pour remporter des cadeaux et ne manquez pas François le facteur !
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
}

span {
  border-bottom: 2px outset var(--dark-blue);
  padding-bottom: 30px;
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
}
</style>
