// src/core/constants/scaleTypes.js

const SCALE_TYPES = {
  MAJOR: 'major',
  MINOR: {
    NATURAL: 'naturalMinor',
    HARMONIC: 'harmonicMinor',
    MELODIC: 'melodicMinor'
  },
  MODAL: {
    IONIAN: 'ionian',
    DORIAN: 'dorian',
    PHRYGIAN: 'phrygian',
    LIDIAN: 'lydian',
    MIXOLYDIAN: 'mixolydian',
    AEOLIAN: 'aeolian',
    LOCRIAN: 'locrian'
  },
  SYMMETRIC: {
    WHOLE_TONE: 'wholeTone',
    DIMINISHED: 'diminished',
    AUGMENTED: 'augmented'
  },
  JAZZ: {
    BEBOP: 'bebop',
    BLUES: 'blues'
  },
  PENTATONIC: {
    MAJOR_PENTATONIC: 'majorPentatonic',
    MINOR_PENTATONIC: 'minorPentatonic'
  }
};

module.exports = SCALE_TYPES;