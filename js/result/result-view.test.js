import {assert} from 'chai';
import {countPoints} from './result-view';

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
