<template>
  <div class="theme-container">
    <h1>thématique</h1>
    <h2>Fête foraine des années 50</h2>
    <youtube-iframe video-id="6MocOt8xBjo"></youtube-iframe>
    <p>
      Plongez dans l’univers d’une fête foraine des années 50 en France, venez participer aux attractions et concours pour remporter des cadeaux et ne manquez pas François le facteur !
    </p>
  </div>
</template>

<script>
import YoutubeIframe from '../../common/youtube-iframe';

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
  box-sizing: border-box;
  padding: 20px 80px;
  width: 800px;
  margin: auto;
  background-color: var(--white);
}

h1 {
  font-family: Playfair;
  color: var(--blue);
  text-transform: uppercase;
  text-align: center;
}

h2 {
  font-family: Avenir;
  text-align: center;
  color: var(--dark-blue);
}
</style>
