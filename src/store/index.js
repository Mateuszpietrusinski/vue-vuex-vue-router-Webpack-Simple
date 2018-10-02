import Vue from 'vue'
import Vuex from 'vuex'
import Global from './global'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    a: Global,
  }
});
