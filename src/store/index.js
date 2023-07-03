import { createStore } from 'vuex'

export default createStore({
  state: {
    message: 'Welcome to Vue 3'
  },
  mutations: {
    setMessage(state, payload) {
      state.message = payload
    }
  },
  actions: {
    updateMessage({ commit }, newMessage) {
      commit('setMessage', newMessage)
    }
  },
  modules: {}
})