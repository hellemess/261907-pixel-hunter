import GameView from './game-view';
import BackView from '../elements/back-view';

const getRightAnswer = (level) => {
  let rightAnswer;

  switch (level.type) {
    case `tinder-like`:
      rightAnswer = level.answers[0].type;
      break;
    case `two-of-two`:
      rightAnswer = [];

      level.answers.forEach((it) => {
        rightAnswer.push(it.type);
      });

      break;
    case `one-of-three`:
      let paintings = 0;
      let photos = 0;

      level.answers.forEach((it) => {
        if (it.type === `painting`) {
          paintings++;
        } else {
          photos++;
        }
      });

      rightAnswer = paintings < photos ? `painting` : `photo`;
  }

  return rightAnswer;
};

export default class GameScreen {
  constructor(state, data) {
    this.state = state;
    this.level = data[this.state.lives];
    this.view = new GameView(this.state, this.level);
    this.header = this.view.element.querySelector(`header`);
    this.back = new BackView();

    this.back.onClick = () => {};

    this.view.onAnswer = (answer) => {
      const rightAnswer = getRightAnswer(this.level);

      let result;

      switch (this.level.type) {
        case `tinder-like`:
        case `one-of-three`:
          result = answer === rightAnswer;
          break;
        case `two-of-two`:
          result = JSON.stringify(answer) === JSON.stringify(rightAnswer);
      }

      this.state.answers.push({
        time: 15,
        value: result
      });

      if (!result) {
        this.state.lives -= 1;
      }

      if (this.state.lives > 0 && this.state.answers.length < 10) {
        this.state.level += 1;
        this.continue();
      } else {
        this.finish();
      }
    };

    this.header.insertBefore(this.back.element, this.header.firstChild);
  }

  get element() {
    return this.view.element;
  }

  finish() {}

  continue() {}
}
