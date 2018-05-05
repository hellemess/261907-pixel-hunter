import {
  AnswerType,
  QuestionType
} from './data';

import {resize} from './resize';

const QuestionTypeConverter = {
  'tinder-like': QuestionType.TINDER_LIKE,
  'two-of-two': QuestionType.TWO_OF_TWO,
  'one-of-three': QuestionType.ONE_OF_THREE
};

const AnswerTypeConverter = {
  'painting': AnswerType.PAINTING,
  'photo': AnswerType.PHOTO
};

const assignAdditionalClass = (level) => {
  switch (level.type) {
    case QuestionType.TINDER_LIKE:
      level.class = `game__content--wide`;
      break;
    case QuestionType.ONE_OF_THREE:
      level.class = `game__content--triple`;
      break;
  }
};

const createImageElement = (imageData, i) => {
  const imageElement = new Image();

  const frame = {
    height: imageData.height,
    width: imageData.width
  };

  imageElement.src = imageData.url;
  imageElement.alt = `Option ${i + 1}`;

  imageElement.addEventListener(`load`, () => {
    const image = {
      height: imageElement.height,
      width: imageElement.width
    };

    const resizedImage = resize(frame, image);

    imageElement.setAttribute(`width`, resizedImage.width);
    imageElement.setAttribute(`height`, resizedImage.height);
  });

  return imageElement;
};

export default (data) => {
  data.forEach((it) => {
    it.type = QuestionTypeConverter[it.type];

    assignAdditionalClass(it);

    it.answers.forEach((answer, i) => {
      answer.image.type = AnswerTypeConverter[answer.image.type];
      answer.image.element = createImageElement(answer.image, i);
    });
  });

  return data;
};
