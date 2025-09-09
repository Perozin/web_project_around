enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_visible",
});

function enableValidation({
  formSelector,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass,
}) {
  const formElements = document.querySelectorAll(formSelector);

  formElements.forEach((form) => {
    const inputList = Array.from(form.querySelectorAll(inputSelector));
    const submitButtonElement = form.querySelector(submitButtonSelector);

    toggleSubmitButtonState(
      inputList,
      submitButtonElement,
      inactiveButtonClass
    );

    inputList.forEach((input) => {
      input.addEventListener("input", () => {
        checkIfInputIsValid(input, inputErrorClass, errorClass);
        toggleSubmitButtonState(
          inputList,
          submitButtonElement,
          inactiveButtonClass
        );
      });
    });
  });
}

function hasInvalidInput(inputList) {
  const hasInvalidInput = inputList.some((input) => !input.validity.valid);
  return hasInvalidInput;
}

function toggleSubmitButtonState(
  inputList,
  submitButtonElement,
  inactiveButtonClass
) {
  if (hasInvalidInput(inputList)) {
    submitButtonElement.disabled = true;
    submitButtonElement.classList.add(inactiveButtonClass);
  } else {
    submitButtonElement.disabled = false;
    submitButtonElement.classList.remove(inactiveButtonClass);
  }
}
