// Получение случайного элемента массива
const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

// Получение случайного целого числа из диапазона
const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

// Получение нового массива случайных элементов на основе базового массива
const getRandomArray = (length, sourceArray) => {
  const newArray = [];
  for (let i = 0; i < length; i++) {
    newArray[i] = getRandomArrayItem(sourceArray);
  }

  return newArray;
};

export {
  getRandomArrayItem,
  getRandomIntegerNumber,
  getRandomArray
};
