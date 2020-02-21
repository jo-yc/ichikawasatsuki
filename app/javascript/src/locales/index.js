import Vue from 'vue'
import VueI18n from 'vue-i18n'
import En from 'vee-validate/dist/locale/en.json'
import Ja from 'vee-validate/dist/locale/ja.json'

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'ja',
  messages: {
    en: require('./messages/en.json'),
    ja: require('./messages/ja.json')
  }
})
