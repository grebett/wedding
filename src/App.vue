<template>
  <div id="app">
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/header';
import AppMain from './components/main';
import AppFooter from './components/footer';

export default {
  name: 'app',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
};
</script>

<style>
* {
  --light-blue: #85beff;
  --blue: #4a90e2;
  --dark-blue: #244b79;
  --grey: #9b9b9b;
  --shadow-black: #00000080;
  --text-black: #2c3e50;
  --text-dark-blue: #254b79;
  --white: #ffffff;
}

@font-face {
  font-family: AvenirNext;
  src: url(./assets/AvenirNextLTProRegular.ttf);
}
@font-face {
  font-family: AvenirNext;
  src: url(./assets/AvenirNextLTProBold.ttf);
  font-weight: bold;
}
@font-face {
  font-family: PlayFair;
  src: url(./assets/PlayfairDisplay-Regular.otf);
}
@font-face {
  font-family: PlayFair;
  src: url(./assets/PlayfairDisplay-Bold.otf);
  font-weight: bold;
}
@font-face {
  font-family: PlayFair;
  src: url(./assets/PlayfairDisplay-Italic.otf);
  font-style: italic;
}
@font-face {
  font-family: PlayFair;
  src: url(./assets/PlayfairDisplay-BoldItalic.otf);
  font-weight: bold;
  font-style: italic;
}

html, body {
  height: 100%;
}

#app {
  font-family: AvenirNext, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-black);
  margin: auto;
  width: 100%;
  min-height: 100%;
  height: auto;
  left: 0;
  right: 0;
  z-index: 0;
}

#app:before {
  content: "";
  position: fixed;
  left: 0;
  right: 0;
  z-index: -1;

  display: block;
  background-image: url(./assets/festival-flags-garden-party-large.jpg);
  background-size: cover;
  background-position: top;
  background-attachment: fixed;
  width: 8000px;
  height: 800px;
  filter: blur(2px) hue-rotate(120deg) brightness(0.7);
}
</style>
