import RulesView from './rules-view';
import BackView from '../elements/back-view';
import Application from '../app';

export default class RulesScreen {
  constructor() {
    this.view = new RulesView();
    this.header = this.view.element.querySelector(`header`);
    this.back = new BackView();

    this.back.onClick = this.goBack.bind(this);
    this.view.onInput = this.letIn.bind(this);
    this.view.onSubmit = this.goForward.bind(this);
    this.header.appendChild(this.back.element);
  }

  get element() {
    return this.view.element;
  }

  goBack() {
    Application.showGreeting();
  }

  goForward(username) {
    Application.showGame(username);
  }

  letIn(button) {
    button.disabled = false;
  }
}
