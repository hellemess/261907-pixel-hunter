import adaptData from './data/adapter';

const URL = `https://es.dump.academy/pixel-hunter/questions`;

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  } else {
    throw new Error(`${response.statusText}`);
  }
};

export default class Loader {
  static loadData() {
    return fetch(URL)
        .then((response) => checkStatus(response))
        .then((response) => response.json())
        .then((data) => adaptData(data));
  }
}
