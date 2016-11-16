<template>
  <div class="youtube-iframe-container">
    <div id="player"></div>
  </div>
</template>

<script>
export default {
  name: 'youtube-iframe',
  components: {},
  props: {
    height: {
      default: '390',
    },
    videoId: {
      required: true,
    },
    width: {
      default: '640',
    },
  },
  created: function created() {
    let tag;
    let firstScriptTag;
    let found = false;
    const scripts = document.getElementsByTagName('script');

    for (let i = 0; i < scripts.length; i += 1) {
      if (scripts[i].src === 'https://www.youtube.com/iframe_api') {
        found = true;
        break;
      }
    }

    // add the YouTube API script if not exists
    if (!found) {
      tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      firstScriptTag = scripts[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    /* eslint-disable no-unused-vars */
    /* eslint-disable prefer-arrow-callback */
    window.onYouTubeIframeAPIReady = function onYouTubeIframeAPIReady() {
      const player = new YT.Player('player', {
        height: this.height,
        width: this.width,
        videoId: this.videoId,
      });
    }.bind(this);
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
:root {
}

.main-container {
  padding-top: 200px;
  background-color: transparent;
}
</style>
