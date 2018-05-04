import {convertAnswer} from '../data/data';
import AbstractView from '../view';

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
