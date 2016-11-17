<template>
  <div class="day-container" v-bind:class="orientation">
    <h1>{{ date }}</h1>
  </div>
</template>

<script>

export default {
  name: 'day',
  props: {
    date: {
      required: true,
    },
    orientation: {
      default: 'flag-right',
    },
  },
  components: { },
  data() {
    return {};
  },
};
</script>

<style scoped>
:root {
}

.day-container {
  position: absolute;
  top: -27.66px;
  background-size: auto 100%;
  background-repeat: no-repeat;
}

.flag-left {
  background-image: url(./flag-left.svg);
  right: 0;
}

.flag-right {
  background-image: url(./flag-right.svg);
  left: 0;
}

.flag-right h1 {
  margin: 0;
  padding: 14px 100px 14px 30px;
  font-family: Playfair;
  color: var(--white);
  text-transform: uppercase;
  font-size: 24px;
}

.flag-left h1 {
  margin: 0;
  padding: 14px 30px 14px 100px;
  font-family: Playfair;
  font-size: 24px;
  color: var(--white);
  text-transform: uppercase;
}

</style>
