import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleConfirm) {
    super(popupSelector);
    this._handleConfirm = handleConfirm;
    this._form = this._popupElement.querySelector("form");
    this._confirmButton = this._form.querySelector(".popup__button_confirm");
  }

  open(cardId, cardInstance) {
    this._cardId = cardId;
    this._cardInstance = cardInstance;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();

      if (!this._cardId) return;

      // Mostra “Salvando...” enquanto exclui
      this.renderLoading(true);

      this._handleConfirm(this._cardId, this._cardInstance)
        .then(() => {
          this.close();
        })
        .catch((err) => {
          console.error("Erro ao excluir card:", err);
        })
        .finally(() => {
          this.renderLoading(false);
        });
    });
  }

  renderLoading(isLoading) {
    if (this._confirmButton) {
      this._confirmButton.textContent = isLoading ? "Excluindo..." : "Sim";
    }
  }

  close() {
    super.close();
    this._cardId = null;
    this._cardInstance = null;
  }
}
