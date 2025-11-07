export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;

    this._container = document.querySelector(containerSelector);
  }

  // Renderiza todos os itens na tela
  renderItems() {
    this.clear();

    // O renderer retorna o elemento,
    // e o Section é responsável por adicioná-lo no container
    this._renderedItems.forEach((item) => {
      const element = this._renderer(item);
      this.addItem(element);
    });
  }

  // Limpa todos os elementos do container
  clear() {
    this._container.innerHTML = "";
  }

  // Adiciona o elemento no início do container (prepend)
  addItem(element) {
    this._container.prepend(element);
  }
}
