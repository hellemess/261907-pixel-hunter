const INITIAL_DATA = [
  {
    type: `one-of-three`,
    question: `Найдите рисунок среди изображений`,
    answers: [
      {
        image: {
          url: `http://i.imgur.com/UIHVp0P.jpg`,
          width: 304,
          height: 455
        },
        type: `photo`
      },
      {
        image: {
          url: `http://imgur.com/18zh0az.jpg`,
          width: 304,
          height: 455
        },
        type: `photo`
      },
      {
        image: {
          url: `https://k37.kn3.net/0F4598844.jpg`,
          width: 304,
          height: 455
        },
        type: `painting`
      }
    ]
  },
  {
    type: `two-of-two`,
    question: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      {
        image: {
          url: `https://i.imgur.com/KNfvQ44.jpg`,
          width: 468,
          height: 458
        },
        type: `photo`
      },
      {
        image: {
          url: `https://k37.kn3.net/47F2604E3.jpg`,
          width: 468,
          height: 458
        },
        type: `painting`
      }
    ]
  },
  {
    type: `two-of-two`,
    question: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      {
        image: {
          url: `https://i.redd.it/l08jq66vul2y.jpg`,
          width: 468,
          height: 458
        },
        type: `photo`
      },
      {
        image: {
          url: `http://i.imgur.com/GbcYNPw.jpg`,
          width: 468,
          height: 458
        },
        type: `photo`
      }
    ]
  },
  {
    type: `one-of-three`,
    question: `Найдите рисунок среди изображений`,
    answers: [
      {
        image: {
          url: `http://i.imgur.com/q7rBB8Y.jpg`,
          width: 304,
          height: 455
        },
        type: `photo`
      },
      {
        image: {
          url: `http://i.imgur.com/eSlWjE7.jpg`,
          width: 304,
          height: 455
        },
        type: `photo`
      },
      {
        image: {
          url: `https://k31.kn3.net/4BF6BBF0E.jpg`,
          width: 304,
          height: 455
        },
        type: `painting`
      }
    ]
  },
  {
    type: `two-of-two`,
    question: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      {
        image: {
          url: `https://k39.kn3.net/E07A38605.jpg`,
          width: 468,
          height: 458
        },
        type: `painting`
      },
      {
        image: {
          url: `https://k41.kn3.net/CF684A85A.jpg`,
          width: 468,
          height: 458
        },
        type: `painting`
      }
    ]
  },
  {
    type: `two-of-two`,
    question: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      {
        image: {
          url: `http://i.imgur.com/Gvq3jc2.jpg`,
          width: 468,
          height: 458
        },
        type: `photo`
      },
      {
        image: {
          url: `http://i.imgur.com/W5DNOVJ.jpg`,
          width: 468,
          height: 458
        },
        type: `photo`
      }
    ]
  },
  {
    type: `tinder-like`,
    question: `Угадай, фото или рисунок?`,
    answers: [
      {
        image: {
          url: `https://k34.kn3.net/4244FE50B.jpg`,
          width: 705,
          height: 455
        },
        type: `painting`
      }
    ]
  },
  {
    type: `one-of-three`,
    question: `Найдите фото среди изображений`,
    answers: [
      {
        image: {
          url: `https://k42.kn3.net/D660F0768.jpg`,
          width: 304,
          height: 455
        },
        type: `painting`
      },
      {
        image: {
          url: `https://k32.kn3.net/5C7060EC5.jpg`,
          width: 304,
          height: 455
        },
        type: `painting`
      },
      {
        image: {
          url: `http://i.imgur.com/Jvzh3pk.jpg`,
          width: 304,
          height: 455
        },
        type: `photo`
      }
    ]
  },
  {
    type: `tinder-like`,
    question: `Угадай, фото или рисунок?`,
    answers: [
      {
        image: {
          url: `https://i.redd.it/cfw21jscl03y.jpg`,
          width: 705,
          height: 455
        },
        type: `photo`
      }
    ]
  },
  {
    type: `two-of-two`,
    question: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      {
        image: {
          url: `http://i.imgur.com/167pXyY.jpg`,
          width: 468,
          height: 458
        },
        type: `photo`
      },
      {
        image: {
          url: `https://k36.kn3.net/1619797DF.jpg`,
          width: 468,
          height: 458
        },
        type: `painting`
      }
    ]
  }
];

const INITIAL_STATE = Object.freeze({
  answers: [],
  level: 0,
  lives: 3,
  time: 0
});

const TIME_FOR_TASK = 30;

const assignAdditionalClass = (level) => {
  switch (level.type) {
    case `tinder-like`:
      level.class = `game__content--wide`;
      break;
    case `one-of-three`:
      level.class = `game__content--triple`;
      break;
  }
};

const canContinue = (state) => state.lives > 0 && state.answers.length < 10;

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

const die = (state) => {
  const newState = Object.assign({}, state);

  newState.lives -= 1;

  return newState;
};

const getRightAnswer = (level) => {
  let rightAnswer;

  switch (level.type) {
    case `tinder-like`:
      rightAnswer = level.answers[0].type;
      break;
    case `two-of-two`:
      rightAnswer = [];

      level.answers.forEach((it) => {
        rightAnswer.push(it.type);
      });

      break;
    case `one-of-three`:
      let paintings = 0;
      let photos = 0;

      level.answers.forEach((it) => {
        if (it.type === `painting`) {
          paintings++;
        } else {
          photos++;
        }
      });

      rightAnswer = paintings < photos ? `painting` : `photo`;
  }

  return rightAnswer;
};

const saveAnswer = (state, answer) => {
  const newState = Object.assign({}, state);

  newState.answers.push(answer);

  return newState;
};

const tick = (state) => {
  const newState = Object.assign({}, state);

  newState.time += 1;

  return newState;
};

const updateLevel = (state) => {
  const newState = Object.assign({}, state);

  newState.level += 1;

  return newState;
};

export {
  INITIAL_DATA,
  INITIAL_STATE,
  TIME_FOR_TASK,
  assignAdditionalClass,
  canContinue,
  convertAnswer,
  countPoints,
  die,
  getRightAnswer,
  saveAnswer,
  tick,
  updateLevel
};
