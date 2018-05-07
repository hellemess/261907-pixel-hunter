import {
  QuestionType,
  getRightAnswer
} from '../data/data';

import Loader from '../loader';
import Application from '../app';
import DialogView from '../elements/dialog-view';
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
    clearTimeout(this._blink);

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
      const username = this.model.username;

      Loader.postStats(this.model.state, username)
          .then(() => {
            Loader.getStats(username)
                .then(Application.showResult)
                .catch((error) => {
                  Application.showError(error);
                });
          })
          .catch((error) => {
            Application.showError(error);
          });
    }
  }

  goBack() {
    this.dialog = new DialogView();

    const removeDialog = () => {
      this.inner.game.removeChild(document.querySelector(`.dialog`));
    };

    this.dialog.onGoBack = () => {
      clearInterval(this._interval);
      clearTimeout(this._timeout);
      clearTimeout(this._blink);
      this.model.start();
      removeDialog();
      Application.showGreeting(this.model.data);
    };

    this.dialog.onCancel = () => {
      removeDialog();
    };

    this.inner.game.appendChild(this.dialog.element);
  }

  launchTimer() {
    this.model.launchTimer();

    this._interval = setInterval(() => {
      this.model.tick();
      this.updateTimer();
    }, 1000);

    this._timeout = setTimeout(() => {
      clearInterval(this._interval);
      clearTimeout(this._blink);
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
    this.stats = new StatsView(this.model.state.answers);
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

    if (this.model.state.time < 25) {
      this.inner.header.replaceChild(newTimer.element, document.querySelector(`.game__timer`));
    } else {
      this.inner.header.removeChild(document.querySelector(`.game__timer`));

      this._blink = setTimeout(() => {
        this.inner.header.insertBefore(newTimer.element, document.querySelector(`.game__lives`));
      }, 100);
    }

    this.timer = newTimer;
  }
}
