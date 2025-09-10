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

// elements DOM

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

// year auto
document.getElementById("year").textContent = new Date().getFullYear();

// helpers

function openModal(modal) {
  modal.classList.add("popup_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

function enableModalClose(modal) {
  const closeButton = modal.querySelector(".popup__button-close");
  // botão X
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      closeModal(modal);
    });
  }
  // overlay
  modal.addEventListener("click", (evt) => {
    if (evt.target === modal) {
      closeModal(modal);
    }
  });
}
// tecla ESC
document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape" || evt.key === "Esc") {
    const openedModal = document.querySelector(".popup.popup_is-opened");
    if (openedModal) {
      closeModal(openedModal);
    }
  }
});

enableModalClose(editFormModalWindow);
enableModalClose(cardFormModalWindow);
enableModalClose(imageModalWindow);

const getCardElement = (data) => {
  const cardElement = elementTemplate.cloneNode(true);
  const likeButton = cardElement.querySelector(".element__like-button");
  const deleteButton = cardElement.querySelector(".element__delete-button");
  const cardImage = cardElement.querySelector(".element__image");
  const cardTitle = cardElement.querySelector(".element__title");

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

  likeButton.addEventListener("click", handleLikeIcon);
  deleteButton.addEventListener("click", handleDeleteCard);
  cardImage.addEventListener("click", () => handlePreviewPicture(data));

  return cardElement;
};

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

  editFormModalWindow.querySelectorAll(".popup__error").forEach((span) => {
    span.textContent = "";
  });

  editFormModalWindow.querySelectorAll(".popup__input").forEach((input) => {
    input.classList.remove("popup__input_invalid");
  });
};

const handleFormCardSubmit = (evt) => {
  evt.preventDefault();

  const inputList = Array.from(
    cardFormElement.querySelectorAll(".popup__input")
  );
  const isFormValid = !hasInvalidInput(inputList);

  if (!isFormValid) {
    inputList.forEach((input) => {
      checkIfInputIsValid(
        input,
        "popup__input_type_error",
        "popup__input-error_visible"
      );
    });

    return;
  }
  renderCard(
    { name: cardNameInput.value, link: cardLinkInput.value },
    cardsWrap
  );

  closeModal(cardFormModalWindow);

  cardFormElement.reset();

  cardFormElement.querySelectorAll(".popup__error").forEach((span) => {
    span.textContent = "";
  });

  cardFormElement.querySelectorAll(".popup__input").forEach((input) => {
    input.classList.remove("popup__input_invalid");
  });
};

const handleLikeIcon = (evt) => {
  evt.target.classList.toggle("element__like-button_active");
};

const handleDeleteCard = (evt) => {
  evt.target.closest(".element").remove();
};

const handlePreviewPicture = (data) => {
  imageElement.src = data.link;
  imageElement.alt = data.name;
  imageCaption.textContent = data.name;
  openModal(imageModalWindow);
};

const renderCard = (data, wrap) => {
  wrap.prepend(getCardElement(data));
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
initialCards.forEach((data) => renderCard(data, cardsWrap));
