import ModalHandler from "./ModalHandler";
import store from "../store/store";

var keyListenerModal = function(e) {
  if (e.keyCode === 27 && store.state.modalData.active) {
    ModalHandler.toggleModal();
  }
};

var regsiterKeyListner = function() {
  document.addEventListener("keyup", keyListenerModal);
};

var functions = {
  regsiterKeyListner,
};

export default functions;
