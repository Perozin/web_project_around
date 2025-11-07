class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  // Método genérico que centraliza o fetch
  _makeRequest(endpoint, method = "GET", body = null) {
    const options = {
      method,
      headers: this.headers,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    return fetch(`${this.baseUrl}${endpoint}`, options).then((res) =>
      this._handleServerResponse(res)
    );
  }

  // tratamento de resposta
  _handleServerResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(`Erro: ${res.status}`);
  }

  // Apenas chamadas otimizadas
  getInitialData() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()]);
  }

  // Usuário
  getUserInfo() {
    return this._makeRequest("/users/me");
  }

  setUserData({ name, about }) {
    return this._makeRequest("/users/me", "PATCH", { name, about });
  }

  setUserAvatar({ avatar }) {
    return this._makeRequest("/users/me/avatar", "PATCH", { avatar });
  }

  // Cards
  getInitialCards() {
    return this._makeRequest("/cards");
  }

  addCards({ name, link }) {
    return this._makeRequest("/cards", "POST", { name, link });
  }

  deleteCard(cardId) {
    return this._makeRequest(`/cards/${cardId}`, "DELETE");
  }

  // Likes
  likeCard(cardId) {
    return this._makeRequest(`/cards/${cardId}/likes`, "PUT");
  }

  dislikeCard(cardId) {
    return this._makeRequest(`/cards/${cardId}/likes`, "DELETE");
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
