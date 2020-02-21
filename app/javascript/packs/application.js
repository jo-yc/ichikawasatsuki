import Vue from 'vue'
import App from '../app'

// Styles
import '../src/assets/stylesheets/application'

// Router
import router from '../src/router/index'

// Vue i18n
import i18n from '../src/locales/index';

// Validator
import '../src/lib/validator';

// HTTP Requests/Response
import VueResource from 'vue-resource/dist/vue-resource.min'
Vue.use(VueResource)

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    components: {
      App: App
    },
    data() {
      return {}
    },
    template: '<App/>',
    render: h => h(App),
    router: router,
    i18n
  }).$mount('#app')
})
