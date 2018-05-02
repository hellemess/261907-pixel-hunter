import {countPoints} from './data/game-data';
import headerTemplate from './elements/header';
import statsTemplate from './elements/stats';
import footerTemplate from './elements/footer';
import {getElement, render} from './utils';
import showGreeting from './greeting';

export default (state) => {
  const result = countPoints(state.answers);

  const resultTemplate = `${headerTemplate()}
    <div class="result">
      <h1>${typeof result.points === `number` ? `Победа!` : `Увы!`}</h1>
      <table class="result__table">
        <tr>
          <td class="result__number">1.</td>
          <td ${typeof result.points === `number` ? `colspan="2"` : ``}>
            ${statsTemplate(state)}
          </td>
          ${typeof result.points === `number` ? `<td class="result__points">×&nbsp;100</td>
              <td class="result__total">${result.answers.correct * 100}</td>
            </tr>
            ${result.answers.fast > 0 ? `<tr>
              <td></td>
              <td class="result__extra">Бонус за скорость:</td>
              <td class="result__extra">
                ${result.answers.fast}&nbsp;
                <span class="stats__result stats__result--fast"></span>
              </td>
              <td class="result__points">×&nbsp;50</td>
              <td class="result__total">${result.answers.fast * 50}</td>
            </tr>` : ``}
            ${result.lives > 0 ? `<tr>
              <td></td>
              <td class="result__extra">Бонус за жизни:</td>
              <td class="result__extra">
                ${result.lives}&nbsp;
                <span class="stats__result stats__result--alive"></span>
              </td>
              <td class="result__points">×&nbsp;50</td>
              <td class="result__total">${result.lives * 50}</td>
            </tr>` : ``}
            ${result.answers.slow > 0 ? `<tr>
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
              <td colspan="5" ` : `<td class="result__total"></td>
              <td `}
          class="result__total  result__total--final">${countPoints(state.answers).points}</td>
        </tr>
      </table>
    </div>
    ${footerTemplate}`;

  const resultElement = getElement(resultTemplate);

  render(resultElement, showGreeting);
};
