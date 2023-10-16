(() => {
  const refs = {
    openModalBtn: document.querySelector("[contact-modal-open]"),
    closeModalBtn: document.querySelector("[contact-modal-close]"),
    modal: document.querySelector("[contact-modal]"),
    backdrop: document.querySelector(".bdp_con"),
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
