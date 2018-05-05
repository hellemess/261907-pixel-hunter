import IntroScreen from './start/intro-screen';
import Loader from './loader';
import GreetingScreen from './start/greeting-screen';
import RulesScreen from './start/rules-screen';
import GameModel from './data/model';
import GameScreen from './game/game-screen';
import ResultScreen from './result/result-screen';
import ErrorScreen from './error/error-screen';

const container = document.querySelector(`main`);

const showScreen = (screen) => {
  container.innerHTML = ``;
  container.appendChild(screen.element);
};

let gameData;

export default class Application {
  static init() {
    const intro = new IntroScreen();

    showScreen(intro);

    Loader.getData()
        .then(Application.showGreeting)
        .catch((error) => {
          Application.showError(error);
        });
  }

  static showGreeting(data) {
    gameData = data;

    const greeting = new GreetingScreen();

    showScreen(greeting);
  }

  static showRules() {
    const rules = new RulesScreen();

    showScreen(rules);
  }

  static showGame(username) {
    const model = new GameModel(gameData, username);
    const game = new GameScreen(model);

    showScreen(game);
    game.init();
  }

  static showResult(state) {
    const result = new ResultScreen(state);

    showScreen(result);
  }

  static showError(status) {
    const error = new ErrorScreen(status);

    showScreen(error);
  }
}
