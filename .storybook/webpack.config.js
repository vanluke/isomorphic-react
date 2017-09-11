require('babel-register')

const config = require('../webpack.config.js')

module.exports = function(storybookBaseConfig, configType) {
  console.log(storybookBaseConfig.module.rules);
  const rules = [
    ...storybookBaseConfig.module.rules,
    ...config[0].module.rules,
  ];
  return {
    ...storybookBaseConfig,
    resolve: {
      ...storybookBaseConfig.resolve,
      ...config[0].resolve,
    },
    module: {
      rules,
    },
  }
};
