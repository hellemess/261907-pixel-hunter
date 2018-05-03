import AbstractView from '../view';
import HeaderView from '../elements/header-view';
import StatsView from '../elements/stats-view';
import FooterView from '../elements/footer-view';

const assignAdditionalClass = (level) => {
  switch (level.type) {
    case `tinder-like`:
      level.class = `game__content--wide`;
      break;
    case `one-of-three`:
      level.class = `game__content--triple`;
      break;
  }
};

const renderContent = (content) => `
  ${content.answers.map((it, i) => `
    <div class="game__option">
      <img src="${it.image.url}" alt="Option ${i + 1}" width="${it.image.width}" height="${it.image.height}">
      ${!(content.type === `one-of-three`) ? `
      <label class="game__answer  game__answer--photo">
        <input name="question${i + 1}" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--paint">
        <input name="question${i + 1}" type="radio" value="paint">
        <span>Рисунок</span>
      </label>` : ``}
    </div>`).join(``)}`;

export default class GameView extends AbstractView {
  constructor(state, level) {
    super();
    this.state = state;
    this.level = level;

    assignAdditionalClass(this.level);
  }

  get template() {
    return `
      <header class="header">
        ${new HeaderView(this.state).template}
      </header>
      <div class="game">
        <p class="game__task">${this.level.question}</p>
        <form class="game__content ${typeof this.level.class === `string` ? this.level.class : ``}">
          ${renderContent(this.level)}
        </form>
        ${new StatsView(this.state).template}
      </div>
      ${new FooterView().template}`;
  }

  bind() {
    const content = this.element.querySelector(`.game__content`);

    let answer;

    switch (this.level.type) {
      case `tinder-like`:
        content.addEventListener(`input`, (evt) => {
          evt.preventDefault();

          answer = evt.target.value === `paint` ? `painting` : `photo`;

          this.onAnswer(answer);
        });

        break;
      case `two-of-two`:
        answer = Array(2);

        let answersCounter = 0;

        content.addEventListener(`input`, (evt) => {
          evt.preventDefault();

          const questionIndex = evt.target.name.slice(-1);

          answer[questionIndex - 1] = evt.target.value === `paint` ? `painting` : `photo`;

          if (answersCounter === 0) {
            const questionInputs = content.querySelectorAll(`input[name="question${questionIndex}"]`);

            questionInputs.forEach((it) => {
              it.disabled = true;
            });

            answersCounter++;
          } else {
            this.onAnswer(answer);
          }
        });

        break;
      case `one-of-three`:
        content.addEventListener(`click`, (evt) => {
          if (evt.target.classList.contains(`game__option`)) {
            const optionIndex = evt.target.children[0].alt.slice(-1);
            answer = this.level.answers[optionIndex - 1].type;

            this.onAnswer(answer);
          }
        });
    }
  }

  onAnswer() {}
}
