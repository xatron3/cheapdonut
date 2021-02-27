import store from "../store/store";

function sortProjects(type) {
  switch (type) {
    case "latest":
      store.state.projects.sort(function(x, y) {
        return y.createdAt - x.createdAt;
      });
      break;
    case "oldest":
      store.state.projects.sort(function(x, y) {
        return x.createdAt - y.createdAt;
      });
      break;
    default:
      store.state.projects.sort(function(x, y) {
        return y.endDate - x.endDate;
      });
      break;
  }
}

export default {
  sortProjects,
};
