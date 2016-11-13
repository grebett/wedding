<template>
  <div class="confirm-venue-container" style="padding:40px;">
    <ticket><ticket>
  </div>
</template>

<script>
import Ticket from './ticket';

export default {
  name: 'confirm-venue',
  components: { Ticket },
  data() {
    return {};
  },
};
</script>

<style scoped>
:root {
}

.confirm-venue-container {
  background-color: transparent;
}
</style>
