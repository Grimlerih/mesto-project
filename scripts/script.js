const editButton = document.querySelector('.profile__button-edit');
const addButton = document.querySelector('.profile__button-add');
const popupEditForm = document.querySelector('.popup_edit-profile');
const popupAddForm = document.querySelector('.popup_add-card');
const imagePopup = document.querySelector('.popup_zoom-image');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//сравнивание значений поля ввода
function editFormValue() {
  nameInput.value = nameText.textContent;
  jobInput.value = jobText.textContent;
};

//открытие модального окна редактирования профиля
editButton.addEventListener('click', function () {
  editFormValue();
  openPopup(popupEditForm);
});

//открытие модального окна добавления карточки
addButton.addEventListener('click', function () {
  openPopup(popupAddForm);
});

//закрытие модального окна
const closeButtons = Array.from(document.querySelectorAll('.popup__button-close'));
closeButtons.forEach(function (item) {
  item.addEventListener('click', function () {
    closePopup(popupEditForm);
    closePopup(popupAddForm);
    closePopup(imagePopup);
  })
})

//редактирование информации имени и работы
const editForm = document.querySelector('#edit__form');
const nameInput = document.querySelector('.form__text_type_name');
const jobInput = document.querySelector('.form__text_type_activity');
const nameText = document.querySelector('.profile__name');
const jobText = document.querySelector('.profile__activity');

function submitEditProfileForm(evt) {
  evt.preventDefault();
  nameText.textContent = nameInput.value;
  jobText.textContent = jobInput.value;
  closePopup(popupEditForm);
};

editForm.addEventListener('submit', submitEditProfileForm);

const placeContainer = document.querySelector('.elements');
const addForm = document.querySelector('#add__form');
const placeTemplate = document.querySelector('#place').content;
const placeName = document.querySelector('.form__text_place-name');
const placeUrl = document.querySelector('.form__url');
const text = document.querySelector('.popup__text');
const image = document.querySelector('.popup__image');

//добавление карточек
addForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const card = createCard(placeName.value, placeUrl.value);
  placeContainer.prepend(card);
  closePopup(popupAddForm);

  placeName.value = '';
  placeUrl.value = '';
});

function createCard(name, link, alt) {
  const placeElement = placeTemplate.querySelector('.place').cloneNode(true);
  const placeButton = placeElement.querySelector('.place__button');
  const placeTrash = placeElement.querySelector('.place__trash');

  placeElement.querySelector('.place__name').textContent = name;
  placeElement.querySelector('.place__image').src = link;
  placeElement.querySelector('.place__image').alt = alt;

  //открытие попапа с изображением
  placeElement.querySelector('.place__image').addEventListener('click', function () {
    openPopup(imagePopup);
    image.src = placeElement.querySelector('.place__image').src;
    text.textContent = placeElement.querySelector('.place__name').textContent;
    image.alt = placeElement.querySelector('.place__image').alt;
  })

  //лайк
  placeElement.querySelector('.place__button').addEventListener('click', function () {
    placeButton.classList.toggle('place__button_active');
  })

  //удаление карточки
  placeElement.querySelector('.place__trash').addEventListener('click', function () {
    placeTrash.parentElement.remove();
  })

  return placeElement;
}

//создание карточек
initialCards.forEach(function (element) {
  const card = createCard(element.name, element.link, element.alt);
  placeContainer.append(card);
});
