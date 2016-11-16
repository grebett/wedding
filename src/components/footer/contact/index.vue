<template>
  <div class="contact-container">
    <p>
      <strong>{{name}}</strong><br>
      {{telephone}}<br>
      <a v-bind:href="`mailto:${email}`">{{email}}</a><br>
    </p>
  </div>
</template>

<script>

export default {
  name: 'contact',
  props: ['name', 'telephone', 'email'],
  components: { },
  data() {
    return {};
  },
};
</script>

<style scoped>
:root {
}

.contact-container {
  position: relative;
  flex: 1;
}


strong {
  font-family: AvenirNext;
  color: var(--white);
  font-weight: bold;
  font-size: 16px;
}

p {
  color: var(--light-blue);
  font-size: 16px;
  line-height: 1.4em;
}

a {
  color: var(--light-blue);
  text-decoration: none;
}
</style>
