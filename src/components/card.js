import {
  createElement
} from "../utils.js";

const creatFilmCardTemplate = (film) => {
  const {
    title,
    poster,
    description,
    rating,
    releaseDate,
    duration,
    genres,
    comments
  } = film;

  const year = releaseDate.getFullYear();
  const shortDescription = () => {
    return description.length < 140 ? description : description.slice(0, 139) + ` ...`;
  };
  return (
    `<article class="film-card">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${year}</span>
        <span class="film-card__duration">${Math.trunc(duration / 60)}h ${duration % 60}m</span>
        <span class="film-card__genre">${genres[genres.length - 1]}</span>
      </p>
      <img src="${poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${shortDescription()}</p>
      <a class="film-card__comments">>${comments.length} comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
      </form>
    </article>`
  );
};

export default class Card {
  constructor(film) {
    this._film = film;
    this._element = null;
  }

  getTemplate() {
    return creatFilmCardTemplate(this._film);
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
