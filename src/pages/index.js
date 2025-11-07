// -------------------- Imports --------------------
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";
import { UserInfo } from "../components/UserInfo.js";
import { FormValidator } from "../components/FormValidator.js";
import { api } from "../components/Api.js";
import { validationConfig } from "../utils/utils.js";
import {
  profileEditButton,
  profileAddButton,
  avatarEditButton,
  profileName,
  profileProfession,
  profileAvatar,
  nameInput,
  jobInput,
  popupEditProfile,
  popupAddCard,
  popupImageView,
  popupAvatarElement,
  profileImageWrapper,
  popupConfirmDeleteElement,
} from "../utils/constants.js";

// -------------------- Auto footer year --------------------
document.getElementById("year").textContent = new Date().getFullYear();

// -------------------- Instâncias principais --------------------

// User
const userInfo = new UserInfo({
  nameSelector: profileName,
  jobSelector: profileProfession,
  avatarSelector: profileAvatar,
});

// Validators
const editProfileValidator = new FormValidator(
  validationConfig,
  popupEditProfile.querySelector("form")
);
editProfileValidator.enableValidation();

const addCardValidator = new FormValidator(
  validationConfig,
  popupAddCard.querySelector("form")
);
addCardValidator.enableValidation();

let avatarValidator = null;
if (popupAvatarElement) {
  avatarValidator = new FormValidator(
    validationConfig,
    popupAvatarElement.querySelector("form")
  );
  avatarValidator.enableValidation();
}

// -------------------- Popups --------------------

// Popup de imagem
const imagePopup = new PopupWithImage(popupImageView);
imagePopup.setEventListeners();

// Popup de confirmação de exclusão
const popupConfirmDelete = new PopupWithConfirmation(
  popupConfirmDeleteElement,
  (cardId, cardInstance) => {
    return api
      .deleteCard(cardId)
      .then(() => {
        cardInstance.removeCard(); // remove o card do DOM
      })
      .catch((err) => console.error("Erro ao deletar card:", err));
  }
);
popupConfirmDelete.setEventListeners();

// Popup de edição de perfil
const editProfilePopup = new PopupWithForm(
  popupEditProfile,
  (formData) => {
    return api
      .setUserData({
        name: formData["name"],
        about: formData["activity"],
      })
      .then((userData) => {
        userInfo.setUserInfo(userData);
      })
      .catch((err) => console.error("Erro ao atualizar perfil:", err));
  },
  editProfileValidator
);
editProfilePopup.setEventListeners();

// Popup de adicionar card
const addCardPopup = new PopupWithForm(
  popupAddCard,
  (formData) => {
    return api
      .addCards({
        name: formData["title"],
        link: formData["url"],
      })
      .then((cardFromServer) => {
        const newCard = createCard(cardFromServer);
        cardSection.addItem(newCard);
      })
      .catch((err) => console.error("Erro ao adicionar card:", err));
  },
  addCardValidator
);
addCardPopup.setEventListeners();

// Popup de atualizar avatar
const popupAvatar = new PopupWithForm(
  popupAvatarElement,
  (formData) => {
    return api
      .setUserAvatar({ avatar: formData["avatar"] })
      .then((userData) => {
        userInfo.setUserInfo(userData);
      })
      .catch((err) => console.error("Erro ao atualizar avatar:", err));
  },
  avatarValidator
);
popupAvatar.setEventListeners();

// -------------------- Função para criar cards --------------------
function createCard(item) {
  const card = new Card(
    item,
    "#element-template",
    (name, link) => imagePopup.open(name, link),
    { userInfo, api },
    popupConfirmDelete
  );

  return card.generateCard();
}

// -------------------- Carregamento inicial --------------------
let cardSection = null;

api
  .getInitialData()
  .then(([userData, initialCards]) => {
    // Atualiza dados do usuário
    userInfo.setUserInfo({
      name: userData.name,
      job: userData.about,
      avatar: userData.avatar,
      _id: userData._id,
    });

    cardSection = new Section(
      {
        items: initialCards.reverse(), // inverte a ordem recebida da API
        renderer: (item) => {
          const cardElement = createCard(item);
          return cardElement;
        },
      },
      ".elements__cards"
    );

    cardSection.renderItems();
  })
  .catch((error) => console.error("Erro ao obter dados iniciais:", error));

// -------------------- Botões e listeners --------------------

// Editar perfil
profileEditButton.addEventListener("click", () => {
  const currentUser = userInfo.getUserInfo();
  nameInput.value = currentUser.name;
  jobInput.value = currentUser.job;

  editProfileValidator.resetValidation();
  editProfilePopup.open();
});

// Adicionar card
profileAddButton.addEventListener("click", () => {
  addCardValidator.resetValidation();
  addCardPopup.open();
});

// Atualizar avatar
if (profileImageWrapper && popupAvatar) {
  profileImageWrapper.addEventListener("click", () => {
    if (avatarValidator) avatarValidator.resetValidation();
    popupAvatar.open();
  });
}

// Botão de edição direta do avatar
avatarEditButton.addEventListener("click", () => popupAvatar.open());
