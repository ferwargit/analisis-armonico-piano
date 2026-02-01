// src/config/default.js

module.exports = {
  version: '1.0.0',
  input: {
    format: 'musicxml',
    encoding: 'utf-8',
    validation: true
  },
  analysis: {
    piano: {
      handUnification: 'unified',
      options: ['unified', 'separate', 'both']
    },
    tonality: {
      algorithms: {
        krumhanslSchmuckler: {
          enabled: true,
          weight: 0.4
        },
        bassAnalysis: {
          enabled: true,
          weight: 0.2
        },
        noteFrequency: {
          enabled: true,
          weight: 0.2
        },
        cadenceAnalysis: {
          enabled: true,
          weight: 0.2
        }
      },
      consensusThreshold: 0.7,
      detectModes: true
    },
    chords: {
      granularity: 'beat',
      types: {
        triads: {
          major: true,
          minor: true,
          diminished: true,
          augmented: true
        },
        sevenths: {
          major7: true,
          dominant7: true,
          minor7: true,
          halfDiminished: true,
          diminished7: true,
          minorMajor7: true
        }
      }
    }
  },
  output: {
    formats: {
      musicxml: {
        enabled: true,
        variants: {
          americanCifrado: true,
          romanNumerals: true,
          combined: true,
          harmonySymbols: true
        }
      },
      markdown: {
        enabled: true,
        verbosity: 'intermediate'
      },
      json: {
        enabled: true,
        pretty: true
      }
    },
    directory: './output'
  },
  features: {
    phase: 1
  }
};