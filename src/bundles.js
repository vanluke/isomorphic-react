import syncComponent from './lib/sync-component';

const universalSrc = './universal';
/* eslint-disable */
export const Landing = syncComponent('Landing', require(`${universalSrc}/landing`));
export const Home = syncComponent('Home', require(`${universalSrc}/home`));
export const Test = syncComponent('test', require(`${universalSrc}/test`));
export const Accommodations = syncComponent('Accommodations', require(`${universalSrc}/accommodation`));
export const NotFound = syncComponent('NotFound',
  require(`${universalSrc}/not-found`));
export const Root = syncComponent('Root',
  require(`${universalSrc}/root`));