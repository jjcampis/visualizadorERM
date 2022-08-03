import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logueado: false
  },
  getters: {
  },
  mutations: {
    setLogin(state){
      state.logueado = true 
    }
  },
  actions: {
    login({state}){
      console.log("login");
      state.logueado = true;
      console.log(state.logueado);
    },
    prueba({commit}){
      commit('setLogin')
    }
  },
  modules: {
  }
})
