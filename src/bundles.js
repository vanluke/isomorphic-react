import syncComponent from './lib/sync-component';

const universalSrc = './universal';

export const Landing = syncComponent('Landing', require(`${universalSrc}/landing`));
export const Home = syncComponent('Home', require(`${universalSrc}/home`));
export const Test = syncComponent('test', require(`${universalSrc}/test`));
