const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

// template

// ***** contróie os elementos cards de forma otimizada
const elementTemplate = document
  .querySelector("#element-template")
  .content.querySelector(".element");

// wrappers vars

// ***** ul / li => cardsWrap / elements__cards (cards__list)
const cardsWrap = document.querySelector(".elements__cards");

// ***** div popup principal (1280x750)
const editFormModalWindow = document.querySelector("#edit-popup");

// ***** div popup principal (1280x750)
const cardFormModalWindow = document.querySelector("#new-card-popup");

// ***** formulário com dois campos
const cardFormElement = cardFormModalWindow.querySelector(".popup__form");

// ***** div popup principal (1280x750)
const imageModalWindow = document.querySelector("#image-popup");

// buttons vars

// ****** variável html do botão edit do perfil
const openEditFormButton = document.querySelector(".profile__edit-button");

// ****** variável html do botão add_card do perfil
const openCardFormButton = document.querySelector(".profile__add-button");

// ****** variável html do botão X do form-popup-edit (popup__close)
const closeEditFormButton = editFormModalWindow.querySelector(
  ".popup__close-button"
);

// ****** variável html do botão X do form-popup-card
const closeCardFormButton = cardFormModalWindow.querySelector(
  ".popup__close-button"
);
// ****** variável html do botão X do form-popup-image do html
const closeImageModalButton = imageModalWindow.querySelector(
  ".popup__close-button"
);

// profile block vars

// ***** variável armazena o elemento texto nome do bloco profile
const profileName = document.querySelector(".profile__name");

// ***** variável armazena o elemento texto profissão do bloco profile
const profileActivity = document.querySelector(".profile__profession");

// form inputs vars

// ***** variável armazena o texto nome do formulário popup-edit html
const nameInput = editFormModalWindow.querySelector(".popup__input_type_name");

// ***** variável armazena o texto atividade do formulário popup html
const activityInput = editFormModalWindow.querySelector(
  ".popup__input_type_activity"
);

// ***** variável armazena o texto nome-card do formulário popup-card html
const cardNameInput = cardFormModalWindow.querySelector(
  ".popup__input_type_card-name"
);

// ***** variável armazena o texto URL do formulário popup-card html
const cardLinkInput = cardFormModalWindow.querySelector(
  ".popup__input_type_url"
);

// ***** variável armazena imagem do formulário popup-image html
const imageElement = imageModalWindow.querySelector(".popup__image");

// ***** variável armazena o texto do caption do popup-image html
const imageCaption = imageModalWindow.querySelector(".popup__caption");

// year auto

// ***** obtém o ano atual.
document.getElementById("year").textContent = new Date().getFullYear();

// helpers

// função abre modal
function openModal(modal) {
  modal.classList.add("popup_is-opened");
}

// função fecha modal
function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

// card constructor

// função constrói o elemento card com imagem, descrição, botões delete e like
const getCardElement = (data) => {
  // clona o template html com todos elementos filhos
  const cardElement = elementTemplate.cloneNode(true);

  // card__like-button
  const likeButton = cardElement.querySelector(".element__like-button");

  // card__delete-button
  const deleteButton = cardElement.querySelector(".element__delete-button");

  // card__image
  const cardImage = cardElement.querySelector(".element__image");

  // card__title
  const cardTitle = cardElement.querySelector(".element__title");

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

  // ouvidor de eventos do botão like
  likeButton.addEventListener("click", handleLikeIcon);

  // ouvidor de eventos do botão delete imagem
  deleteButton.addEventListener("click", handleDeleteCard);

  // ouvidor de eventos do botão add imagem
  cardImage.addEventListener("click", () => handlePreviewPicture(data));

  return cardElement;
};

// // abre o modal
// function openModal(modal) {
//   modal.classList.add("popup_is-opened");
// }

// // fecha o modal
// function closeModal(modal) {
//   modal.classList.remove("popup_is-opened");
// }

// handlers

// preenche o formulário do perfil
const fillProfileForm = () => {
  nameInput.value = profileName.textContent;
  activityInput.value = profileActivity.textContent;
};

// o usuário clica edit-button para abrir modal-form que é preenchido com os dados do perfil html
const handleOpenEditModal = () => {
  fillProfileForm();
  openModal(editFormModalWindow);
};

// usuário clica no submit-button que fecha o modal-form e carrega os dados no perfil
const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileActivity.textContent = activityInput.value;
  closeModal(editFormModalWindow);
};

// usuário clica no like-ícone para alterar seu comportamento
const handleLikeIcon = (evt) => {
  evt.target.classList.toggle("element__like-button_active");
};

// usuário clica no delete-ícone para remover o elemento card
const handleDeleteCard = (evt) => {
  evt.target.closest(".element").remove();
};

// usuário clica no add-button para prévisualizar imagem com as informações
const handlePreviewPicture = (data) => {
  imageElement.src = data.link;
  imageElement.alt = data.name;
  imageCaption.textContent = data.name;
  openModal(imageModalWindow);
};

// usuário clica no submit-button para add novo elemento card com as informações no wrap ul, resetar os campos e fechar o modal.
const handleFormCardSubmit = (evt) => {
  evt.preventDefault();
  renderCard(
    { name: cardNameInput.value, link: cardLinkInput.value },
    cardsWrap
  );
  closeModal(cardFormModalWindow);
  cardFormElement.reset();
};

// renderiza os cards na tela
const renderCard = (data, wrap) => {
  wrap.prepend(getCardElement(data));
};

// listeners

//document.querySelector("#new-card-form").addEventListener("submit", handleProfileFormSubmit); //

// ouvidor de evento submit-button do form-edit-modal
// editFormModaWindow.addEventListener("submit", handleProfileFormSubmit);

// xxx
editFormModalWindow.addEventListener("submit", handleProfileFormSubmit);

// ouvidor de evento submit-button do form-modal-card
cardFormElement.addEventListener("submit", handleFormCardSubmit);

// ouvidor de evento click do usuário para abrir o profile__edit-button
openEditFormButton.addEventListener("click", handleOpenEditModal);

// ouvidor de evento click do usuário para fechar o #edit-modal
closeEditFormButton.addEventListener("click", () =>
  closeModal(editFormModalWindow)
);

// ouvidor de evento click do usuário para abrir o #card-modal
openCardFormButton.addEventListener("click", () =>
  openModal(cardFormModalWindow)
);

// ouvidor de evento click do usuário para fechar o #card-modal
closeCardFormButton.addEventListener("click", () =>
  closeModal(cardFormModalWindow)
);

// ouvidor de evento click do usuário para fechar o #image-modal
closeImageModalButton.addEventListener("click", () =>
  closeModal(imageModalWindow)
);

// render initial cards

initialCards.forEach((data) => renderCard(data, cardsWrap));
