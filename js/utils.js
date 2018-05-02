const container = document.querySelector(`main`);

const extractElement = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  const element = array[randomIndex];

  array.splice(randomIndex, 1);

  return element;
};

const getElement = (string) => {
  const template = document.createElement(`template`);
  template.innerHTML = string;
  return template.content;
};

const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

const render = (element, goBack) => {
  container.innerHTML = ``;
  container.appendChild(element);

  if (typeof goBack === `function`) {
    const headerButton = document.querySelector(`.header__back`);

    headerButton.addEventListener(`click`, goBack);
  }
};

export {extractElement, getElement, getRandomElement, render};
