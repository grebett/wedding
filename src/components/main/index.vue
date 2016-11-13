<template>
  <div class="main-container">
    <confirm-venue></confirm-venue>
  </div>
</template>

<script>
import ConfirmVenue from './confirm';

export default {
  name: 'app-main',
  components: { ConfirmVenue },
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
