import headerTemplate from './elements/header';
import footerTemplate from './elements/footer';
import {getElement, render} from './utils';
import {INITIAL_IMAGES, INITIAL_STATE} from './data/game-data';
import {showTask} from './task';
import showGreeting from './greeting';

const rulesTemplate = `${headerTemplate()}
  <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">
      Угадай 10 раз для каждого изображения фото
      <img src="img/photo_icon.png" width="16" height="16">
      или рисунок
      <img src="img/paint_icon.png" width="16" height="16" alt="">
      .
      <br>Фотографиями или рисунками могут быть оба изображения.
      <br>На каждую попытку отводится 30 секунд.
      <br>Ошибиться можно не более 3 раз.
      <br>
      <br>Готовы?
    </p>
    <form class="rules__form" action="#" method="GET">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>
  ${footerTemplate}`;

export default () => {
  const rulesElement = getElement(rulesTemplate);
  const form = rulesElement.querySelector(`.rules__form`);
  const input = form.querySelector(`.rules__input`);
  const button = form.querySelector(`.rules__button`);

  input.addEventListener(`input`, () => {
    button.disabled = false;
  });

  form.addEventListener(`submit`, (evt) => {
    evt.preventDefault();

    const state = Object.assign({}, INITIAL_STATE);
    const images = Object.assign({}, INITIAL_IMAGES);

    showTask(state, images);
  });

  render(rulesElement, showGreeting);
};
