<template>
  <div class="main-container">
    <!-- <transition name="slide-fade"> -->
      <router-view></router-view>
    <!-- </transition> -->
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

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .6s;
}
.slide-fade-enter, .slide-fade-leave-active {
  margin-left: 1000px;
  opacity: 0;
}
</style>
