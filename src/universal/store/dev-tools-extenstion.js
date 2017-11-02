import {composeWithDevTools} from 'redux-devtools-extension'; // eslint-disable-line

const env = process && process.env && process.env.NODE_ENV;

console.log('ENV is ', env);

export default function () {
  return env === 'development' && typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION__ // eslint-disable-line no-underscore-dangle
    ? composeWithDevTools
    : () => arg => arg;
}
