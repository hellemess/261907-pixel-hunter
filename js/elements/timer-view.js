import AbstractView from '../view';
import {TIME_FOR_TASK} from '../data/data';

export default class TimerView extends AbstractView {
  constructor(state) {
    super();
    this.seconds = TIME_FOR_TASK - state.time;
  }

  get template() {
    return `<h1 class="game__timer">00:${this.seconds > 9 ? this.seconds : `0${this.seconds}`}</h1>`;
  }
}
