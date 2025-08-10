// wrappers

const modal = document.querySelector(".popup");
const popupFormElement = document.querySelector(".popup__form");

// buttons and other DOM

const profileName = document.querySelector(".profile__name");
const profileActivity = document.querySelector(".profile__profession");
const profileEditButton = document.querySelector(".profile__edit-button");
const popupCloseButton = document.querySelector(".form__button-close");
document.getElementById("year").textContent = new Date().getFullYear();

// form data

const nameInput = popupFormElement.querySelector(".form__input-name_text");
const activityInput = popupFormElement.querySelector(
  ".form__input-activity_text"
);

// functions of calls

function openModal() {
  nameInput.value = profileName.textContent;
  activityInput.value = profileActivity.textContent;

  modal.classList.add("popup_is-opened");
}

function closeModal() {
  modal.classList.remove("popup_is-opened");
}

function handleProfileSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileActivity.textContent = activityInput.value;
  closeModal();
}

// events listeners

profileEditButton.addEventListener("click", openModal);
popupCloseButton.addEventListener("click", closeModal);
popupFormElement.addEventListener("submit", handleProfileSubmit);
