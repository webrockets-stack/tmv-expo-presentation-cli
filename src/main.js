import Vue from 'vue'
import router from './router';
import AppLayout from './layouts/index.vue'


// import VueI18n from 'vue-i18n';
// import messages from './lang';

Vue.config.productionTip = false

// export const i18n = new VueI18n({
//   locale: 'de',
//   fallbackLocale: 'de',
//   messages
// });

new Vue({
  name: 'Root',
  router,
  // i18n,
  render: h => h(AppLayout),
}).$mount('#app')
