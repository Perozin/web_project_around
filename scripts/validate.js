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

function checkIfInputIsValid(input, inputErrorClass, errorClass) {
  if (!input.validity.valid) {
    showInputError(input, input.validationMessage, inputErrorClass, errorClass);
  } else if (input.type === "url" && !isImageUrl(input.value)) {
    showInputError(
      input,
      "A URL precisa ser de uma imagem (jpg, png, gif, etc.)",
      inputErrorClass,
      errorClass
    );
  } else {
    hideInputError(input, inputErrorClass, errorClass);
  }
}

function isImageUrl(url) {
  const regex = /\.(jpeg|jpg|gif|png|webp|bmp|svg)(\?.*)?$/i;
  return regex.test(url) || url.includes("images.unsplash.com");
}

function showInputError(input, message, inputErrorClass, errorClass) {
  const errorElement = input.nextElementSibling;
  input.classList.add(inputErrorClass);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.classList.add(errorClass);
  }
}

function hideInputError(input, inputErrorClass, errorClass) {
  const errorElement = input.nextElementSibling;
  input.classList.remove(inputErrorClass);
  if (errorElement) {
    errorElement.textContent = "";
    errorElement.classList.remove(errorClass);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some(
    (input) =>
      !input.validity.valid ||
      (input.type === "url" && !isImageUrl(input.value))
  );
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

function resetValidate({
  formSelector,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass,
}) {
  const formElements = document.querySelectorAll(formSelector);

  formElements.forEach((form) => {
    form.reset();

    const inputList = Array.from(form.querySelectorAll(inputSelector));
    const submitButtonElement = form.querySelector(submitButtonSelector);

    inputList.forEach((input) => {
      hideInputError(input, inputErrorClass, errorClass);

      toggleSubmitButtonState(
        inputList,
        submitButtonElement,
        inactiveButtonClass
      );
    });
  });
}

export { resetValidate };
