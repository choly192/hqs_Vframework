const state = {
  count: 0,
};
/**
 * 根级别的action 类似于mutation
 * action 提交的是mutation 而不直接改变状态
 * action 可以执行异步操作
 */
const actions = {
  increment({ commit }, type) {
    commit('increment', type);
  },
};
/**
 * mutation 更改store里面的state状态的唯一方法
 */
const mutations = {
  increment(state, payload) {
    state.count += payload.count;
  },
};
export default {
  state,
  actions,
  mutations,
};
