import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: ''
  },
  mutations: {
    storeSearchInState: (state, search) => {
      state.search = search
    }
  },
  actions: {
    storeSearch: ({ commit }, search) => {
      commit('storeSearchInState', search)
    }
  },
  getters: {
  },
  modules: {
  }
})
