let editButton = document.querySelector('.profile__button-edit');
let popupEdit = document.querySelector('.popup');
let closeEditButton = document.querySelector('.popup__button-close');
let page = document.querySelector('.page');

//открытие модального окна
editButton.addEventListener('click', function () {
  popupEdit.classList.add('popup_opened');
});

//закрытие модального окна
closeEditButton.addEventListener('click', function () {
  popupEdit.classList.toggle('popup_opened');
});

function editInfo () {
  let name = document.querySelector('.form__text_type_name');
  let activity = document.querySelector('.form__text_type_activity');
}
