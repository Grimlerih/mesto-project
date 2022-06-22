const editButton = document.querySelector('.profile__button-edit');
const popupEdit = document.querySelector('.popup');
const closeButtonAdd = document.getElementById('add_form_close');
const closeButtonEdit = document.getElementById('edit_form_close');
const addButton = document.querySelector('.profile__button-add');
const popupEditForm = document.querySelector('#popup__edit-container');
const popupAddForm = document.querySelector('#popup__add-container');

function editFormValue(){
nameInput.value = nameText.textContent;
jobInput.value = jobText.textContent;
} ;

//открытие модального окна редактирования профиля
editButton.addEventListener('click', function () {
  editFormValue();
  popupEdit.classList.add('popup_opened');
  popupEditForm.classList.remove('popup__container_type_edit');
});

//открытие модального окна добавления карточки
addButton.addEventListener('click', function () {
  popupEdit.classList.add('popup_opened');
  popupAddForm.classList.remove('popup__container_type_add');
});

//закрытие модального окна добавления карточки и редактирования профиля
function closeForm() {
  popupEdit.classList.remove('popup_opened');
  popupAddForm.classList.add('popup__container_type_add');
  popupEditForm.classList.add('popup__container_type_edit');
}

closeButtonAdd.addEventListener('click', closeForm);
closeButtonEdit.addEventListener('click', closeForm);

//редактирование информации имени и работы
const submitButtonEdit = document.getElementById('form__button_edit');
const editForm = document.querySelector('#edit__form');
const nameInput = document.querySelector('.form__text_type_name');
const jobInput = document.querySelector('.form__text_type_activity');
let nameText = document.querySelector('.profile__name');
let jobText = document.querySelector('.profile__activity');

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameText.textContent = nameInput.value;
  jobText.textContent = jobInput.value;
  closeForm();
};

editForm.addEventListener('submit', formSubmitHandler);

//добавление карточек c помощью модального окна методом template
const submitButtonAdd = document.querySelector('#form__button_add');
const placeContainer = document.querySelector('.elements');
const addForm = document.querySelector('#add__form');
const placeName = document.querySelector('.form__text_place-name');
const placeUrl = document.querySelector('.form__url');
const placeTemplate = document.querySelector('#place').content;

function addCards(event) {
  const placeElement = placeTemplate.querySelector('.place').cloneNode(true);
  event.preventDefault();
  placeElement.querySelector('.place__name').textContent = placeName.value;
  placeElement.querySelector('.place__image').src = placeUrl.value;
  placeContainer.prepend(placeElement);
  placeElement.querySelector('.place__button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('place__button_active');
 });
 placeElement.querySelector('.place__trash').addEventListener('click', function (evt) {
  evt.target.parentElement.remove();
});
  closeForm();
};

addForm.addEventListener('submit', addCards);

//добавление карточек с помощью js
const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.forEach(function (element) {
  const placeCard = placeTemplate.querySelector('.place').cloneNode(true);
  placeCard.querySelector('.place__name').textContent = element.name;
  placeCard.querySelector('.place__image').src = element.link;
  placeContainer.append(placeCard)
});

//возможность ставить лайки
const placeButton = document.querySelectorAll('.place__button');
const placeButtonArray = Array.from(placeButton);

placeButtonArray.forEach(function(like) {
  like.addEventListener('click' , function(){
    like.classList.toggle('place__button_active');
  });
})

//удаление карточек
const placeCard = Array.from(document.querySelectorAll('.place'));
const trashButton = Array.from(document.querySelectorAll('.place__trash'));

trashButton.forEach(function(item) {
  item.addEventListener('click' , function(){
    item.parentElement.remove();
    });
  })
