import {INITIAL_DATA, INITIAL_STATE} from './data/data';
import GameScreen from './game/game-screen';

const state = Object.assign({}, INITIAL_STATE);
const data = Object.assign({}, INITIAL_DATA);
const container = document.querySelector(`main`);

const showScreen = (screen) => {
  container.innerHTML = ``;
  container.appendChild(screen.element);
};

showScreen(new GameScreen(state, data));
