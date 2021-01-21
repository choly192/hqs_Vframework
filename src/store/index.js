/**
 * 组装模块并导出store
 */

import Vuex from 'vuex';
import Vue from 'vue';
import increment from './modules/increment';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    increment,
  },
});

export default store;
