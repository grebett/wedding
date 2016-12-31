<template>
  <div class="confirm-venue-container" style="padding:40px;">
    <h1>confirmez votre présence</h3>
    <div v-for="(ticket, index) in tickets">
      <ticket
        v-bind:ticket="ticket.fullname" v-on:update="handleChange"
        v-bind:mail="ticket.mail"
        v-bind:vegan="ticket.vegan"
        v-bind:index="index">
      </ticket>
    </div>
    <div class="buttons-container">
      <button class="button button--dark" type="button" name="button" v-on:click="add">ajouter quelqu'un</button>
      <button class="button button--light" type="button" name="button" v-on:click="validate">valider</button>
    </div>
  </div>
</template>

<script>
import aja from 'aja';
import Ticket from './ticket';

export default {
  name: 'confirm-venue',
  components: { Ticket },
  data() {
    return {
      tickets: [{ fullname: '', mail: '', vegan: false }],
    };
  },
  methods: {
    add() {
      this.tickets.push({
        fullname: '', mail: '', vegan: false,
      });
    },
    handleChange(data) {
      this.tickets[data.index][data.key] = data.value;
    },
    validate() {
      const json = JSON.stringify(this.tickets);

      aja()
        .method('POST')
        .url('https://chloe-gregory-wedding-c650b.firebaseio.com/venue.json')
        .cache(false)
        .body(json)
        .on('200', () => {
          alert('ok');
        })
        .on('40x', () => {
          alert('ko');
        })
        .on('500', () => {
          alert('fuck');
        })
        .go();
    },
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
