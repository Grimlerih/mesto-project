let editButton = document.querySelector('.profile__button-edit');
let popupEdit = document.querySelector('.popup');
let popupContainerEdit = document.querySelector('.popup__container_edit');
let popupContainerAdd = document.querySelector('.popup__container_add');
let closeEditButton = document.querySelector('.popup__button-close');
let addButton = document.querySelector('.profile__button-add');

//открытие модального окна редактирования профиля
editButton.addEventListener('click', function () {
  popupEdit.classList.add('popup_opened');
  popupContainerEdit.classList.add('popup__container_opened');
});

//открытие модального окна добавления карточки
addButton.addEventListener('click', function () {
  popupEdit.classList.add('popup_opened');
  popupContainerAdd.classList.add('popup__container_opened');
});

//закрытие модального окна редактирования профиля
closeEditButton.addEventListener('click', function () {
  popupEdit.classList.remove('popup_opened');
  popupContainerEdit.classList.remove('popup__container_opened');
  popupContainerAdd.classList.remove('popup__container_opened');
});

//редактирование информации имени и работы
const nameInput = document.querySelector('.form__text_type_name');
const jobInput = document.querySelector('.form__text_type_activity');
let nameText = document.querySelector('.profile__name');
let jobText = document.querySelector('.profile__activity');
const submitButton = document.querySelector('.form__button');

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameText.textContent = nameInput.value;
  jobText.textContent = jobInput.value;
  popupEdit.classList.toggle('popup_opened');
};

submitButton.addEventListener('click', formSubmitHandler);

//добавление карточек методом template
const placeTemplate = document.querySelector('#place').content;
const placeContainer = document.querySelector('.elements');
const placeElement = placeTemplate.querySelector('.place').cloneNode(true);

placeTemplate.querySelector('.place__image').src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg';
placeTemplate.querySelector('.place__name').textContent = 'Архыз';
songsContainer.append(songElement);
