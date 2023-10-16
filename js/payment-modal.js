(() => {
  const refs = {
    openModalBtn: document.querySelector("[payment-modal-open]"),
    closeModalBtn: document.querySelector("[payment-modal-close]"),
    modal: document.querySelector("[payment-modal]"),
    backdrop: document.querySelector(".backdrop"),
  };

  refs.openModalBtn.addEventListener("click", openModal);
  refs.closeModalBtn.addEventListener("click", closeModal);
  refs.backdrop.addEventListener("click", onBackdropClick);
  window.addEventListener("keydown", onKeyPress);

  function openModal() {
    refs.modal.classList.remove("is-hidden");
    document.body.classList.add("scroll-lock");
  }

  function closeModal() {
    refs.modal.classList.add("is-hidden");
    document.body.classList.remove("scroll-lock");
  }

  function onKeyPress(event) {
    if (event.code === "Escape") {
      closeModal();
    }
  }

  function onBackdropClick(event) {
    if (event.target === refs.backdrop) {
      closeModal();
    }
  }
})();
