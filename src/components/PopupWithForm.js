import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupElement, handleFormSubmit, formValidatorInstance) {
    super(popupElement);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupElement.querySelector(".popup__form");
    this._formValidator = formValidatorInstance;

    this._inputList = this._form.querySelectorAll(".popup__input");
    this._submitButton = this._form.querySelector(".popup__button");
    this._defaultButtonText = this._submitButton.textContent;
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();

      // Botão de loading
      this.renderLoading(true);

      // Executa o callback e garante o fechamento do popup
      this._handleFormSubmit(this._getInputValues())
        .then(() => this.close())
        .catch((err) => console.error("Erro ao salvar:", err))
        .finally(() => this.renderLoading(false));
    });
  }

  open() {
    super.open();

    if (this._submitButton) {
      this._submitButton.textContent = this._defaultButtonText || "Salvar";
      this._submitButton.disabled = false;
    }
  }

  close() {
    super.close();
    this._form.reset();
    if (this._formValidator) {
      this._formValidator.resetValidation();
    }
  }

  // renderLoading(isLoading, loadingText = "Salvando...") {
  //   if (isLoading) {
  //     this._submitButton.textContent = loadingText;
  //     this._submitButton.disabled = true;
  //   } else {
  //     this._submitButton.textContent = this._defaultButtonText;
  //     this._submitButton.disabled = false;
  //   }
  // }
  renderLoading(isLoading, loadingText = "Salvando...") {
    if (!this._submitButton) return;

    if (isLoading) {
      // Salva texto atual para restaurar depois
      if (!this._defaultButtonText) {
        this._defaultButtonText = this._submitButton.textContent;
      }
      this._submitButton.textContent = loadingText;
      this._submitButton.disabled = true;
    } else {
      this._submitButton.textContent = this._defaultButtonText || "Salvar";
      this._submitButton.disabled = false;
    }
  }
}
