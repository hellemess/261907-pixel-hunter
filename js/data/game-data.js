const countPoints = (answers) => {
  let points = -1;

  if (answers.length === 10) {
    let lives = 3;

    points = 0;

    answers.forEach((it) => {
      if (it.value) {
        points += 100;

        if (it.time < 10) {
          points += 50;
        } else if (it.time > 20) {
          points -= 50;
        }
      } else {
        lives -= 1;
      }
    });

    points += lives * 50;
  }

  return points;
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

export {countPoints, setTimer};
