import {
  createElement
} from "../utils.js";

const createFilterMarkup = (filter, isActive) => {
  const {
    name,
    count
  } = filter;
  return `<a href="#${name.toLowerCase()}" class="main-navigation__item ${isActive ? `main-navigation__item--active` : ``}">${name} ${name === `All` ? `moves` : `<span class="main-navigation__item-count">${count}</span>`}</a>`;
};

const creatNavigationTemplate = (filters) => {
  const filtersMarkup = filters.map((it, i) => createFilterMarkup(it, i === 0)).join(`\n`);
  return (
    `<nav class="main-navigation">
    <div class="main-navigation__items">
      ${filtersMarkup}
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`
  );
};


export default class Navigation {
  constructor(filters) {
    this._filters = filters;
    this._element = null;
  }

  getTemplate() {
    return creatNavigationTemplate(this._filters);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
