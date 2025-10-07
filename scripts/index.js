import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { formValidation } from "./utils.js";

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

const elementTemplate = document
  .querySelector("#element-template")
  .content.querySelector(".element");

// wrappers

const cardsWrap = document.querySelector(".elements__cards");
const editFormModalWindow = document.querySelector("#edit-popup");
const editFormElement = editFormModalWindow.querySelector("#edit-profile-form");
const cardFormModalWindow = document.querySelector("#new-card-popup");
const cardFormElement = cardFormModalWindow.querySelector("#new-card-form");
const imageModalWindow = document.querySelector("#image-popup");

// buttons

const openEditFormButton = document.querySelector(".profile__edit-button");
const openCardFormButton = document.querySelector(".profile__add-button");
const closeEditFormButton = editFormModalWindow.querySelector(
  ".popup__close-button"
);
const closeCardFormButton = cardFormModalWindow.querySelector(
  ".popup__close-button"
);
const closeImageModalButton = imageModalWindow.querySelector(
  ".popup__close-button"
);

// DOm elements

const profileName = document.querySelector(".profile__name");
const profileActivity = document.querySelector(".profile__profession");
const nameInput = editFormModalWindow.querySelector(".popup__input_type_name");
const activityInput = editFormModalWindow.querySelector(
  ".popup__input_type_activity"
);
const cardNameInput = cardFormModalWindow.querySelector(
  ".popup__input_type_card-name"
);
const cardLinkInput = cardFormModalWindow.querySelector(
  ".popup__input_type_url"
);
const imageElement = imageModalWindow.querySelector(".popup__image");
const imageCaption = imageModalWindow.querySelector(".popup__caption");

document.getElementById("year").textContent = new Date().getFullYear(); // auto year

// helpers

function openModal(modal) {
  modal.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleEscClose);
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscClose);

  if (modal === cardFormModalWindow) cardFormValidate.resetValidation();
  if (modal === editFormModalWindow) profileFormValidate.resetValidation();
}

function handleEscClose(evt) {
  if (evt.key === "Escape" || evt.key === "Esc") {
    const openedModal = document.querySelector(".popup.popup_is-opened");
    if (openedModal) closeModal(openedModal);
  }
} // modal-close with ESC

function setModalCloseListeners(modal) {
  const closeButton = modal.querySelector(".popup__close-button");

  if (closeButton) {
    closeButton.addEventListener("click", () => closeModal(modal));
  }

  modal.addEventListener("mousedown", (evt) => {
    if (evt.target === modal) closeModal(modal);
  });
} // modal-close with X-button or overlay

[editFormModalWindow, cardFormModalWindow, imageModalWindow].forEach(
  setModalCloseListeners
); // applied to the three popups

const fillProfileForm = () => {
  nameInput.value = profileName.textContent;
  activityInput.value = profileActivity.textContent;
};

// handlers

const handleOpenEditModal = () => {
  fillProfileForm();
  openModal(editFormModalWindow);
};

const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileActivity.textContent = activityInput.value;

  closeModal(editFormModalWindow);
};

const handleFormCardSubmit = (evt) => {
  evt.preventDefault();

  const newCard = new Card(
    { name: cardNameInput.value, link: cardLinkInput.value },
    "#element-template",
    handlePreviewPicture
  );

  const cardElement = newCard.generateCard();
  cardsWrap.prepend(cardElement);

  closeModal(cardFormModalWindow);
  cardFormElement.reset();
};

const handlePreviewPicture = (data) => {
  imageElement.src = data.link;
  imageElement.alt = data.name;
  imageCaption.textContent = data.name;
  openModal(imageModalWindow);
};

// listeners

editFormModalWindow.addEventListener("submit", handleProfileFormSubmit);
cardFormElement.addEventListener("submit", handleFormCardSubmit);
openEditFormButton.addEventListener("click", handleOpenEditModal);
closeEditFormButton.addEventListener("click", () =>
  closeModal(editFormModalWindow)
);
openCardFormButton.addEventListener("click", () =>
  openModal(cardFormModalWindow)
);
closeCardFormButton.addEventListener("click", () =>
  closeModal(cardFormModalWindow)
);
closeImageModalButton.addEventListener("click", () =>
  closeModal(imageModalWindow)
);

// render initial cards
initialCards.forEach((data) => {
  const renderCardInitial = new Card(
    { name: data.name, link: data.link },
    "#element-template",
    handlePreviewPicture
  );
  const initialCard = renderCardInitial.generateCard();
  cardsWrap.prepend(initialCard);
});

// input-validate object call
const cardFormValidate = new FormValidator(formValidation, cardFormElement);
const profileFormValidate = new FormValidator(formValidation, editFormElement);
cardFormValidate.enableValidation();
profileFormValidate.enableValidation();
