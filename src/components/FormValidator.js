export class FormValidator {
  constructor(
    {
      formSelector,
      inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      inputErrorClass,
      errorClass,
    },
    formElement
  ) {
    this._formSelector = formSelector;
    this._inputSelector = inputSelector;
    this._submitButtonSelector = submitButtonSelector;
    this._inactiveButtonClass = inactiveButtonClass;
    this._inputErrorClass = inputErrorClass;
    this._errorClass = errorClass;
    this._formElement = formElement;
  }

  _checkIfInputIsValid(input) {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else if (input.type === "url" && !isImageUrl(input.value)) {
      this._showInputError(
        input,
        "A URL precisa ser de uma imagem (jpg, png, gif, etc.)"
      );
    } else {
      this._hideInputError(input);
    }
  }

  _showInputError(input, message) {
    const errorElement = this._formElement.querySelector(
      `#${input.name}-error`
    );
    input.classList.add(this._inputErrorClass);
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.classList.add(this._errorClass);
    }
  }

  _hideInputError(input) {
    const errorElement = this._formElement.querySelector(
      `#${input.name}-error`
    );
    input.classList.remove(this._inputErrorClass);
    if (errorElement) {
      errorElement.textContent = "";
      errorElement.classList.remove(this._errorClass);
    }
  }

  _checkIfInputIsValid(input) {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else if (input.type === "url" && !this._isImageUrl(input.value)) {
      this._showInputError(
        input,
        "A URL precisa ser de uma imagem (jpg, png, gif, etc.)"
      );
    } else {
      this._hideInputError(input);
    }
  }

  _isImageUrl(url) {
    const regex = /\.(jpeg|jpg|gif|png|webp|bmp|svg)(\?.*)?$/i;
    return regex.test(url) || url.includes("images.unsplash.com");
  }

  _hasInvalidInput() {
    return this._inputList.some(
      (input) =>
        !input.validity.valid ||
        (input.type === "url" && !this._isImageUrl(input.value))
    );
  }

  _toggleSubmitButtonState() {
    if (this._hasInvalidInput()) {
      this._submitButtonElement.disabled = true;
      this._submitButtonElement.classList.add(this._inactiveButtonClass);
    } else {
      this._submitButtonElement.disabled = false;
      this._submitButtonElement.classList.remove(this._inactiveButtonClass);
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._submitButtonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );
    this._toggleSubmitButtonState();

    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkIfInputIsValid(input);
        this._toggleSubmitButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }

  resetValidation() {
    this._inputList.forEach((input) => {
      this._hideInputError(input);
      input.value = "";
    });
    this._toggleSubmitButtonState();
  }
}
