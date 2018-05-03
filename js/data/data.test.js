// import {assert} from 'chai';
// import {convertAnswer, countPoints, setTimer} from './game-data';
//

//

//
// describe(`Timer`, () => {
//   it(`should accept numbers only`, () => {
//     assert.throws(() => setTimer(``), /Function only accepts numbers/);
//     assert.throws(() => setTimer(true), /Function only accepts numbers/);
//     assert.throws(() => setTimer(null), /Function only accepts numbers/);
//   });
//
//   it(`should not accept negative values`, () => {
//     assert.throws(() => setTimer(-1), /Function doesn't accept negative values/);
//   });
//
//   it(`should return object`, () => {
//     assert.equal(`object`, typeof setTimer(30));
//   });
//
//   it(`should create ticking method`, () => {
//     assert.equal(`function`, typeof setTimer(30).tick);
//   });
//
//   it(`should tick via ticking method`, () => {
//     assert.equal(29, setTimer(30).tick().time);
//     assert.equal(14, setTimer(15).tick().time);
//     assert.equal(0, setTimer(1).tick().time);
//   });
//
//   it(`should stop when time is up`, () => {
//     assert.throws(() => setTimer(0).tick(), /Time is up/);
//   });
// });
