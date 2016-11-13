<template>
  <div class="header-title-container">
    <svg width="100%">
      <defs>
        <mask id="mask" x="0" y="0" width="100%" height="100%" >
          <rect id="alpha" x="0" y="0" width="300%" height="100%"/>
          <g id="path" v-bind:transform="`scale(${this.scale})`">
            <path d="M13.6,55.5c4.2-3.7,3.4-6.9,2.6-8.5L7.4,32.4l-6.2,3.8l9,13.7c0,0,2.3,3.8-4,2.3l-1,5.2C5.3,57.3,9.9,58.8,13.6,55.5z"/>
            <path d="M22.4,23.1c0,0-12.1,6.9-6.5,17.6c7.3,10.1,19.2,3,19.2,3s11-6.3,6.1-16.5C35.9,16.2,22.4,23.1,22.4,23.1z"/>
            <path d="M40.4,16.1l6.6-2.3l4.1,12.1c0,0,1.1,5,5.8,3.4c4.5-1.4,2.9-5.3,2.9-5.3L56.1,11l6.8-1.9l3.5,13.9c0,0,2.5,7.6-7.2,11.1
            c-11.3,4.1-13.8-4.6-13.8-4.6L40.4,16.1z"/>
            <path d="M67.2,8.1L72.2,30l6.1-1.2l-1.5-8.4l7.4,7.4l7.8-1l-8.8-8.2c0,0,5.6-1.5,4.6-7.1C86.2,3.8,78,6,78,6L67.2,8.1z"/>
            <path d="M117.1,1l-0.4,11c0,0-4.9-5-11.1,0c-5.9,4.8-1.7,11.8,1.3,13.1c1.9,0.9,6.8,2.3,9.3-1l0.1,1.9l5.8,0.2l1.4-24.9L117.1,1z
            "/>
            <path d="M131,20.1c0,0,9.6,1,12.4,1.8c0,0,2.6-9.1-7.9-10.4S125,19,125,19s-0.6,7.1,7.9,8.6s9.9-3.8,9.9-3.8l-5.5-0.9
            c0,0-1.4,1.4-3.6,0.9S130.8,22.2,131,20.1z"/>
            <path d="M161.2,9.6l-5.6,21.9l6.1,1.7l2.4-8.5l6.8,2.2l1.6-4.8l-6.9-2.1l1-3.6c0,0,5.6,1.6,7.9,2.5l1.7-4.8
            C176.2,14.1,167.3,10.9,161.2,9.6z"/>
            <path d="M179.9,15.4l-7.8,21.2c0,0,10.4,3.9,12.6,5.2l2.2-4.6c0,0-4.6-2.1-7.1-3.1l1.5-3.6c0,0,6,2.4,6.8,3l2.1-4.6
            c0,0-4.3-2.1-7.1-3.1l1.4-3.4c0,0,4.6,1.8,7.6,3.2l2.1-4.4C194.2,21.3,188.6,18.4,179.9,15.4z"/>
            <polygon points="180.8,11.9 182.4,15.1 188.6,14.1 192.1,19.1 195.7,18.1 190.1,10.2  	"/>
            <path d="M196.3,22.4c0,0,8.7,3.7,16.7,8.9l-2.4,4.2l-5.1-2.8l-8.5,15.3c0,0-5.1-2.7-5.6-2.9l7.9-15.6l-5.1-2.6L196.3,22.4z"/>
            <path d="M215.3,59.6l-11.6-7.9l11.6-19.1c1.9,0.6,13.3,8.7,13.3,8.7l-2.9,4c-0.9-0.8-6.9-4.6-6.9-4.6l-2.1,2.9l6.4,4.6l-2.9,4
            c-4.8-3.8-6.3-4.2-6.3-4.2l-2.1,3.2c1,0.5,6.6,4.5,6.6,4.5L215.3,59.6z"/>
            <path d="M71.2,68v-3.1h5.7v14.2h-3.7V68H71.2z"/>
            <path d="M84,79.1l4-4.8l0,0c-0.6,0.3-1.2,0.4-2,0.4c-2.8,0-4.6-2.4-4.6-5c0-3.5,2.9-5.4,6.1-5.4c1.4,0,3,0.3,4,1.2
            c1.1,0.9,1.9,2.4,1.9,3.9c0,2.1-1.1,4-2.3,5.6l-3,4H84z"/>
            <path d="M99.4,77.2c0,1.2-1,2.2-2.2,2.2c-1.2,0-2.2-1-2.2-2.2c0-1.2,1-2.2,2.2-2.2C98.5,75,99.4,76,99.4,77.2z"/>
            <path d="M112.9,72c0,3.7-1.8,7.7-6,7.7c-4.2,0-6-4-6-7.7s1.8-7.7,6-7.7S112.9,68.3,112.9,72z"/>
            <path d="M124.7,68.3c0,1.5-0.9,2.8-2.2,3.2v0c1.7,0.6,2.8,1.9,2.8,3.7c0,2.9-3,4.3-5.4,4.3c-2.4,0-5.4-1.4-5.4-4.3
            c0-1.9,1.1-3.2,2.8-3.7v0c-1.3-0.4-2.2-1.7-2.2-3.2c0-2.7,2.4-4,4.8-4C122.3,64.3,124.7,65.6,124.7,68.3z"/>
            <path d="M131.7,77.2c0,1.2-1,2.2-2.2,2.2c-1.2,0-2.2-1-2.2-2.2c0-1.2,1-2.2,2.2-2.2C130.8,75,131.7,76,131.7,77.2z"/>
            <path d="M135.8,68v-3.1h5.7v14.2h-3.7V68H135.8z"/>
            <path d="M147,68v-3.1h11.7l-8.2,14.2h-4L153,68H147z"/>
          </g>
        </mask>
      </defs>
      <rect id="base" x="0" y="0" width="200%" height="100%"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'header-title',
  props: {
    scale: { required: true },
    y: { required: true },
  },
  data() {
    return {};
  },
  destroyed: function destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  mounted: function mounted() {
    const svg = document.querySelector('svg');
    const windowWidth = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
    this.path = svg.getElementById('path');
    this.width = 300;

    window.addEventListener('resize', this.handleResize);
    this.path.setAttribute('transform',
      `translate(${parseInt((windowWidth / 2), 10) - (this.width / 2)}, ${this.y}), scale(${this.scale})`);
  },
  methods: {
    handleResize: function handleResize() {
      const windowWidth = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

      this.path.setAttribute('transform',
        `translate(${parseInt((windowWidth / 2), 10) - (this.width / 2)}, ${this.y}), scale(${this.scale})`);
    },
  },
};
</script>

<style scoped>

.header-title-container {
  position: absolute;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100%;
  height: 200px;
  z-index: 2;
}

svg {
  width: 100%;
  height: inherit;
}

#alpha {
  fill: #fff;
}

#base {
  fill: #fff;
  mask: url(#mask);
}
</style>
