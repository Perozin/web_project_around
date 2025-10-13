export const formValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_visible",
};

export function openModal(modal) {
  modal.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleEscClose);
}

export function closeModal(modal, resetFormCallback) {
  modal.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscClose);

  if (resetFormCallback) resetFormCallback();
}

function handleEscClose(evt) {
  if (evt.key === "Escape" || evt.key === "Esc") {
    const openedModal = document.querySelector(".popup.popup_is-opened");
    if (openedModal) closeModal(openedModal);
  }
}

export function setModalCloseListeners(modal, resetFormCallback) {
  const closeButton = modal.querySelector(".popup__close-button");

  if (closeButton) {
    closeButton.addEventListener("click", () =>
      closeModal(modal, resetFormCallback)
    );
  }

  modal.addEventListener("mousedown", (evt) => {
    if (evt.target === modal) closeModal(modal, resetFormCallback);
  });
}
