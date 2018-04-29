const container = document.querySelector(`main`);

const getElement = (string) => {
  const template = document.createElement(`template`);
  template.innerHTML = string;
  return template.content;
};

const render = (element, goBack) => {
  container.innerHTML = ``;
  container.appendChild(element);

  if (typeof goBack === `function`) {
    const headerButton = document.querySelector(`.header__back`);

    headerButton.addEventListener(`click`, goBack);
  }
};

export {getElement, render};
