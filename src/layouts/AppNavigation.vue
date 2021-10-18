<template>
  <nav class="fixed-bottom">
    <ul class="d-flex  flex-row w-100">
      <li v-for="(item, key) in routes" :key="key">
        <router-link class="btn btn-secondary btn-lg" :to="item.path">{{ item.meta.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      routes: null
    }
  },
  beforeMount() {
    this.routes = this.$router.options.routes;
  },
  watch:{
    $route (to, from){
      this.navigate(to.name)
    }
  },
  methods: {
    navigate(route) {
      this.$parent.bus.navigate(route);
    }
  }
}
</script>