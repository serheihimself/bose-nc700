(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    backdrop: document.querySelector(".backdrop"),
  };

  refs.openModalBtns.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

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
