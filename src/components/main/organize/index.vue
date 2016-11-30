<template>
  <div class="organize-container">
    <where></where>
    <facilities></facilities>
  </div>
</template>

<script>
import Where from './where';
import Facilities from './facilities';

export default {
  name: 'organize',
  components: { Where, Facilities },
  data() {
    return {};
  },
};
</script>

<style scoped>
:root {
}

.organize-container {
  margin-bottom: 100px;
}
</style>
