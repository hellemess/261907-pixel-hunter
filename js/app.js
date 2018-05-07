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

const fade = () => {
  Array.from(container.children).forEach((it) => {
    it.setAttribute(`style`, `opacity: 1;`);

    const fadeOut = setInterval(() => {
      if (it.style.opacity > 0) {
        it.style.opacity -= 0.1;
      } else {
        clearInterval(fadeOut);
        container.removeChild(it);
      }
    }, 100);
  });
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
    if (data) {
      gameData = data;
    }

    const greeting = new GreetingScreen();

    fade();
    container.appendChild(greeting.element);
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
