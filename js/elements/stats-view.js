import AbstractView from '../view';

const convertAnswer = (answer) => {
  let keyword = `wrong`;

  if (answer.value) {
    keyword = answer.time < 10 ? `fast` : `correct`;

    if (keyword === `correct`) {
      keyword = answer.time > 20 ? `slow` : `correct`;
    }
  }

  return keyword;
};

const renderStats = (answers) => `
  ${answers.map((it, i) => `<li class="stats__result stats__result--${convertAnswer(answers[i])}"></li>`).join(``)}
  ${Array(10 - answers.length).fill(`<li class="stats__result stats__result--unknown"></li>`).join(``)}`;

export default class StatsView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    return `
      <div class="stats">
        <ul class="stats">
          ${renderStats(this.state.answers)}
        </ul>
      </div>`;
  }
}

export {convertAnswer};
