import Vue from 'vue'
import Vuex from 'vuex'

import config from './modules/config'

// -- resources --
import contents from './modules/resources/contents'
import about from './modules/resources/about'
import gallery from './modules/resources/gallery'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    config,
    resources: {
      namespaced: true,
      modules: {
        contents: contents,
        about: about,
        gallery: gallery
      }
    },
    pages: {
      namespaced: true,
      modules: {}
    }
  }
})
