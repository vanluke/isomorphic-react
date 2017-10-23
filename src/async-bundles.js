import asyncComponent from './lib/async-component';

const universalSrc = './universal';
/* eslint-disable */
export const Landing = asyncComponent('Landing',
  () => import(`${universalSrc}/landing`));
export const Home = asyncComponent('Home',
  () => import(`${universalSrc}/home`));
export const About = asyncComponent('About',
  () => import(`${universalSrc}/about`));
export const Accommodations = asyncComponent('Accommodations',
  () => import(`${universalSrc}/accommodation`));
export const NotFound = asyncComponent('NotFound',
  () => import(`${universalSrc}/not-found`));
export const Root = asyncComponent('Root',
  () => import(`${universalSrc}/root`));