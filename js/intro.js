import footerTemplate from './elements/footer';
import {getElement, render} from './utils';
import showGreeting from './greeting';

const introTemplate = `<div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto">
        <sup>*</sup>
        Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.
      </p>
    </div>
  </div>
  ${footerTemplate}`;

export default () => {
  const introElement = getElement(introTemplate);
  const asterisk = introElement.querySelector(`.intro__asterisk`);

  asterisk.addEventListener(`click`, showGreeting);
  render(introElement);
};
