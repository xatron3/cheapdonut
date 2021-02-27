import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      accountAdress: 0,
    };
  },
  mutations: {
    setAdress(state, adress) {
      state.accountAdress = adress;
    },
  },
});

export default store;
