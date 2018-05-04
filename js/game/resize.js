const displayImagesCorrectly = (element, width, height) => {
  const images = element.querySelectorAll(`img`);

  images.forEach((it) => {
    it.removeAttribute(`width`);
    it.removeAttribute(`height`);

    const frame = {
      width,
      height
    };

    it.addEventListener(`load`, () => {
      const image = {
        width: it.width,
        height: it.height
      };

      const resizedImage = resize(frame, image);

      it.setAttribute(`width`, resizedImage.width);
      it.setAttribute(`height`, resizedImage.height);
    });
  });
};

const resize = (frame, image) => {
  const result = {};
  const frameRatio = frame.width / frame.height;
  const imageRatio = image.width / image.height;

  if (frameRatio === imageRatio) {
    result.width = frame.width;
    result.height = frame.height;
  } else if (frameRatio < imageRatio) {
    result.width = frame.width;
    result.height = Math.round(image.height / (image.width / frame.width));
  } else {
    result.width = Math.round(image.width / (image.height / frame.height));
    result.height = frame.height;
  }

  return result;
};

export {
  displayImagesCorrectly,
  resize
};
