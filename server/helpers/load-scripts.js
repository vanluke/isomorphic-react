import path from 'path';

export const loadScripts = (bundlePath) => {
  try {
    const {render, handleRoutes} = require(path.join(__dirname, '..', bundlePath)); // eslint-disable-line
    return {
      render,
      handleRoutes,
    };
  } catch (e) {
    console.log(e);
    return {
      render() {}, 
      handleRoutes() {},
    };
  }
};