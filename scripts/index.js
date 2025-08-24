// wrappers

const modal = document.querySelector(".popup");
const popupFormElement = document.querySelector(".popup__content");

// buttons and other DOM

const profileName = document.querySelector(".profile__name");
const profileActivity = document.querySelector(".profile__profession");
const profileEditButton = document.querySelector(".profile__edit-button");
const popupCloseButton = document.querySelector(".popup__close-button");
document.getElementById("year").textContent = new Date().getFullYear();

// form data

const nameInput = popupFormElement.querySelector(".popup__input_type_name");
const activityInput = popupFormElement.querySelector(
  ".popup__input_type_activity"
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
