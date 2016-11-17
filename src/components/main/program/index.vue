<template>
  <div class="program-container">
    <div class="friday">
      <day date="vendredi 18 août" orientation="flag-right"></day>
      <p>
        hello world!
      </p>
    </div>
    <div class="saturday">
      <day date="samedi 19 août" orientation="flag-left"></day>
      <p>
        hello world!
      </p>
    </div>
    <div class="sunday">
      <day date="dimanche 20 août" orientation="flag-right"></day>
      <p>
        hello world!
      </p>
    </div>
  </div>
</template>

<script>
import Day from './day';

export default {
  name: 'program',
  components: { Day },
  data() {
    return {};
  },
};
</script>

<style scoped>
:root {
  --transparent-blue: color(#85beff alpha(50%));
}

.program-container {
  position: relative;
  width: 100%;
  height: inherit;
  margin-top: 50px;
  padding-bottom: 100px;
  background-color: var(--white);
  background-image: url(../../../assets/noisy-grid.png);
}

.friday,
.sunday {
  position: relative;
  height: inherit;
  margin-bottom: 100px;
}

.saturday {
  position: relative;
  background-color: var(--transparent-blue);
  margin-bottom: 100px;
}
</style>
