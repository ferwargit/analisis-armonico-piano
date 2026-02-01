// src/core/constants/chordTypes.js

const CHORD_TYPES = {
  TRIADS: {
    MAJOR: 'major',
    MINOR: 'minor',
    DIMINISHED: 'diminished',
    AUGMENTED: 'augmented'
  },
  SEVENTHS: {
    MAJOR7: 'major7',
    DOMINANT7: 'dominant7',
    MINOR7: 'minor7',
    HALF_DIMINISHED7: 'halfDiminished7',
    DIMINISHED7: 'diminished7',
    MINOR_MAJOR7: 'minorMajor7'
  },
  EXTENSIONS: {
    NINTH: 'ninth',
    ELEVENTH: 'eleventh',
    THIRTEENTH: 'thirteenth',
    ALTERED: 'altered'
  },
  SUSPENDED: {
    SUS2: 'sus2',
    SUS4: 'sus4'
  },
  ADDED: {
    ADD9: 'add9',
    ADD11: 'add11',
    SIX_NINE: 'sixNine'
  }
};

module.exports = CHORD_TYPES;