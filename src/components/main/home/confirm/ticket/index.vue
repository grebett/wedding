<template>
  <div class="ticket-container">
    <form>
      <div class="form-group">
        <input
          type="text"
          placeholder="nom/prénom"
          v-on:input="update($event.target.value, 'fullname', index)">
      </div>
      <div class="form-group">
        <input
          type="text"
          placeholder="mail"
          v-on:input="update($event.target.value, 'mail', index)">
      </div>
      <div class="form-group">
        <input
          ref="vegan"
          type="checkbox"
          v-bind:id="'checkbox' + index"
          class="css-checkbox"
          name="name"
          v-bind:checked="vegan"
          v-on:click="update($event.target.checked, 'vegan', index)">
        <label v-bind:for="'checkbox' + index" class="css-label">dîner végétarien</label>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'ticket',
  components: { },
  props: ['fullname', 'mail', 'vegan', 'index'],
  data() {
    return {};
  },
  methods: {
    update(value, key, index) {
      this.$emit('update', { value, key, index });
    },
  },
};
</script>

<style scoped>
:root {
}

.ticket-container {
  /*position: relative;*/
  margin: auto;
  width: 416px;
  height: 216px;
  overflow: show;
  background-image: url('./ticket.svg');
  background-size: cover;
}

#ticket-alpha {
  fill: var(--white);
}

#ticket-base {
  fill: var(--white);
  mask: url(#ticket-mask);
}

form {
  height: 100%;
  padding: 30px 100px;
}

.form-group {
  width: 100%;
  margin-bottom: 30px;
}

input[type="text"] {
  width: 100%;
  outline: none;
  border: none;
  padding: 5px;
  border-bottom: 2px solid var(--dark-blue);
  font-size: 17px;
  color: var(--dark-blue);
  background-color: transparent;
  text-align: center;
}

input[type="text"]::placeholder {
  color: var(--dark-blue);
  opacity: 1 !important;
  font-weight: lighter;
  text-align: center;
}

input[type=checkbox].css-checkbox {
  position: absolute;
  z-index: -1000;
  left: -1000px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}

input[type=checkbox].css-checkbox + label.css-label {
  padding-left: 56px;
  height: 31px;
  display: inline-block;
  line-height: 21px;
  background-repeat: no-repeat;
  background-position: 0 0;
  vertical-align: middle;
  cursor: pointer;
  font-size: 17px;
  font-weight: lighter;
  color: var(--dark-blue);
}

input[type=checkbox].css-checkbox:checked+label.css-label {
  background-image: url(./on.png);
}

label.css-label {
  background-image: url(./off.png);
  user-select: none;
}
</style>
