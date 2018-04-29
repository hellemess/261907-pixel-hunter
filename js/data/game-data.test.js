import {assert} from 'chai';
import {countPoints, setTimer} from './game-data';

describe(`Points Counter`, () => {
  it(`should recognize failures`, () => {
    assert.equal(-1, countPoints(Array(0)));
    assert.equal(-1, countPoints(Array(5)));
    assert.equal(-1, countPoints(Array(9)));
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
    ]));
    assert.equal(850, countPoints([
      {
        value: true,
        time: 15
      },
      {
        value: true,
        time: 25
      },
      {
        value: true,
        time: 15
      },
      {
        value: false,
        time: 15
      },
      {
        value: true,
        time: 15
      },
      {
        value: true,
        time: 5
      },
      {
        value: true,
        time: 15
      },
      {
        value: false,
        time: 15
      },
      {
        value: true,
        time: 25
      },
      {
        value: true,
        time: 5
      }
    ]));
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
    ]));
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
    ]));
  });

  it(`should recognize fast answers`, () => {
    assert.equal(1200, countPoints([
      {
        value: true,
        time: 5
      },
      {
        value: true,
        time: 15
      },
      {
        value: true,
        time: 15
      },
      {
        value: true,
        time: 15
      },
      {
        value: true,
        time: 15
      },
      {
        value: true,
        time: 15
      },
      {
        value: true,
        time: 15
      },
      {
        value: true,
        time: 15
      },
      {
        value: true,
        time: 15
      },
      {
        value: true,
        time: 15
      }
    ]));
    assert.equal(1400, countPoints([
      {
        value: true,
        time: 5
      },
      {
        value: true,
        time: 15
      },
      {
        value: true,
        time: 5
      },
      {
        value: true,
        time: 15
      },
      {
        value: true,
        time: 5
      },
      {
        value: true,
        time: 15
      },
      {
        value: true,
        time: 5
      },
      {
        value: true,
        time: 15
      },
      {
        value: true,
        time: 5
      },
      {
        value: true,
        time: 15
      }
    ]));
    assert.equal(1650, countPoints([
      {
        value: true,
        time: 5
      },
      {
        value: true,
        time: 5
      },
      {
        value: true,
        time: 5
      },
      {
        value: true,
        time: 5
      },
      {
        value: true,
        time: 5
      },
      {
        value: true,
        time: 5
      },
      {
        value: true,
        time: 5
      },
      {
        value: true,
        time: 5
      },
      {
        value: true,
        time: 5
      },
      {
        value: true,
        time: 5
      }
    ]));
  });

  it(`should recognize slow answers`, () => {
    assert.equal(1100, countPoints([
      {
        value: true,
        time: 25
      },
      {
        value: true,
        time: 15
      },
      {
        value: true,
        time: 15
      },
      {
        value: true,
        time: 15
      },
      {
        value: true,
        time: 15
      },
      {
        value: true,
        time: 15
      },
      {
        value: true,
        time: 15
      },
      {
        value: true,
        time: 15
      },
      {
        value: true,
        time: 15
      },
      {
        value: true,
        time: 15
      }
    ]));
    assert.equal(900, countPoints([
      {
        value: true,
        time: 25
      },
      {
        value: true,
        time: 15
      },
      {
        value: true,
        time: 25
      },
      {
        value: true,
        time: 15
      },
      {
        value: true,
        time: 25
      },
      {
        value: true,
        time: 15
      },
      {
        value: true,
        time: 25
      },
      {
        value: true,
        time: 15
      },
      {
        value: true,
        time: 25
      },
      {
        value: true,
        time: 15
      }
    ]));
    assert.equal(650, countPoints([
      {
        value: true,
        time: 25
      },
      {
        value: true,
        time: 25
      },
      {
        value: true,
        time: 25
      },
      {
        value: true,
        time: 25
      },
      {
        value: true,
        time: 25
      },
      {
        value: true,
        time: 25
      },
      {
        value: true,
        time: 25
      },
      {
        value: true,
        time: 25
      },
      {
        value: true,
        time: 25
      },
      {
        value: true,
        time: 25
      }
    ]));
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
