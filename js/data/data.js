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

const INITIAL_STATE = {
  answers: [],
  level: 0,
  lives: 3
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

export {INITIAL_DATA, INITIAL_STATE, setTimer};
