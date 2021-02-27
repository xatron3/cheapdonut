import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      accountAdress: 0,
      projects: [],
    };
  },
  mutations: {
    setAdress(state, adress) {
      state.accountAdress = adress;
    },
    addProject(state, project) {
      state.projects.push(project);
    },
  },
});

export default store;
