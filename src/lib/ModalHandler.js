var activeModal = false;

function toggleModal(index) {
  console.log(index);

  if (activeModal) activeModal = false;
  else activeModal = index;

  const body = document.querySelector("body");
  const modal = document.querySelector("." + index);
  modal.classList.toggle("opacity-0");
  modal.classList.toggle("pointer-events-none");
  body.classList.toggle("modal-active");
}

function keyListenerModal(e) {
  if (e.keyCode === 27 && activeModal) {
    toggleModal(activeModal);
    console.log(activeModal);
  }
}

document.addEventListener("keyup", keyListenerModal);

module.exports.toggleModal = toggleModal;
