import {
  INITIAL_STATE,
  canContinue,
  die,
  saveAnswer,
  tick,
  updateLevel
} from './data';

export default class GameModel {
  constructor(data, username) {
    this.data = data;
    this.username = username;

    this.start();
  }

  get state() {
    return this._state;
  }

  get level() {
    return this.data[this._state.level];
  }

  canContinue() {
    return canContinue(this._state);
  }

  die() {
    this._state = die(this._state);
  }

  launchTimer() {
    this._state.time = INITIAL_STATE.time;
  }

  saveAnswer(result) {
    this._state = saveAnswer(this._state, {
      time: this._state.time,
      value: result
    });
  }

  start() {
    this._state = Object.assign({}, INITIAL_STATE);
  }

  tick() {
    this._state = tick(this._state);
  }

  updateLevel() {
    this._state = updateLevel(this._state);
  }
}
