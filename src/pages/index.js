import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { FormValidator } from "../components/FormValidator.js";
import { validationConfig } from "../utils/utils.js";
import {
  initialCards,
  profileEditButton,
  profileAddButton,
  nameInput,
  jobInput,
  popupEditProfile,
  popupAddCard,
  popupImageView,
} from "../utils/constants.js";

// -------------------- Footer auto year --------------------
document.getElementById("year").textContent = new Date().getFullYear();

// -------------------- Initializations --------------------

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__profession",
});

// -------------------- Validation --------------------

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

// -------------------- Popups --------------------

const imagePopup = new PopupWithImage(popupImageView);
imagePopup.setEventListeners();

const editProfilePopup = new PopupWithForm(
  popupEditProfile,
  (formData) => {
    userInfo.setUserInfo({
      name: formData["name"],
      job: formData["activity"],
    });
    editProfilePopup.close();
  },
  editProfileValidator
);
editProfilePopup.setEventListeners();

const addCardPopup = new PopupWithForm(
  popupAddCard,
  (formData) => {
    const newCard = { name: formData["title"], link: formData["url"] };
    const card = new Card(newCard, "#element-template", (name, link) => {
      imagePopup.open(name, link);
    });
    const cardElement = card.generateCard();
    cardSection.addItem(cardElement);
    addCardPopup.close();
  },
  addCardValidator
);
addCardPopup.setEventListeners();

// -------------------- Cards section --------------------

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, "#element-template", (name, link) => {
        imagePopup.open(name, link);
      });
      const cardElement = card.generateCard();
      cardSection.addItem(cardElement);
    },
  },
  ".elements__cards"
);
cardSection.renderItems();

// -------------------- Listeners --------------------

profileEditButton.addEventListener("click", () => {
  const currentUser = userInfo.getUserInfo();
  nameInput.value = currentUser.name;
  jobInput.value = currentUser.job;

  editProfileValidator.resetValidation();

  editProfilePopup.open();
});

profileAddButton.addEventListener("click", () => {
  addCardValidator.resetValidation();

  addCardPopup.open();
});
