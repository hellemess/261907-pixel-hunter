import footerTemplate from './elements/footer';
import {getElement, render} from './utils';
import showRules from './rules';

const greetingTemplate = `<div class="greeting central--blur">
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
  ${footerTemplate}`;

export default () => {
  const greetingElement = getElement(greetingTemplate);
  const arrow = greetingElement.querySelector(`.greeting__continue`);

  arrow.addEventListener(`click`, showRules);
  render(greetingElement);
};
