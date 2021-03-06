import {
  createElement
} from "../utils.js";

const creatFilmsListExtraTemplate = (title) => {
  return (
    `<section class="films-list--extra">
      <h2 class="films-list__title">${title}</h2>

      <div class="films-list__container">
      </div>
    </section>`
  );
};

export default class FilmsListExtra {
  constructor(titleListExtra) {
    this._title = titleListExtra;
    this._element = null;
  }

  getTemplate() {
    return creatFilmsListExtraTemplate(this._title);
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
