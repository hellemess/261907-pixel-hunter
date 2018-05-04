import IntroScreen from './start/intro-screen';
import GreetingScreen from './start/greeting-screen';
import RulesScreen from './start/rules-screen';
import GameModel from './data/model';
import {INITIAL_DATA} from './data/data';
import GameScreen from './game/game-screen';
import ResultScreen from './result/result-screen';

const container = document.querySelector(`main`);

const showScreen = (screen) => {
  container.innerHTML = ``;
  container.appendChild(screen.element);
};

export default class Application {
  static showIntro() {
    const intro = new IntroScreen();

    showScreen(intro);
  }

  static showGreeting() {
    const greeting = new GreetingScreen();

    showScreen(greeting);
  }

  static showRules() {
    const rules = new RulesScreen();

    showScreen(rules);
  }

  static showGame(username) {
    const model = new GameModel(INITIAL_DATA, username);
    const game = new GameScreen(model);

    showScreen(game);
    game.init();
  }

  static showResult(state) {
    const result = new ResultScreen(state);

    showScreen(result);
  }
}
