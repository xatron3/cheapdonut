import store from "../store/store";

class ModalHandler {
  constructor(title = "Default", content = "default") {
    var data = {
      title: title,
      content: content,
    };

    store.commit("setModalData", data);
  }

  static toggleModal() {
    if (store.state.modalData.active) store.commit("setModalActive", false);
    else store.commit("setModalActive", true);

    const body = document.querySelector("body");
    const modal = document.querySelector(".modal");
    modal.classList.toggle("opacity-0");
    modal.classList.toggle("pointer-events-none");
    body.classList.toggle("modal-active");
  }
}

export default ModalHandler;
