import {
  createElement
} from "../utils.js";

export const creatCountALLFilmsTemplate = () => {
  return (
    `<p> 130 291 movies inside </p>`
  );
};

export default class CountALLFilms {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return creatCountALLFilmsTemplate();
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
