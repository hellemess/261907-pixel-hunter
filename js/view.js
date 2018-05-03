export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`You cannot instantiate AbstractView`);
    }
  }

  get element() {
    if (!this._element) {
      this._element = this.render();

      this.bind();
    }

    return this._element;
  }

  get template() {
    throw new Error(`You have to define template for view`);
  }

  bind() {}

  render() {
    const element = document.createElement(`template`);

    element.innerHTML = this.template;

    return element.content;
  }
}
