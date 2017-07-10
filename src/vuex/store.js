  import vue from 'vue';
  import Vuex from 'vuex';
  vue.use(Vuex);

  const state = {
      count: 3
  };

  const mutations = {
    add(state, n) {
        state.count += n;
    },
    reduce(state) {
        state.count --;
    }
  };

  const getters = {
        count: state => (state.count += 100)
  };

  const actions = {
    addAction(context) {
        context.commit('add', 50);
        setTimeout(() => {
            context.commit('reduce');
        }, 3000);
    },
    reduceAction({commit}) {
        commit('reduce');
    }
  };

  const moduleA = {
      state,
      mutations,
      getters,
      actions
  };

  export default new Vuex.Store({
      modules: {a: moduleA}
  });
