import {
  QuestionType,
  AnswerType
} from '../data/data';

import AbstractView from '../view';
import FooterView from '../elements/footer-view';

const renderContent = (content) => `
  ${content.answers.map((it, i) => `
    <div class="game__option">
      ${!(content.type === `one-of-three`) ? `
      <label class="game__answer  game__answer--photo">
        <input name="question${i + 1}" type="radio" value="${AnswerType.PHOTO}">
        <span style="position: relative; z-index: -1;">Фото</span>
      </label>
      <label class="game__answer  game__answer--paint">
        <input name="question${i + 1}" type="radio" value="${AnswerType.PAINTING}">
        <span style="position: relative; z-index: -1;">Рисунок</span>
      </label>` : ``}
    </div>`).join(``)}`;

const isAnswerGiven = (evt) => typeof evt.target.children[0].value === `string`;

export default class GameView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    return `
      <header class="header"></header>
      <div class="game">
        <p class="game__task">${this.level.question}</p>
        <form class="game__content ${typeof this.level.class === `string` ? this.level.class : ``}">
          ${renderContent(this.level)}
        </form>
      </div>
      ${new FooterView().template}`;
  }

  bind() {
    const content = this.element.querySelector(`.game__content`);

    switch (this.level.type) {
      case QuestionType.TINDER_LIKE:
        this.handleTinderLike(content);
        break;
      case QuestionType.TWO_OF_TWO:
        this.handleTwoOfTwo(content);
        break;
      case QuestionType.ONE_OF_THREE:
        this.handleOneOfThree(content);
    }
  }

  handleOneOfThree(element) {
    const answerHandler = (evt) => {
      if (evt.target.classList.contains(`game__option`)) {
        const optionIndex = evt.target.children[0].alt.slice(-1);
        const answer = this.level.answers[optionIndex - 1].type;

        this.onAnswer(answer);
        element.removeEventListener(`click`, answerHandler);
      }
    };

    element.addEventListener(`click`, answerHandler);
  }

  handleTinderLike(element) {
    const answerHandler = (evt) => {
      evt.preventDefault();

      if (isAnswerGiven(evt)) {
        const input = evt.target.children[0];
        const answer = input.value;

        this.onAnswer(answer);
        element.removeEventListener(`click`, answerHandler);
      }
    };

    element.addEventListener(`click`, answerHandler);
  }

  handleTwoOfTwo(element) {
    const answer = Array(2);

    let answersCounter = 0;

    const answerHandler = (evt) => {
      evt.preventDefault();

      if (isAnswerGiven(evt)) {
        const input = evt.target.children[0];
        const questionIndex = input.name.slice(-1);

        answer[questionIndex - 1] = input.value;

        input.checked = true;

        const questionInputs = element.querySelectorAll(`input[name="question${questionIndex}"]`);

        questionInputs.forEach((it) => {
          it.parentElement.style.position = `absolute`;
          it.parentElement.style.zIndex = -1;
        });

        if (answersCounter === 0) {
          answersCounter++;
        } else {
          this.onAnswer(answer);
          element.removeEventListener(`click`, answerHandler);
        }
      }
    };

    element.addEventListener(`click`, answerHandler);
  }

  onAnswer() {}
}
