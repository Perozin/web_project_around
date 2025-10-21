export class Card {
  constructor(data, cardSelector, handleImageClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _getTemplate() {
    const template = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return template;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => this._handleLikeIcon());

    this._deleteButton.addEventListener("click", () =>
      this._handleDeleteCard()
    );

    this._imageElement.addEventListener("click", () => {
      this._handleImageClick(this._name, this._link);
    });
  }

  _handleLikeIcon() {
    this._likeButton.classList.toggle("element__like-button_active");
  }

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._imageElement = this._element.querySelector(".element__image");
    this._likeButton = this._element.querySelector(".element__like-button");
    this._deleteButton = this._element.querySelector(".element__delete-button");

    this._element.querySelector(".element__title").textContent = this._name;
    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;

    this._setEventListeners();

    return this._element;
  }
}
