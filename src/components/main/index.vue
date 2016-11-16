<template>
  <div class="main-container">
    <confirm-venue></confirm-venue>
    <theme></theme>
  </div>
</template>

<script>
import ConfirmVenue from './confirm';
import Theme from './theme';

export default {
  name: 'app-main',
  components: { ConfirmVenue, Theme },
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
