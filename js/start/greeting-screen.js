import AbstractView from '../view';
import FooterView from '../elements/footer-view';
import Application from '../app';

export default class GreetingScreen extends AbstractView {
  constructor() {
    super();

    this.fadeIn();
  }

  get template() {
    return `
      <div>
        <div class="greeting central--blur">
          <div class="greeting__logo">
            <img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter">
          </div>
          <h1 class="greeting__asterisk">*</h1>
          <div class="greeting__challenge">
            <h3>Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!</h3>
            <p>
              Правила игры просты.
              <br>Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.
              <br>Задача кажется тривиальной, но не думай, что все так просто.
              <br>Фотореализм обманчив и коварен.
              <br>Помни, главное — смотреть очень внимательно.
            </p>
          </div>
          <div class="greeting__continue">
            <span>
              <img src="img/arrow_right.svg" width="64" height="64" alt="Next">
            </span>
          </div>
        </div>
        ${new FooterView().template}
      </div>`;
  }

  bind() {
    const arrow = this.element.querySelector(`.greeting__continue`);

    arrow.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      Application.showRules();
    });
  }

  fadeIn() {
    const element = this.element.querySelector(`div`);

    let opacity = 1;

    element.setAttribute(`style`, `position: absolute; z-index: -1; opacity: 0;`);

    const fadeIn = setInterval(() => {
      if (element.style.opacity < 1) {
        element.style.opacity = opacity / 10;
        opacity++;
      } else {
        clearInterval(fadeIn);
      }
    }, 100);
  }
}
