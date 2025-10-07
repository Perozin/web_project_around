import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { formValidation } from "./utils.js";
import { openModal, closeModal, setModalCloseListeners } from "./utils.js";

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

const cardsWrap = document.querySelector(".elements__cards");
const editFormModalWindow = document.querySelector("#edit-popup");
const cardFormModalWindow = document.querySelector("#new-card-popup");
const imageModalWindow = document.querySelector("#image-popup");

const editFormElement = editFormModalWindow.querySelector("#edit-profile-form");
const cardFormElement = cardFormModalWindow.querySelector("#new-card-form");

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

// footer auto year
document.getElementById("year").textContent = new Date().getFullYear();

const cardFormValidate = new FormValidator(formValidation, cardFormElement);
const profileFormValidate = new FormValidator(formValidation, editFormElement);
cardFormValidate.enableValidation();
profileFormValidate.enableValidation();

setModalCloseListeners(
  editFormModalWindow,
  profileFormValidate.resetValidation.bind(profileFormValidate)
);
setModalCloseListeners(
  cardFormModalWindow,
  cardFormValidate.resetValidation.bind(cardFormValidate)
);
setModalCloseListeners(imageModalWindow);

const fillProfileForm = () => {
  nameInput.value = profileName.textContent;
  activityInput.value = profileActivity.textContent;
};

openEditFormButton.addEventListener("click", () => {
  fillProfileForm();
  openModal(editFormModalWindow);
});

openCardFormButton.addEventListener("click", () =>
  openModal(cardFormModalWindow)
);

closeEditFormButton.addEventListener("click", () =>
  closeModal(
    editFormModalWindow,
    profileFormValidate.resetValidation.bind(profileFormValidate)
  )
);
closeCardFormButton.addEventListener("click", () =>
  closeModal(
    cardFormModalWindow,
    cardFormValidate.resetValidation.bind(cardFormValidate)
  )
);
closeImageModalButton.addEventListener("click", () =>
  closeModal(imageModalWindow)
);

editFormElement.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileActivity.textContent = activityInput.value;
  closeModal(
    editFormModalWindow,
    profileFormValidate.resetValidation.bind(profileFormValidate)
  );
});

const handlePreviewPicture = (data) => {
  imageElement.src = data.link;
  imageElement.alt = data.name;
  imageCaption.textContent = data.name;
  openModal(imageModalWindow);
};

const renderCard = (data) => {
  const newCard = new Card(data, "#element-template", handlePreviewPicture);
  const cardElement = newCard.generateCard();
  cardsWrap.prepend(cardElement);
};

initialCards.forEach(renderCard);

cardFormElement.addEventListener("submit", (evt) => {
  evt.preventDefault();
  renderCard({ name: cardNameInput.value, link: cardLinkInput.value });
  closeModal(
    cardFormModalWindow,
    cardFormValidate.resetValidation.bind(cardFormValidate)
  );
});
