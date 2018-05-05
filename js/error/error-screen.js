import AbstractView from '../view';

export default class ErrorScreen extends AbstractView {
  constructor(error) {
    super();
    this.error = error;
  }

  get template() {
    return `
    <div class="dialog">
      <p class="dialog__warning">Что-то пошло не так! Сервер прислал данные:</p>
      <span class="dialog__error">${this.error}</span>
    </div>`;
  }
}
