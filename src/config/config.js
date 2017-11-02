import dev from './development.json';
import prod from './production.json';
import test from './test.json';

const configs = {
  development: {...dev},
  production: {...prod},
  test: {...test},
};

const env = (process && process.env && process.env.NODE_ENV) || 'development';

export default {
  ...configs[env],
};
