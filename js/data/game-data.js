import {extractElement, getRandomElement} from '../utils';
import optionTemplate from '../elements/option';

const INITIAL_IMAGES = {
  paintings: [
    `https://s8.hostingkartinok.com/uploads/images/2018/05/9cd060ea540fafee8f59a4870a418430.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/6a41d504a9178906507b7caa14e5f661.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/0fc4ba1fd96b326ce88097a44bc7e180.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/fbdf9cca14c3566c2587460bcdb5e7a1.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/f18333aa5385fd1948bb57417d6f2c3e.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/2b0aace283ff9c1bc52df6c550909b64.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/bd3853ed307e9f3accc9cff081c0a17a.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/684222f756c2835c82dfa8d8f2822998.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/080a99920a6a707dcd8386145494fabc.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/65fcecbb8ff92bc54e9432bd9a9aba16.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/c252e17db5e6d5e4e408f4e14e73a9ff.png`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/4dcc844aeb7bb8e00858da6466c44173.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/c388b8a260f1e42a353119a488dd622d.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/148eb5c18a593313d8a46fdc1216601f.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/f762cb518bb4b5394d2dd274ecb71097.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/e1563bbc4d8f5f6de7518830e687f620.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/45bf095f8273a3f08b6bdfb373626231.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/e6e191e85c144b1796e94587720424c1.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/1c384da18ab3ff4cdc44ba9e6d4b2ef4.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/3461bf76eaf3e830563992aedacfd2d3.jpg`
  ],
  photos: [
    `https://s8.hostingkartinok.com/uploads/images/2018/05/453c47f9f5320b018b64afc5ca06f8a4.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/7614ce924c3f2972fabba6040da7a920.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/e1481c8d8e0f14d0a23bb04ab1711bd0.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/39c24643894f567f02b331c73593cbb7.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/92356a83a0262df0aa98f70a2fff75f2.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/c6de01bcfb6f17fb652c17c619b0f3ae.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/57e13f2e9de6b9cae48b69573670aa53.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/637bf6b70d8788e797a1cb29b41b552b.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/414c64fd55f4b06cc18579b807f2d1f5.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/25711c981972f611982d14eb199cb90c.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/2dcc33d3610901dde087e7de82add483.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/7780716c67f4930ad4b5c387cda170dc.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/252bb072e61ff12d83735cd424d472d7.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/ec5ae01fcf4938dd4ece759cbe1e9cce.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/84aa0aefa7d756ddfd40980a0f644d2b.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/1cb3a6733ac407f2f464c1efbfe59b01.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/3b6133f933cfe48cdfb7b133713d0623.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/2a28c3d4d3ab4e8b1645a8f637d939e2.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/e2de1bfe7d7ecd6add00b980a8641b9e.jpg`,
    `https://s8.hostingkartinok.com/uploads/images/2018/05/2972b9e39609315403f60fe58c0937e6.jpg`
  ]
};

const INITIAL_STATE = {
  answers: [],
  lives: 3
};

