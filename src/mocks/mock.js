import {
  getRandomArrayItem,
  getRandomIntegerNumber,
  getRandomArray
} from "./mock-util.js";

import {
  FILM_DATA_KIT,
  COMMENT_DATA_KIT
} from "./data.js";

import {
  FILTER_NAMES
} from "../const.js";
// Генерации объекта с информацией о фильме
const generateFilm = () => {
  return {
    title: getRandomArrayItem(FILM_DATA_KIT.TITLES),
    poster: `./images/posters/${getRandomArrayItem(FILM_DATA_KIT.POSTERS)}`,
    description: getRandomArray(getRandomIntegerNumber(1, 5), FILM_DATA_KIT.DESCRIPTIONS).join(` `),
    rating: getRandomIntegerNumber(0, 100) / 10,
    releaseDate: new Date(getRandomIntegerNumber(-189345600000, 1577829600000)), // Получение случайно даты в формате UNIX  в промежутке 01.01.1910-01.01.2020
    duration: getRandomIntegerNumber(20, 600),
    genres: getRandomArray(getRandomIntegerNumber(1, 3), FILM_DATA_KIT.GENRES),
    comments: generateComments(getRandomIntegerNumber(1, 5)),
    originTitle: getRandomArrayItem(FILM_DATA_KIT.TITLES),
    age: getRandomIntegerNumber(10, 18),
    director: getRandomNameAndSurnem(),
    writers: getRandomArrayNameAndSurnem(3),
    actors: getRandomArrayNameAndSurnem(3),
    country: getRandomArrayItem(FILM_DATA_KIT.COUNTRY),
  };
};

// Генерации объекта с коментарием о фильме
const generateComment = () => {
  return {
    emojis: getRandomArrayItem(COMMENT_DATA_KIT.EMOJIS),
    text: getRandomArrayItem(COMMENT_DATA_KIT.TEXTS),
    author: getRandomArrayItem(COMMENT_DATA_KIT.AUTHORS),
    date: new Date(getRandomIntegerNumber(1577829600000, Date.now())) // Получение случайно даты в формате UNIX  в промежутке 01.01.2020 по сейчас
  };
};

// Генерация массива моковых коментариев
const generateComments = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateComment);
};

// Генерация массива моковых данных о фильмах
const generateFilms = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateFilm);
};

// Генерация массива моков для фильтра
const generateFilters = () => {
  return FILTER_NAMES.map((it) => {
    return {
      name: it,
      count: getRandomIntegerNumber(0, 99),
    };
  });
};

// Генерация строки со случайным именем и фамилией
const getRandomNameAndSurnem = () => {
  return `${getRandomArrayItem(FILM_DATA_KIT.NAMES)} ${getRandomArrayItem(FILM_DATA_KIT.SURNAMES)}`;
};

// Генерация массива строк со случайным именем и фамилией
const getRandomArrayNameAndSurnem = (count) => {
  return new Array(count)
    .fill(``)
    .map(getRandomNameAndSurnem);
};

export {
  generateFilms,
  generateFilters
};
