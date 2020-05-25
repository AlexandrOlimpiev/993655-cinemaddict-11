import UserRankComponent from "./components/profile.js";
import NavigationComponent from "./components/navigation.js";
import SortComponent from "./components/sort.js";
import FilmsComponent from "./components/films.js";
import NoFilmsComponent from "./components/no-films.js";
import FilmsListComponent from "./components/films-list.js";
import FilmsListExtraComponent from "./components/films-extra.js";
import CardComponent from "./components/card.js";
import ShowMoreButtonComponent from "./components/button.js";
import CountALLFilmsComponent from "./components/count.js";
import PopupComponent from "./components/popup.js";

import {
  generateFilms,
  generateFilters
} from "./mocks/mock.js";

import {
  RenderPosition,
  render
} from "./utils.js";

const FILM_EXTRA_LIST_LENGTH = 2;
const FILM_LIST_LENGTH_START = 5;
const ADD_FILM_LIST_BY_BUTTON = 5;
const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.header`);
const siteFooterElement = document.querySelector(`.footer`);
const films = generateFilms(23); // Генерация массива моков
const filters = generateFilters();

// Функция отрисовки карточки
const renderFilmCard = (filmsListContainer, film) => {
  const cardComponent = new CardComponent(film);
  render(filmsListContainer, cardComponent.getElement());
  const posterFilm = cardComponent.getElement().querySelector(`.film-card__poster`);
  const titleFilm = cardComponent.getElement().querySelector(`.film-card__title`);
  const commentsFilm = cardComponent.getElement().querySelector(`.film-card__comments`);

  // Обработчик клика на элементах карточки
  const cardElementClickHandler = () => {
    renderFilmPopup(film);
  };

  // Подписка на события клика по элементам карточки
  posterFilm.addEventListener(`click`, cardElementClickHandler);
  titleFilm.addEventListener(`click`, cardElementClickHandler);
  commentsFilm.addEventListener(`click`, cardElementClickHandler);
};

// Функция отрисовки попапа
const renderFilmPopup = (film) => {
  const popupComponent = new PopupComponent(film);
  const popupContainer = document.querySelector(`body`);
  popupContainer.appendChild(popupComponent.getElement());

  popupComponent.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, () => {
    popupContainer.removeChild(popupComponent.getElement());
  });
};

// Функция отрисовки основного списка фильмов
const renderFilmsList = (arrowFilms) => {
  const filmsListComponent = new FilmsListComponent();
  render(filmsComponent.getElement(), filmsListComponent.getElement());
  const filmsListContainer = filmsListComponent.getElement().querySelector(`.films-list__container`);
  arrowFilms.slice(0, FILM_LIST_LENGTH_START).forEach((film) => {
    renderFilmCard(filmsListContainer, film);
  });
  // Отрисовка кнопки "Showe more"
  const showeMoreButton = new ShowMoreButtonComponent();
  render(filmsListComponent.getElement(), showeMoreButton.getElement());

  // Обработчик нажатия кнопки "Showe more"
  let showingCardCount = FILM_LIST_LENGTH_START;
  showeMoreButton.getElement().addEventListener(`click`, () => {
    const prevCardCount = showingCardCount;
    showingCardCount = showingCardCount + ADD_FILM_LIST_BY_BUTTON;
    arrowFilms.slice(prevCardCount, showingCardCount)
      .forEach((film) => {
        render(filmsListContainer, new CardComponent(film).getElement());
      });
    if (showingCardCount >= films.length) {
      showeMoreButton.getElement().remove();
      showeMoreButton.removeElement();
    }
  });
};

// Функция отрисовки дополнительного списка фильмов
const renderFilmsListExtra = (title, arrowFilms) => {
  const filmsListExtraComponent = new FilmsListExtraComponent(title);
  render(filmsComponent.getElement(), filmsListExtraComponent.getElement());
  const filmListExtraContainer = filmsListExtraComponent.getElement().querySelector(`.films-list__container`);
  arrowFilms.slice(0, FILM_EXTRA_LIST_LENGTH).forEach((film) => {
    renderFilmCard(filmListExtraContainer, film);
  });
};

// Функция отрисовки основного контента
const renderFilms = (filmsComponent, arrowFilms) => {
  if (!arrowFilms.length) {
    render(filmsComponent.getElement(), new NoFilmsComponent().getElement());
    return;
  }
  renderFilmsList(arrowFilms);
  renderFilmsListExtra(`Top rated`, arrowFilms);
  renderFilmsListExtra(`Most commented`, arrowFilms);
};

// Отрисовки компонентов
render(siteHeaderElement, new UserRankComponent().getElement());
render(siteMainElement, new NavigationComponent(filters).getElement(), RenderPosition.AFTERBEGIN);
render(siteMainElement, new SortComponent().getElement());

const filmsComponent = new FilmsComponent();
render(siteMainElement, filmsComponent.getElement());
renderFilms(filmsComponent, films);

render(siteFooterElement, new CountALLFilmsComponent().getElement());
