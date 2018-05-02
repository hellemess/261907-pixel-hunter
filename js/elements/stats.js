import {convertAnswer} from '../data/game-data';

export default (state) => `<div class="stats">
    <ul class="stats">
      ${Array(state.answers.length).fill(``).map((it, i) => `<li class="stats__result stats__result--${convertAnswer(state.answers[i])}"></li>`).join(``)}
      ${Array(10 - state.answers.length).fill(`<li class="stats__result stats__result--unknown"></li>`).join(``)}
    </ul>
  </div>`;
