// Entry point for the analysis module
// This file exports all analysis components

module.exports = {
  Analyzer: require('./Analyzer'),
  ...require('./tonality'),
  ...require('./modality'),
  ...require('./chords'),
  ...require('./harmony'),
  ...require('./cadences'),
  ...require('./modulations'),
  ...require('./scales'),
  ...require('./chromatic'),
};