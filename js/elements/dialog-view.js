import AbstractView from '../view';

export default class DialogView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
      <div class="dialog">
        <p class="dialog__warning">Все результаты вашей игры будут потеряны!</p>
        <button class="dialog__btn  dialog__btn--ok" type="button">Понятно</button>
        <button class="dialog__btn  dialog__btn--cancel" type="button">Отмена</button>
      </div>`;
  }

  bind() {
    const dialog = this.element.querySelector(`.dialog`);

    dialog.addEventListener(`click`, (evt) => {
      evt.preventDefault();

      if (evt.target.classList.contains(`dialog__btn--ok`)) {
        this.onGoBack();
      } else if (evt.target.classList.contains(`dialog__btn--cancel`)) {
        this.onCancel();
      }
    });
  }

  onCancel() {}

  onGoBack() {}
}
