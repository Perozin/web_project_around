import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupElement, handleFormSubmit, formValidatorInstance) {
    super(popupElement);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupElement.querySelector(".popup__form");
    this._formValidator = formValidatorInstance;
  }

  _getInputValues() {
    const inputList = this._form.querySelectorAll(".popup__input");
    const formValues = {};

    inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });

    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();

    if (this._formValidator) {
      this._formValidator.resetValidation();
    }
  }
}
