import AbstractView from '../view';
import {countPoints} from '../data/data';
import StatsView from '../elements/stats-view';
import FooterView from '../elements/footer-view';

const renderResults = (results, state) => `
  ${results.map((it, i) => `
    <table class="result__table">
      <tr>
        <td class="result__number">${i + 1}</td>
        <td ${typeof it.points === `number` ? `colspan="2"` : ``}>
          ${new StatsView(state[i].answers).template}
        </td>
        ${typeof it.points === `number` ? `
        <td class="result__points">×&nbsp;100</td>
        <td class="result__total">${it.answers.correct * 100}</td>
      </tr>
      ${it.answers.fast > 0 ? `
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">
          ${it.answers.fast}&nbsp;
          <span class="stats__result stats__result--fast"></span>
        </td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${it.answers.fast * 50}</td>
      </tr>` : ``}
      ${it.lives > 0 ? `
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">
          ${it.lives}&nbsp;
          <span class="stats__result stats__result--alive"></span>
        </td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${it.lives * 50}</td>
      </tr>` : ``}
      ${it.answers.slow > 0 ? `
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">
          ${it.answers.slow}&nbsp;
          <span class="stats__result stats__result--slow"></span>
        </td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">–${it.answers.slow * 50}</td>
      </tr>` : ``}
      <tr>
        <td colspan="5"` : `
        <td class="result__total"></td>
        <td`} class="result__total  result__total--final">${it.points}</td>
      </tr>
    </table>`).join(``)}`;

export default class ResultView extends AbstractView {
  constructor(state) {
    super();
    this.state = state.reverse();
  }

  get template() {
    const results = [];

    this.state.forEach((it) => {
      results.push(countPoints(it.answers));
    });

    return `
      <header class="header"></header>
      <div class="result">
        <h1>${typeof results[0].points === `number` ? `Победа!` : `Увы!`}</h1>
        ${renderResults(results, this.state)}
      </div>
      ${new FooterView().template}`;
  }
}

export {countPoints};
