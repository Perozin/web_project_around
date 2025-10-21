import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._popupImage = this._popupElement.querySelector(".popup__image");
    this._popupCaption = this._popupElement.querySelector(".popup__caption");
  }

  open(name, link) {
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupCaption.textContent = name;

    super.open();
  }
}
