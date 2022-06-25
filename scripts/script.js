const editButton = document.querySelector('.profile__button-edit');
const popupEdit = document.querySelector('.popup');
const addButton = document.querySelector('.profile__button-add');
const popupEditForm = document.querySelector('#popup_edit-profile');
const popupAddForm = document.querySelector('#popup_add-card');
const imagePopup = document.querySelector('#popup_zoom-image');

function openPopup(popup) {
  popupEdit.classList.add('popup_opened');
  popup.classList.remove('popup__container_active');
}

function closePopup() {
  popupEdit.classList.remove('popup_opened');
  popupAddForm.classList.add('popup__container_active');
  popupEditForm.classList.add('popup__container_active');
  imagePopup.classList.add('popup__container_active');
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
addButton.addEventListener('click', function(){
  openPopup(popupAddForm);
} );

//закрытие модального окна
const closeBut = Array.from(document.querySelectorAll('.popup__button-close'));
closeBut.forEach(function (item) {
  item.addEventListener('click', function () {
    closePopup();
  })
})

//редактирование информации имени и работы
const editForm = document.querySelector('#edit__form');
const nameInput = document.querySelector('.form__text_type_name');
const jobInput = document.querySelector('.form__text_type_activity');
const nameText = document.querySelector('.profile__name');
const jobText = document.querySelector('.profile__activity');

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameText.textContent = nameInput.value;
  jobText.textContent = jobInput.value;
  closePopup();
};

editForm.addEventListener('submit', formSubmitHandler);

const placeContainer = document.querySelector('.elements');
const addForm = document.querySelector('#add__form');
const placeTemplate = document.querySelector('#place').content;

//добавление карточек
addForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const placeName = document.querySelector('.form__text_place-name');
  const placeUrl = document.querySelector('.form__url');

  createCard(placeName.value, placeUrl.value);

  closePopup();

  placeName.value = '';
  placeUrl.value = '';
});


function createCard(name, link) {
  const placeElement = placeTemplate.querySelector('.place').cloneNode(true);
  const placeButton = placeElement.querySelector('.place__button');
  const placeTrash = placeElement.querySelector('.place__trash');

  placeElement.querySelector('.place__name').textContent = name;
  placeElement.querySelector('.place__image').src = link;

  placeContainer.prepend(placeElement);

  //открытие попапа с изображением
  placeElement.querySelector('.place__image').addEventListener('click' , function(){
    openPopup(imagePopup);
    image.src = placeElement.querySelector('.place__image').src;
    text.textContent = placeElement.querySelector('.place__name').textContent;
  })

  //лайк
  placeElement.querySelector('.place__button').addEventListener('click' , function() {
    placeButton.classList.toggle('place__button_active');
  })

  //удаление карточки
  placeElement.querySelector('.place__trash').addEventListener('click' , function() {
    placeTrash.parentElement.remove();
  })

  return placeElement;
}

const text = document.querySelector('.image-container__text');
const imageContainer = document.querySelector('.image-container');
const image = document.querySelector('.image-container__image');

//создание карточек
initialCards.forEach(function (element) {
  createCard(element.name, element.link)
});
