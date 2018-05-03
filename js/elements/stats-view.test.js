import {assert} from 'chai';
import {convertAnswer} from './stats-view';

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
