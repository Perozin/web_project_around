export class Card {
  constructor(data, cardSelector, handleImageClick) {
    this._name = data.name;
    this._link = data.link;
    this._handleImageClick = handleImageClick;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const template = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return template;
  }

  generateCard() {
    this._cardElement = this._getTemplate();

    this._cardImage = this._cardElement.querySelector(".element__image");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._cardTitle = this._cardElement.querySelector(".element__title");
    this._cardTitle.textContent = this._name;

    this._likeButton = this._cardElement.querySelector(".element__like-button");
    this._deleteButton = this._cardElement.querySelector(
      ".element__delete-button"
    );

    this._setEventListeners();

    return this._cardElement;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeIcon();
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteCard();
    });

    this._cardImage.addEventListener("click", () =>
      this._handleImageClick({ name: this._name, link: this._link })
    );
  }

  _handleLikeIcon() {
    this._likeButton.classList.toggle("element__like-button_active");
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }
}
