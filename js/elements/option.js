export default (caption, rendering, optionsCount, images, width, height, labels) => `<p class="game__task">${caption ? caption : `Найдите ${images.keyword} среди изображений`}</p>
  <form class="game__content ${rendering}">
    ${Array(optionsCount).fill(``).map((it, i) => `<div class="game__option">
      <img src="${Array.isArray(images) ? images[i].url : images.items[i].url}" alt="Image${i + 1}" width="${width}" height="${height}">
      ${labels ? `<label class="game__answer  game__answer--photo">
        <input name="question${i + 1}" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--paint">
        <input name="question${i + 1}" type="radio" value="paint">
        <span>Рисунок</span>
      </label>` : ``}
    </div>`).join(``)}
  </form>`;
