import {getElement, getRandomElement, render} from './utils';
import {TASKS} from './data/game-data';
import headerTemplate from './elements/header';
import statsTemplate from './elements/stats';
import footerTemplate from './elements/footer';
import showResult from './result';
import showGreeting from './greeting';

const showTask = (state, images) => {
  const taskType = getRandomElement(TASKS);
  const task = taskType.getTask(images);

  const taskTemplate = `${headerTemplate(state)}
    <div class="game">
      ${task.template}
      <div class="stats">
        ${statsTemplate(state)}
      </div>
    </div>
    ${footerTemplate}`;

  const taskElement = getElement(taskTemplate);
  const content = taskElement.querySelector(`.game__content`);

  taskType.bind(content, task.rightAnswer, showTask, state, images, showResult);

  render(taskElement, showGreeting);
};

export {showTask};
