<template>
  <div class="main-container">
    <confirm-venue></confirm-venue>
    <theme></theme>
    <dresscode></dresscode>
  </div>
</template>

<script>
import ConfirmVenue from './confirm';
import Theme from './theme';
import Dresscode from './dresscode/';

export default {
  name: 'app-main',
  components: { ConfirmVenue, Theme, Dresscode },
  data() {
    return {};
  },
};
</script>

<style scoped>
:root {
}

.main-container {
  padding-top: 200px;
  background-color: transparent;
}
</style>
