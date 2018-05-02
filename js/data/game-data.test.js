import {assert} from 'chai';
import {convertAnswer, countPoints, setTimer} from './game-data';

describe(`Points Counter`, () => {
  it(`should recognize failures`, () => {
    assert.equal(`fail`, countPoints(Array(0)).points);
    assert.equal(`fail`, countPoints(Array(5)).points);
    assert.equal(`fail`, countPoints(Array(9)).points);
  });

  it(`should count points correctly`, () => {
    assert.equal(1150, countPoints([
      {
        value: true
      },
      {
        value: true
      },
      {
        value: true
      },
      {
        value: true
      },
      {
        value: true
      },
      {
        value: true
      },
      {
        value: true
      },
      {
        value: true
      },
      {
        value: true
      },
      {
        value: true
      }
    ]).points);
    assert.equal(850, countPoints([
      {
        time: 15,
        value: true

      },
      {
        time: 25,
        value: true
      },
      {
        time: 15,
        value: true
      },
      {
        time: 15,
        value: false
      },
      {
        time: 15,
        value: true
      },
      {
        time: 5,
        value: true
      },
      {
        time: 15,
        value: true
      },
      {
        time: 15,
        value: false
      },
      {
        time: 25,
        value: true
      },
      {
        time: 5,
        value: true
      }
    ]).points);
  });

  it(`should count lost lives correctly`, () => {
    assert.equal(1000, countPoints([
      {
        value: false
      },
      {
        value: true
      },
      {
        value: true
      },
      {
        value: true
      },
      {
        value: true
      },
      {
        value: true
      },
      {
        value: true
      },
      {
        value: true
      },
      {
        value: true
      },
      {
        value: true
      }
    ]).points);
    assert.equal(850, countPoints([
      {
        value: false
      },
      {
        value: false
      },
      {
        value: true
      },
      {
        value: true
      },
      {
        value: true
      },
      {
        value: true
      },
      {
        value: true
      },
      {
        value: true
      },
      {
        value: true
      },
      {
        value: true
      }
    ]).points);
  });

  it(`should recognize fast answers`, () => {
    assert.equal(1200, countPoints([
      {
        time: 5,
        value: true
      },
      {
        time: 15,
        value: true
      },
      {
        time: 15,
        value: true
      },
      {
        time: 15,
        value: true
      },
      {
        time: 15,
        value: true
      },
      {
        time: 15,
        value: true
      },
      {
        time: 15,
        value: true
      },
      {
        time: 15,
        value: true
      },
      {
        time: 15,
        value: true
      },
      {
        time: 15,
        value: true
      }
    ]).points);
    assert.equal(1400, countPoints([
      {
        time: 5,
        value: true
      },
      {
        time: 15,
        value: true
      },
      {
        time: 5,
        value: true
      },
      {
        time: 15,
        value: true
      },
      {
        time: 5,
        value: true
      },
      {
        time: 15,
        value: true
      },
      {
        time: 5,
        value: true
      },
      {
        time: 15,
        value: true
      },
      {
        time: 5,
        value: true
      },
      {
        time: 15,
        value: true
      }
    ]).points);
    assert.equal(1650, countPoints([
      {
        time: 5,
        value: true
      },
      {
        time: 5,
        value: true
      },
      {
        time: 5,
        value: true
      },
      {
        time: 5,
        value: true
      },
      {
        time: 5,
        value: true
      },
      {
        time: 5,
        value: true
      },
      {
        time: 5,
        value: true
      },
      {
        time: 5,
        value: true
      },
      {
        time: 5,
        value: true
      },
      {
        time: 5,
        value: true
      }
    ]).points);
  });

  it(`should recognize slow answers`, () => {
    assert.equal(1100, countPoints([
      {
        time: 25,
        value: true
      },
      {
        time: 15,
        value: true
      },
      {
        time: 15,
        value: true
      },
      {
        time: 15,
        value: true
      },
      {
        time: 15,
        value: true
      },
      {
        time: 15,
        value: true
      },
      {
        time: 15,
        value: true
      },
      {
        time: 15,
        value: true
      },
      {
        time: 15,
        value: true
      },
      {
        time: 15,
        value: true
      }
    ]).points);
    assert.equal(900, countPoints([
      {
        time: 25,
        value: true
      },
      {
        time: 15,
        value: true
      },
      {
        time: 25,
        value: true
      },
      {
        time: 15,
        value: true
      },
      {
        time: 25,
        value: true
      },
      {
        time: 15,
        value: true
      },
      {
        time: 25,
        value: true
      },
      {
        time: 15,
        value: true
      },
      {
        time: 25,
        value: true
      },
      {
        time: 15,
        value: true
      }
    ]).points);
    assert.equal(650, countPoints([
      {
        time: 25,
        value: true
      },
      {
        time: 25,
        value: true
      },
      {
        time: 25,
        value: true
      },
      {
        time: 25,
        value: true
      },
      {
        time: 25,
        value: true
      },
      {
        time: 25,
        value: true
      },
      {
        time: 25,
        value: true
      },
      {
        time: 25,
        value: true
      },
      {
        time: 25,
        value: true
      },
      {
        time: 25,
        value: true
      }
    ]).points);
  });
});

describe(`Answer Converter`, () => {
  it(`should recognize wrong answers`, () => {
    assert.equal(`wrong`, convertAnswer({
      value: false
    }));
  });

  it(`should recognize correct answers`, () => {
    assert.equal(`correct`, convertAnswer({
      value: true
    }));
  });

  it(`should recognize fast answers`, () => {
    assert.equal(`fast`, convertAnswer({
      time: 5,
      value: true
    }));
  });

  it(`should recognize slow answers`, () => {
    assert.equal(`slow`, convertAnswer({
      time: 25,
      value: true
    }));
  });
});

describe(`Timer`, () => {
  it(`should accept numbers only`, () => {
    assert.throws(() => setTimer(``), /Function only accepts numbers/);
    assert.throws(() => setTimer(true), /Function only accepts numbers/);
    assert.throws(() => setTimer(null), /Function only accepts numbers/);
  });

  it(`should not accept negative values`, () => {
    assert.throws(() => setTimer(-1), /Function doesn't accept negative values/);
  });

  it(`should return object`, () => {
    assert.equal(`object`, typeof setTimer(30));
  });

  it(`should create ticking method`, () => {
    assert.equal(`function`, typeof setTimer(30).tick);
  });

  it(`should tick via ticking method`, () => {
    assert.equal(29, setTimer(30).tick().time);
    assert.equal(14, setTimer(15).tick().time);
    assert.equal(0, setTimer(1).tick().time);
  });

  it(`should stop when time is up`, () => {
    assert.throws(() => setTimer(0).tick(), /Time is up/);
  });
});
