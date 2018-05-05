import AbstractView from '../view';
import FooterView from '../elements/footer-view';

export default class IntroScreen extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
      <div id="main" class="central__content">
        <div id="intro" class="intro">
          <h1 class="intro__asterisk">*</h1>
          <p class="intro__motto">
            <sup>*</sup>
            Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.
          </p>
        </div>
      </div>
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
      ${new FooterView().template}`;
  }

  bind() {
    const intro = this.element.querySelector(`.intro`);
    const greeting = this.element.querySelector(`.greeting`);

    intro.style.opacity = 1;
    greeting.style.position = `absolute`;
    greeting.style.opacity = 0;

    let opacity = 1;

    const fade = setInterval(() => {
      if (intro.style.opacity > 0) {
        intro.style.opacity = 1 - opacity / 10;
        greeting.style.opacity = opacity / 10;
        opacity++;
      } else {
        clearInterval(fade);
      }
    }, 100);
  }
}
