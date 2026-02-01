// Entry point for the parsing module
// This file exports all parsing components

module.exports = {
  MusicXMLParser: require('./MusicXMLParser'),
  ...require('./extractors'),
  ...require('./transformers'),
};