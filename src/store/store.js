import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      accountAdress: 0,
      projects: [],
      modalData: {
        title: "Default title",
        content: "default",
        active: false,
      },
    };
  },
  mutations: {
    setAdress(state, adress) {
      state.accountAdress = adress;
    },
    addProject(state, project) {
      state.projects.push(project);
    },
    setModalData(state, data) {
      state.modalData.title = data.title;
      state.modalData.content = data.content;
    },
    setModalActive(state, bool) {
      state.modalData.active = bool;
    },
  },
});

export default store;
