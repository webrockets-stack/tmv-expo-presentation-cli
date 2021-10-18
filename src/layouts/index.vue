<template>
  <div id="app">
    <div class="layer-wrapper">
        <router-view></router-view>
    </div>
    <div class="layer-navigation">
      <AppNavigation></AppNavigation>
    </div>
  </div>
</template>

<script>
import AppNavigation from './AppNavigation';

export default {
  name: 'AppLayout',
  components: {
    AppNavigation,
  },
  data() {
    return {
      connection: null,
      bus: null,
    }
  },
  created() {
    this.bus = require('../commands/bus').default;
    this.bus.init();
  },
  methods: {
  }
}
</script>
<style lang="scss">
@import "@/scss/main.scss";
</style>
