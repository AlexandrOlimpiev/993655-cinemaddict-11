import {
  creatUserRankTemplate
} from "./components/profile.js";

import {
  creatMainNavigationTemplate
} from "./components/nav.js";

import {
  creatMainSortTemplate
} from "./components/sort.js";

import {
  creatMainContentTemplate
} from "./components/content.js";

import {
  creatFilmCardTemplate
} from "./components/card.js";

import {
  creatShowMoreTemplate
} from "./components/button.js";

import {
  creatFooterStatsTemplate
} from "./components/count.js";

import {
  creatPopupTemplate
} from "./components/popup.js";

import {
  generateFilms,
  generateFilters
} from "./mocks/mock.js";

const FILM_EXTRA_LIST_LENGTH = 2;
const FILM_LIST_LENGTH_START = 5;
const ADD_FILM_LIST_BY_BUTTON = 5;
const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.header`);
const films = generateFilms(23); // Генерация массива моков
const filters = generateFilters();

// Функция отрисовки компонентов
const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

render(siteHeaderElement, creatUserRankTemplate());
render(siteMainElement, creatMainNavigationTemplate(filters));
render(siteMainElement, creatMainSortTemplate());
render(siteMainElement, creatMainContentTemplate());

const filmList = siteMainElement.querySelector(`.films-list`);
const filmListContainer = filmList.querySelector(`.films-list__container`);

films.slice(0, FILM_LIST_LENGTH_START).forEach((film) => render(filmListContainer, creatFilmCardTemplate(film)));

render(filmList, creatShowMoreTemplate());

const showeMoreButton = filmList.querySelector(`.films-list__show-more`);
let showingCardCount = FILM_LIST_LENGTH_START;
// Обработчик нажатия кнопки "Showe more"
showeMoreButton.addEventListener(`click`, () => {
  const prevCardCount = showingCardCount;
  showingCardCount = showingCardCount + ADD_FILM_LIST_BY_BUTTON;
  films.slice(prevCardCount, showingCardCount)
    .forEach((film) => render(filmListContainer, creatFilmCardTemplate(film)));
  if (showingCardCount >= films.length) {
    showeMoreButton.remove();
  }
});

const filmExtraListContainer = siteMainElement.querySelectorAll(`.films-list--extra .films-list__container`);
filmExtraListContainer.forEach((item) => {
  films.slice(0, FILM_EXTRA_LIST_LENGTH).forEach((film) => render(item, creatFilmCardTemplate(film)));
});

const footerStatsElement = document.querySelector(`.footer__statistics`);
render(footerStatsElement, creatFooterStatsTemplate());

// Временные обработчики открытия и закрытия попапа
document.querySelector(`.film-card`).addEventListener(`click`, () => {
  render(document.querySelector(`html`), creatPopupTemplate((films[0])));
  const popup = document.querySelector(`.film-details`);
  popup.querySelector(`.film-details__close-btn`).addEventListener(`click`, () => {
    popup.remove();
  });
});
