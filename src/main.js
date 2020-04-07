import {
  creatUserRankTemplate
} from "./components/profile.js";

import {
  creatMainStatsTemplate
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

const FILM_EXTRA_LIST_LENGTH = 2;
const FILM_LIST_LENGTH = 5;
const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.header`);

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

render(siteHeaderElement, creatUserRankTemplate());
render(siteMainElement, creatMainStatsTemplate());
render(siteMainElement, creatMainSortTemplate());
render(siteMainElement, creatMainContentTemplate());

const filmList = siteMainElement.querySelector(`.films-list`);
const filmListContainer = filmList.querySelector(`.films-list__container`);

for (let i = 0; i < FILM_LIST_LENGTH; i++) {
  render(filmListContainer, creatFilmCardTemplate());
}

render(filmList, creatShowMoreTemplate());

const filmExtraListContainer = siteMainElement.querySelectorAll(`.films-list--extra .films-list__container`);
filmExtraListContainer.forEach((item) => {
  for (let i = 0; i < FILM_EXTRA_LIST_LENGTH; i++) {
    render(item, creatFilmCardTemplate());
  }
});

const footerStatsElement = document.querySelector(`.footer__statistics`);
render(footerStatsElement, creatFooterStatsTemplate());

// успокаивает eslint
creatPopupTemplate();
