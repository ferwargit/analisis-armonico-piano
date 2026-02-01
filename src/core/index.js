// Entry point for the core module
// This file exports all core components

module.exports = {
  // Models
  Note: require('./models/Note'),
  Chord: require('./models/Chord'),
  Measure: require('./models/Measure'),
  Key: require('./models/Key'),
  Scale: require('./models/Scale'),
  Cadence: require('./models/Cadence'),
  Progression: require('./models/Progression'),

  // Constants
  NOTES: require('./constants/notes'),
  INTERVALS: require('./constants/intervals'),
  CHORD_TYPES: require('./constants/chordTypes'),
  SCALE_TYPES: require('./constants/scaleTypes'),
  MODES: require('./constants/modes'),
  CADENCE_TYPES: require('./constants/cadenceTypes'),

  // Utils
  ...require('./utils'),
};