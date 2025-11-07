class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getInitialData() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()]);
  }

  _handleServerResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(`Erro: ${res.status}`);
  }

  // Usuário
  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, { headers: this.headers }).then(
      (res) => this._handleServerResponse(res)
    );
  }

  setUserData({ name, about }) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({ name, about }),
    }).then((res) => this._handleServerResponse(res));
  }

  setUserAvatar({ avatar }) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({ avatar }),
    }).then((res) => this._handleServerResponse(res));
  }

  // Cards
  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, { headers: this.headers }).then(
      (res) => this._handleServerResponse(res)
    );
  }

  addCards({ name, link }) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({ name, link }),
    }).then((res) => this._handleServerResponse(res));
  }

  deleteCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    }).then((res) => this._handleServerResponse(res));
  }

  // Likes
  likeCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this.headers,
    }).then((res) => this._handleServerResponse(res));
  }

  dislikeCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this.headers,
    }).then((res) => this._handleServerResponse(res));
  }
}

// Estância da Api.js
export const api = new Api({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
  headers: {
    authorization: "80bec454-e86a-45fb-87e6-90e02b604577",
    "Content-Type": "application/json",
  },
});

// class Api {
//   constructor({ baseUrl, headers }) {
//     this.baseUrl = baseUrl;
//     this.headers = headers;
//   }

//   getInitialData() {
//     return Promise.all([this.getUserInfo(), this.getInitialCards()]);
//   }

//   _handleServerResponse(res) {
//     if (res.ok) return res.json();
//     return Promise.reject(`Erro: ${res.status}`);
//   }

//   // Usuário
//   getUserInfo() {
//     return fetch(`${this.baseUrl}/users/me`, { headers: this.headers }).then(
//       (res) => this._handleServerResponse(res)
//     );
//   }

//   setUserData({ name, about }) {
//     return fetch(`${this.baseUrl}/users/me`, {
//       method: "PATCH",
//       headers: this.headers,
//       body: JSON.stringify({ name, about }),
//     }).then((res) => this._handleServerResponse(res));
//   }

//   setUserAvatar({ avatar }) {
//     return fetch(`${this.baseUrl}/users/me/avatar`, {
//       method: "PATCH",
//       headers: this.headers,
//       body: JSON.stringify({ avatar }),
//     }).then((res) => this._handleServerResponse(res));
//   }

//   // Cards
//   getInitialCards() {
//     return fetch(`${this.baseUrl}/cards`, { headers: this.headers }).then(
//       (res) => this._handleServerResponse(res)
//     );
//   }

//   addCards({ name, link }) {
//     return fetch(`${this.baseUrl}/cards`, {
//       method: "POST",
//       headers: this.headers,
//       body: JSON.stringify({ name, link }),
//     }).then((res) => this._handleServerResponse(res));
//   }

//   deleteCard(cardId) {
//     return fetch(`${this.baseUrl}/cards/${cardId}`, {
//       method: "DELETE",
//       headers: this.headers,
//     }).then((res) => this._handleServerResponse(res));
//   }

//   // Likes
//   likeCard(cardId) {
//     return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
//       method: "PUT",
//       headers: this.headers,
//     }).then((res) => this._handleServerResponse(res));
//   }

//   dislikeCard(cardId) {
//     return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
//       method: "DELETE",
//       headers: this.headers,
//     }).then((res) => this._handleServerResponse(res));
//   }
// }

// // Estância da Api.js
// export const api = new Api({
//   baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
//   headers: {
//     authorization: "80bec454-e86a-45fb-87e6-90e02b604577",
//     "Content-Type": "application/json",
//   },
// });
