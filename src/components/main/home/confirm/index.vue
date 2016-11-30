<template>
  <div class="confirm-venue-container" style="padding:40px;">
    <h1>confirmez votre présence</h3>
    <ticket></ticket>
    <div class="buttons-container">
      <button class="button button--dark" type="button" name="button">ajouter quelqu'un</button>
      <button class="button button--light" type="button" name="button">valider</button>
    </div>
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
  position: relative;
  z-index: 1;
}

h1 {
  text-align: center;
  color: var(--white);
  margin-top: -30px;
  font-size: 20px;
}

.buttons-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 26px;
}

.button {
  font-family: AvenirNext;
  width: 160px;
  height: 43px;
  margin-left: 18px;
  margin-right: 18px;
  border-radius: 92px;
  box-shadow: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  box-shadow: 0 2px 4px 0 var(--shadow-black);
  transition: box-shadow 0.3s;
}
.button:hover {
  box-shadow: 0 4px 4px 0 var(--shadow-black);
}
.button--dark {
  background-color: var(--dark-blue);
}
.button--light {
  background-color: var(--blue);;
  font-weight: bold;
}
</style>
