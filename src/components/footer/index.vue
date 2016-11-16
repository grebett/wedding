<template>
  <div class="footer-container">
    <h1>contact</h1>
    <div class="contacts">
      <contact name="Chloé Payot" telephone="06 83 03 42 28" email="chl.payot@gmail.com"></contact>
      <contact name="Grégory Betton" telephone="06 66 93 78 63" email="gregory.betton@gmail.com"></contact>
    </div>
  </div>
</template>

<script>
import Contact from './contact';

export default {
  name: 'app-footer',
  components: { Contact },
  data() {
    return {};
  },
};
</script>

<style scoped>
:root {
}

.footer-container {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 250px;
  z-index: 1;
  margin-top: 50px;
  padding: 50px;
  background-color: var(--dark-blue);
}


h1 {
  margin: 0;
  font-family: Playfair;
  color: var(--white);
  text-transform: uppercase;
  text-align: left;
}

.contacts {
  margin-left: 500px;
  padding-top: 20px;
  width: 500px;
  display: flex;
  justify-content: space-around;
}
</style>
