import RulesView from './rules-view';
import BackView from '../elements/back-view';

export default class RulesScreen {
  constructor() {
    this.view = new RulesView();
    this.header = this.view.element.querySelector(`header`);
    this.back = new BackView();

    this.back.onClick = () => {};

    this.view.onInput = (button) => {
      button.disabled = false;
    };

    this.view.onSubmit = () => {};

    this.header.appendChild(this.back.element);
  }

  get element() {
    return this.view.element;
  }
}
