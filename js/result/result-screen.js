import ResultView from './result-view';
import BackView from '../elements/back-view';

export default class ResultScreen {
  constructor(state) {
    this.state = state;
    this.view = new ResultView(this.state);
    this.header = this.view.element.querySelector(`header`);
    this.back = new BackView();

    this.back.onClick = () => {};

    this.header.appendChild(this.back.element);
  }

  get element() {
    return this.view.element;
  }
}
