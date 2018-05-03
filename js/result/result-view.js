import AbstractView from '../view';
import StatsView from '../elements/stats-view';
import FooterView from '../elements/footer-view';

const countPoints = (answers) => {
  const result = {
    answers: {
      correct: 0,
      fast: 0,
      slow: 0
    },
    lives: 3,
    points: `fail`
  };

  if (answers.length === 10) {
    result.points = 0;

    answers.forEach((it) => {
      if (it.value) {
        result.answers.correct += 1;
        result.points += 100;

        if (it.time < 10) {
          result.answers.fast += 1;
          result.points += 50;
        } else if (it.time > 20) {
          result.answers.slow += 1;
          result.points -= 50;
        }
      } else {
        result.lives -= 1;
      }
    });

    result.points += result.lives * 50;
  }

  return result;
};

export default class ResultView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    const result = countPoints(this.state.answers);

    return `
      <header class="header"></header>
      <div class="result">
        <h1>${typeof result.points === `number` ? `Победа!` : `Увы!`}</h1>
        <table class="result__table">
          <tr>
            <td class="result__number">1.</td>
            <td ${typeof result.points === `number` ? `colspan="2"` : ``}>
              ${new StatsView(this.state).template}
            </td>
            ${typeof result.points === `number` ? `
            <td class="result__points">×&nbsp;100</td>
            <td class="result__total">${result.answers.correct * 100}</td>
          </tr>
          ${result.answers.fast > 0 ? `
          <tr>
            <td></td>
            <td class="result__extra">Бонус за скорость:</td>
            <td class="result__extra">
              ${result.answers.fast}&nbsp;
              <span class="stats__result stats__result--fast"></span>
            </td>
            <td class="result__points">×&nbsp;50</td>
            <td class="result__total">${result.answers.fast * 50}</td>
          </tr>` : ``}
          ${result.lives > 0 ? `
          <tr>
            <td></td>
            <td class="result__extra">Бонус за жизни:</td>
            <td class="result__extra">
              ${result.lives}&nbsp;
              <span class="stats__result stats__result--alive"></span>
            </td>
            <td class="result__points">×&nbsp;50</td>
            <td class="result__total">${result.lives * 50}</td>
          </tr>` : ``}
          ${result.answers.slow > 0 ? `
          <tr>
            <td></td>
            <td class="result__extra">Штраф за медлительность:</td>
            <td class="result__extra">
              ${result.answers.slow}&nbsp;
              <span class="stats__result stats__result--slow"></span>
            </td>
            <td class="result__points">×&nbsp;50</td>
            <td class="result__total">–${result.answers.slow * 50}</td>
          </tr>` : ``}
          <tr>
            <td colspan="5"` : `
            <td class="result__total"></td>
            <td`} class="result__total  result__total--final">${result.points}</td>
          </tr>
        </table>
      </div>
      ${new FooterView().template}`;
  }
}

export {countPoints};
