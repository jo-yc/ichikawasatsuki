export default {
  namespaced: true,

  state: {
    env: null,
    locale: null
  },

  mutations: {
    /**
     * @param state
     * @param config
     */
    init(state, config) {
      Object.keys(state).forEach(k => {
        state[k] = config[k];
      });
    }
  }
};