const TASKS = Object.freeze([
  {
    caption: `Угадайте, фото или рисунок?`,
    frame: {
      height: 455,
      width: 705
    },
    labels: true,
    optionsCount: 1,
    rendering: `game__content--wide`,
    bind(content, rightAnswer, goForward, state, images, finish) {
      const newState = Object.assign({}, state);

      content.addEventListener(`input`, (evt) => {
        const givenAnswer = evt.target.value === `paint` ? `paintings` : `photos`;
        const result = givenAnswer === rightAnswer;

        handleAnswer(newState, result, finish, goForward, images);
      });
    },
    getTask(images) {
      const content = [getImagesInQuestion(images)];

      return {
        rightAnswer: content[0].type,
        template: optionTemplate(this.caption, this.rendering, this.optionsCount, content, this.frame.width, this.frame.height, this.labels)
      };
    }
  },
  {
    caption: `Угадайте для каждого изображения: фото или рисунок?`,
    frame: {
      height: 455,
      width: 468
    },
    labels: true,
    optionsCount: 2,
    rendering: ``,
    bind(content, rightAnswer, goForward, state, images, finish) {
      const newState = Object.assign({}, state);
      const givenAnswer = Array(this.optionsCount);

      let clicksCounter = 0;

      content.addEventListener(`input`, (evt) => {
        const optionIndex = evt.target.name.slice(-1);

        givenAnswer[optionIndex - 1] = evt.target.value === `paint` ? `paintings` : `photos`;

        if (clicksCounter === 0) {
          const optionInputs = content.querySelectorAll(`input[name="question${optionIndex}"]`);

          optionInputs.forEach((it) => {
            it.disabled = true;
          });

          clicksCounter++;
        } else {
          const result = JSON.stringify(givenAnswer) === JSON.stringify(rightAnswer);

          handleAnswer(newState, result, finish, goForward, images);
        }
      });
    },
    getTask(images) {
      const content = [];
      const rightAnswer = [];

      for (let i = 0; i < this.optionsCount; i++) {
        content.push(getImagesInQuestion(images));
        rightAnswer.push(content[i].type);
      }

      return {
        rightAnswer,
        template: optionTemplate(this.caption, this.rendering, this.optionsCount, content, this.frame.width, this.frame.height, this.labels)
      };
    }
  },
  {
    frame: {
      height: 455,
      width: 304
    },
    labels: false,
    optionsCount: 3,
    rendering: `game__content--triple`,
    bind(content, rightAnswer, goForward, state, images, finish) {
      const newState = Object.assign({}, state);

      content.addEventListener(`click`, (evt) => {
        if (evt.target.classList.contains(`game__option`)) {
          const givenAnswer = evt.target.children[0].alt.slice(-1);
          const result = +givenAnswer === rightAnswer;

          handleAnswer(newState, result, finish, goForward, images);
        }
      });
    },
    getTask(images) {
      const content = {
        items: []
      };

      content.items.push(getImagesInQuestion(images));
      content.keyword = content.items[0].type === `paintings` ? `рисунок` : `снимок`;

      const otherType = content.items[0].type === `paintings` ? `photos` : `paintings`;

      for (let i = 0; i < this.optionsCount - 1; i++) {
        content.items.push({
          type: otherType,
          url: extractElement(images[otherType])
        });
      }

      const randomPlace = Math.floor(Math.random() * content.items.length);
      const savedValue = content.items[randomPlace];

      content.items[randomPlace] = content.items[0];
      content.items[0] = savedValue;

      return {
        rightAnswer: randomPlace + 1,
        template: optionTemplate(this.caption, this.rendering, this.optionsCount, content, this.frame.width, this.frame.height, this.labels)
      };
    }
  }
]);

const convertAnswer = (answer) => {
  let keyword = `wrong`;

  if (answer.value) {
    keyword = answer.time < 10 ? `fast` : `correct`;

    if (keyword === `correct`) {
      keyword = answer.time > 20 ? `slow` : `correct`;
    }
  }

  return keyword;
};

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

const getImagesInQuestion = (images) => {
  const type = getRandomElement(Object.keys(images));

  return {
    type,
    url: extractElement(images[type])
  };
};

const handleAnswer = (state, result, finish, goForward, images) => {
  state.answers.push({
    time: 15,
    value: result
  });

  if (!result) {
    state.lives -= 1;
  }

  if (state.lives < 1 || state.answers.length === 10) {
    finish(state);
  } else {
    goForward(state, images);
  }
};

const setTimer = (time) => {
  if (typeof time !== `number`) {
    throw new Error(`Function only accepts numbers`);
  }

  if (time < 0) {
    throw new Error(`Function doesn't accept negative values`);
  }

  return {
    time,
    tick() {
      if (this.time < 1) {
        throw new Error(`Time is up`);
      }

      this.time -= 1;
      return this;
    }
  };
};

export {convertAnswer, countPoints, INITIAL_STATE, INITIAL_IMAGES, setTimer, TASKS};
