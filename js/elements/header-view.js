import AbstractView from '../view';

const renderLives = (lives) => `
  ${Array(lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
  ${Array(3 - lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}`;

export default class HeaderView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    return `
      <h1 class="game__timer">00:30</h1>
      <div class="game__lives">
        ${renderLives(this.state.lives)}
      </div>`;
  }
}
