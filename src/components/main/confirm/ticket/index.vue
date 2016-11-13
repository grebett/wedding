<template>
  <div class="ticket-container">
    <form>
      <div class="form-group">
        <input type="text" placeholder="nom/prénom">
      </div>
      <div class="form-group">
        <input type="text" placeholder="mail">
      </div>
      <div class="form-group">
        <input id="checkbox1" type="checkbox" class="css-checkbox" name="name" value=""><label for="checkbox1" class="css-label">dîner végétarien</label>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'ticket',
  components: { },
  data() {
    return {};
  },
};
</script>

<style scoped>
:root {
  --blue: #244b79;
}

.ticket-container {
  /*position: relative;*/
  margin: auto;
  width: 520px;
  height: 270px;
  overflow: show;
  background-image: url('./ticket.svg');
  background-size: cover;
}

#ticket-alpha {
  fill: #fff;
}

#ticket-base {
  fill: #fff;
  mask: url(#ticket-mask);
}

form {
  height: 100%;
  padding: 50px 130px;
}

.form-group {
  width: 100%;
  margin-bottom: 40px;
}

input[type="text"] {
  width: 100%;
  outline: none;
  border: none;
  padding: 5px;
  border-bottom: 2px solid var(--blue);
  text-align: center;
  font-size: 20px;
}

input[type="text"]::placeholder {
  color: var(--blue);
  opacity: 1 !important;
  font-weight: lighter;
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
  font-size: 21px;
  font-weight: lighter;
  color: var(--blue);
}

input[type=checkbox].css-checkbox:checked+label.css-label {
  background-image: url(./on.png);
}

label.css-label {
  background-image: url(./off.png);
  user-select: none;
}
</style>
