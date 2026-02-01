// src/core/constants/modes.js

const MODES = {
  IONIAN: {
    name: 'Ioniano',
    degrees: ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°'],
    pattern: [2, 2, 1, 2, 2, 2, 1]
  },
  DORIAN: {
    name: 'Dórico',
    degrees: ['i', 'ii', 'III', 'IV', 'v', 'vi°', 'VII'],
    pattern: [2, 1, 2, 2, 2, 1, 2]
  },
  PHRYGIAN: {
    name: 'Frigio',
    degrees: ['i', 'II', 'III', 'iv', 'v°', 'VI', 'vii'],
    pattern: [1, 2, 2, 2, 1, 2, 2]
  },
  LIDIAN: {
    name: 'Lidio',
    degrees: ['I', 'II', 'iii°', 'iv', 'V', 'vi', 'vii'],
    pattern: [2, 2, 2, 1, 2, 2, 1]
  },
  MIXOLYDIAN: {
    name: 'Mixolidio',
    degrees: ['I', 'ii', 'iii°', 'IV', 'v', 'vi', 'VII'],
    pattern: [2, 2, 1, 2, 2, 1, 2]
  },
  AEOLIAN: {
    name: 'Eolio',
    degrees: ['i', 'ii°', 'III', 'iv', 'v', 'VI', 'VII'],
    pattern: [2, 1, 2, 2, 1, 2, 2]
  },
  LOCRIAN: {
    name: 'Locrio',
    degrees: ['i°', 'II', 'iii', 'iv', 'V', 'VI', 'vii'],
    pattern: [1, 2, 2, 1, 2, 2, 2]
  }
};

module.exports = MODES;