export class Card {
  constructor(
    data,
    cardSelector,
    handleImageClick,
    { api, userInfo },
    popupConfirmDelete
  ) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._isLiked = data.isLiked || false;
    this._ownerId = data.owner;
    this._userId = userInfo?.getUserId ? userInfo.getUserId() : null;

    this._api = api;
    this._popupConfirmDelete = popupConfirmDelete;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;

    this._element = this._getTemplate();

    this._imageElement = this._element.querySelector(".element__image");
    this._titleElement = this._element.querySelector(".element__title");
    this._likeButton = this._element.querySelector(".element__like-button");
    this._deleteButton = this._element.querySelector(".element__delete-button");
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
  }

  // Atualiza a aparência do botão de like
  _updateLikeState() {
    if (this._likeButton) {
      if (this._isLiked) {
        this._likeButton.classList.add("element__like-button_active");
      } else {
        this._likeButton.classList.remove("element__like-button_active");
      }
    }
  }

  // Lida com o clique no botão de like (PUT/DELETE)
  _handleLike() {
    const request = this._isLiked
      ? this._api.dislikeCard(this._id)
      : this._api.likeCard(this._id);

    request
      .then((updatedCard) => {
        this._isLiked = updatedCard.isLiked; // atualiza com o valor vindo da API
        this._updateLikeState();
      })
      .catch((err) => console.error("Erro ao atualizar like:", err));
  }

  // Abre popup de confirmação para excluir
  _handleDelete() {
    this._popupConfirmDelete.open(this._id, this);
  }

  // Remove o card do DOM
  removeCard() {
    if (this._element) {
      this._element.remove();
      this._element = null;
    }
  }

  // Define os eventos
  _setEventListeners() {
    if (this._likeButton) {
      this._likeButton.addEventListener("click", () => this._handleLike());
    }

    if (this._deleteButton) {
      if (!this._ownerId || this._ownerId !== this._userId) {
        this._deleteButton.style.display = "none";
      } else {
        this._deleteButton.addEventListener("click", () =>
          this._handleDelete()
        );
      }
    }

    if (this._imageElement) {
      this._imageElement.addEventListener("click", () =>
        this._handleImageClick(this._name, this._link)
      );
    }
  }

  // Cria o card na tela
  generateCard() {
    if (this._imageElement) {
      this._imageElement.src = this._link;
      this._imageElement.alt = this._name;
    }

    if (this._titleElement) {
      this._titleElement.textContent = this._name;
    }

    this._updateLikeState();
    this._setEventListeners();

    return this._element;
  }
}

// export class Card {
//   constructor(
//     data,
//     cardSelector,
//     handleImageClick,
//     { api, userInfo },
//     popupConfirmDelete
//   ) {
//     this._data = data;
//     this._name = data.name;
//     this._link = data.link;
//     this._id = data._id;
//     this._isLiked = data.isLiked || false;
//     this._ownerId = data.owner;
//     this._userId = userInfo?.getUserId ? userInfo.getUserId() : null;

//     this._api = api;
//     this._popupConfirmDelete = popupConfirmDelete;
//     this._cardSelector = cardSelector;
//     this._handleImageClick = handleImageClick;

//     this._element = this._getTemplate();

//     this._imageElement = this._element.querySelector(".element__image");
//     this._titleElement = this._element.querySelector(".element__title");
//     this._likeButton = this._element.querySelector(".element__like-button");
//     this._deleteButton = this._element.querySelector(".element__delete-button");
//   }

//   _getTemplate() {
//     return document
//       .querySelector(this._cardSelector)
//       .content.querySelector(".element")
//       .cloneNode(true);
//   }

//   // Atualiza a aparência do botão de like
//   _updateLikeState() {
//     if (this._likeButton) {
//       if (this._isLiked) {
//         this._likeButton.classList.add("element__like-button_active");
//       } else {
//         this._likeButton.classList.remove("element__like-button_active");
//       }
//     }
//   }

//   // Lida com o clique no botão de like (PUT/DELETE)
//   _handleLike() {
//     const request = this._isLiked
//       ? this._api.dislikeCard(this._id)
//       : this._api.likeCard(this._id);

//     request
//       .then((updatedCard) => {
//         this._isLiked = updatedCard.isLiked; // atualiza com o valor vindo da API
//         this._updateLikeState();
//       })
//       .catch((err) => console.error("Erro ao atualizar like:", err));
//   }

//   // Abre popup de confirmação para excluir
//   _handleDelete() {
//     this._popupConfirmDelete.open(this._id, this);
//   }

//   removeCard() {
//     if (this._element) {
//       this._element.remove();
//       this._element = null;
//     }
//   }

//   // Define os eventos
//   _setEventListeners() {
//     if (this._likeButton) {
//       this._likeButton.addEventListener("click", () => this._handleLike());
//     }

//     if (this._deleteButton) {
//       if (!this._ownerId || this._ownerId !== this._userId) {
//         this._deleteButton.style.display = "none";
//       } else {
//         this._deleteButton.addEventListener("click", () =>
//           this._handleDelete()
//         );
//       }
//     }

//     if (this._imageElement) {
//       this._imageElement.addEventListener("click", () =>
//         this._handleImageClick(this._name, this._link)
//       );
//     }
//   }

//   // Cria o card na tela
//   generateCard() {
//     if (this._imageElement) {
//       this._imageElement.src = this._link;
//       this._imageElement.alt = this._name;
//     }

//     if (this._titleElement) {
//       this._titleElement.textContent = this._name;
//     }

//     this._updateLikeState();
//     this._setEventListeners();

//     return this._element;
//   }
// }
