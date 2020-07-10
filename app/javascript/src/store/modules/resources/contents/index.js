import Gateway from '../../../../lib/api_gateway'

const gateway = new Gateway('about');

export default {
  namespaced: true,

  state: {
    editMode: false,
    aboutPage: {
      title: 'I\'m here to capture your moments'
    }
  },

  getters: {},

  actions: {
    updateContents({ commit }, params) {
      return gateway.put({ action: 'update' }, params).then(response => {
        commit('setTitle', response.title)
        return response;
      });
    }
  },

  mutations: {
    setEditMode(state, mode) {
      state.editMode = mode
    },

    setTitle(state, hash) {
      switch (hash.page) {
        case 'about':
          state.aboutPage.title = hash.text
          break;
        default:
          break;
      }
    }
  }
}
