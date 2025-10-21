export class Popup {
  constructor(popupElement) {
    this._popupElement = popupElement;
    this._handleEscClick = this._handleEscClick.bind(this);
  }

  open() {
    this._popupElement.classList.add("popup_is-opened");
    document.addEventListener("keydown", this._handleEscClick);
  }

  close() {
    this._popupElement.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", this._handleEscClick);
  }

  _handleEscClick(evt) {
    if (evt.key === "Escape" || evt.key === "Esc") {
      this.close();
    }
  }

  setEventListeners() {
    const closeButton = this._popupElement.querySelector(
      ".popup__close-button"
    );

    if (closeButton) {
      closeButton.addEventListener("click", () => this.close());
    }

    this._popupElement.addEventListener("mousedown", (evt) => {
      if (evt.target === this._popupElement) {
        this.close();
      }
    });
  }
}
