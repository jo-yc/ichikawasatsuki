import Gateway from '../../../../lib/api_gateway'

const gateway = new Gateway('about');

export default {
  namespaced: true,

  state: {
    title: '',
    subTitle: '',
    body: '',
    profileImg: '',
    cvTitle: ''
  },

  getters: {},

  actions: {
    loadContents({ commit }) {
      return gateway.get({ action: 'show' }).then(response => {
        commit('setContents', response.body)
        return response;
      })
    },

    updateContents({ commit }, params) {
      return gateway.put({ action: 'update' }, params).then(response => {
        commit('setContents', response.body)
        return response;
      });
    }
  },

  mutations: {
    setContents(state, contents) {
      state.title      = contents.title
      state.subTitle   = contents.sub_title
      state.body       = contents.body
      state.profileImg = contents.image_url
      state.cvTitle    = contents.cv_title
    }
  }
}
