<template>
  <div class="home-container">
    <confirm-venue></confirm-venue>
    <theme></theme>
    <dresscode></dresscode>
  </div>
</template>

<script>
import ConfirmVenue from './confirm';
import Theme from './theme';
import Dresscode from './dresscode';

export default {
  name: 'home',
  components: { ConfirmVenue, Theme, Dresscode },
  data() {
    return {};
  },
};
</script>

<style scoped>
:root {
}

.home-container {
}
</style>
