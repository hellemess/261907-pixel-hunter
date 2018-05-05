import adaptData from './data/adapter';

const APP_ID = 4815162342;
const DEFAULT_NAME = `shuri`;
const URL = `https://es.dump.academy/pixel-hunter`;

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  } else {
    throw new Error(`${response.status}`);
  }
};

export default class Loader {
  static getData() {
    return fetch(`${URL}/questions`)
        .then(checkStatus)
        .then((response) => response.json())
        .then((data) => adaptData(data));
  }

  static getStats(name) {
    return fetch(`${URL}/stats/${APP_ID}-${name}`)
        .then(checkStatus)
        .then((response) => response.json());
  }

  static postStats(data, name = DEFAULT_NAME) {
    const requestSettings = {
      method: `POST`,
      headers: {
        'Content-Type': `application/json`
      },
      body: JSON.stringify(data)
    };

    return fetch(`${URL}/stats/${APP_ID}-${name}`, requestSettings)
        .then(checkStatus);
  }
}
