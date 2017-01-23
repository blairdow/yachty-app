var _ = require('lodash');

var localEnvVars = {
  TITLE:      'yachty-app',
  SAFE_TITLE: 'yachty-app'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
