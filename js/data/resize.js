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

export {resize};
