const INITIAL_STATE = Object.freeze({
  answers: Object.freeze([]),
  level: 0,
  lives: 3,
  time: 0
});

const QuestionType = {
  TWO_OF_TWO: `two-of-two`,
  TINDER_LIKE: `tinder-like`,
  ONE_OF_THREE: `one-of-three`
};

const AnswerType = {
  PAINTING: `painting`,
  PHOTO: `photo`
};

const TIME_FOR_TASK = 30;

const canContinue = (state) => state.lives >= 0 && state.answers.length < 10;

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
    case QuestionType.TINDER_LIKE:
      rightAnswer = level.answers[0].type;
      break;
    case QuestionType.TWO_OF_TWO:
      rightAnswer = [];

      level.answers.forEach((it) => {
        rightAnswer.push(it.type);
      });

      break;
    case QuestionType.ONE_OF_THREE:
      let paintings = 0;
      let photos = 0;

      level.answers.forEach((it) => {
        if (it.type === `painting`) {
          paintings++;
        } else {
          photos++;
        }
      });

      rightAnswer = paintings < photos ? AnswerType.PAINTING : AnswerType.PHOTO;
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
  INITIAL_STATE,
  TIME_FOR_TASK,
  AnswerType,
  QuestionType,
  canContinue,
  convertAnswer,
  countPoints,
  die,
  getRightAnswer,
  saveAnswer,
  tick,
  updateLevel
};
