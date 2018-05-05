import {
  QuestionType,
  getRightAnswer
} from '../data/data';

import Application from '../app';
import GameView from './game-view';
import BackView from '../elements/back-view';
import TimerView from '../elements/timer-view';
import HeaderView from '../elements/header-view';
import StatsView from '../elements/stats-view';

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this.container = document.createElement(`div`);

    this._interval = null;
    this._timeout = null;
  }

  get element() {
    return this.container;
  }

  init() {
    this.updateLevel();
  }

  answer(answer) {
    clearInterval(this._interval);
    clearTimeout(this._timeout);

    const rightAnswer = getRightAnswer(this.model.level);

    let result;

    switch (this.model.level.type) {
      case QuestionType.TINDER_LIKE:
      case QuestionType.ONE_OF_THREE:
        result = answer === rightAnswer;
        break;
      case QuestionType.TWO_OF_TWO:
        result = JSON.stringify(answer) === JSON.stringify(rightAnswer);
    }

    this.model.saveAnswer(result);

    if (!result) {
      this.model.die();
    }

    this.continue();
  }

  continue() {
    if (this.model.canContinue()) {
      this.model.updateLevel();
      this.updateLevel();
    } else {
      Application.showResult(this.model.state);
    }
  }

  goBack() {
    clearInterval(this._interval);
    clearTimeout(this._timeout);
    Application.showGreeting();
  }

  launchTimer() {
    this.model.launchTimer();

    this._interval = setInterval(() => {
      this.model.tick();
      this.updateTimer();
    }, 1000);

    this._timeout = setTimeout(() => {
      clearInterval(this._interval);
      this.model.saveAnswer(false);
      this.model.die();
      this.continue();
    }, 30000);
  }

  updateLevel() {
    this.launchTimer();

    this.view = new GameView(this.model.level);
    this.back = new BackView();
    this.timer = new TimerView(this.model.state);
    this.header = new HeaderView(this.model.state);
    this.stats = new StatsView(this.model.state);
    this.container.innerHTML = ``;

    this.back.onClick = this.goBack.bind(this);
    this.view.onAnswer = this.answer.bind(this);

    this.inner = {
      header: this.view.element.querySelector(`header`),
      game: this.view.element.querySelector(`.game`),
      options: this.view.element.querySelectorAll(`.game__option`)
    };

    this.container.appendChild(this.view.element);
    this.inner.header.appendChild(this.back.element);
    this.inner.header.appendChild(this.timer.element);
    this.inner.header.appendChild(this.header.element);

    this.inner.options.forEach((it, i) => {
      it.insertBefore(this.view.level.answers[i].image.element, it.firstChild);
    });

    this.inner.game.appendChild(this.stats.element);
  }

  updateTimer() {
    const newTimer = new TimerView(this.model.state);

    this.inner.header.replaceChild(newTimer.element, document.querySelector(`.game__timer`));

    this.timer = newTimer;
  }
}
