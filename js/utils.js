const container = document.querySelector(`main`);

export const getElement = (string) => {
  const template = document.createElement(`template`);
  template.innerHTML = string;
  return template.content;
};

export const render = (element, goBack) => {
  container.innerHTML = ``;
  container.appendChild(element);

  if (typeof goBack === `function`) {
    const headerButton = document.querySelector(`.header__back`);

    headerButton.addEventListener(`click`, goBack);
  }
};
