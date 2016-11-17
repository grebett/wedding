<template>
  <div class="main-container">
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app-main',
  components: { },
  data() {
    return {};
  },
};
</script>

<style scoped>
:root {
}

.main-container {
  padding-top: 250px;
  background-color: transparent;
}
</style>
