// Entry point for the config module
// This file exports all configuration components

module.exports = {
  ConfigLoader: require('./ConfigLoader'),
  defaultConfig: require('./default'),
  ...require('./schemas'),
};