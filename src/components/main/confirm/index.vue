<template>
  <div class="confirm-venue-container" style="padding:40px;">
    <div id="should be an element">
      <svg width="500" height="224">
        <defs>
          <mask id="mask" x="0" y="0" width="500" height="224" >
            <rect id="alpha" x="0" y="0" width="300%" height="224"/>
            <circle cx="0" cy="112" r="40"/>
            <circle cx="500" cy="112" r="40"/>
          </mask>
        </defs>
        <rect id="base" x="0" y="0" width="500" height="224"/>
      </svg>
    </div>
  </div>
</template>

<script>

export default {
  name: 'confirm-venue',
  components: { },
  data() {
    return {};
  },
};
</script>

<style scoped>
:root {
}

.confirm-venue-container {
  /*background: red;*/
}

#alpha {
  fill: #fff;
}

#base {
  fill: #fff;
  mask: url(#mask);
}
</style>
