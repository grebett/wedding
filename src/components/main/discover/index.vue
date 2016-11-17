<template>
  <div class="discover-container">
    <castle></castle>
    <countryside></countryside>
  </div>
</template>

<script>
import Castle from './castle';
import Countryside from './countryside';

export default {
  name: 'discover',
  components: { Castle, Countryside },
  data() {
    return {};
  },
};
</script>

<style scoped>
:root {
}

.discover-container {
  margin-bottom: 100px;
}
</style>
