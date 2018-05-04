import AbstractView from '../view';
import FooterView from '../elements/footer-view';

export default class RulesView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
      <header class="header"></header>
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
      ${new FooterView().template}`;
  }

  bind() {
    const form = this.element.querySelector(`.rules__form`);
    const input = form.querySelector(`.rules__input`);
    const button = form.querySelector(`.rules__button`);

    input.addEventListener(`input`, (evt) => {
      evt.preventDefault();
      this.onInput(button);
    });

    form.addEventListener(`submit`, (evt) => {
      evt.preventDefault();
      this.onSubmit(input.value);
    });
  }

  onInput() {}

  onSubmit() {}
}
