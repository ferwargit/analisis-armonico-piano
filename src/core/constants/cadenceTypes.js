// src/core/constants/cadenceTypes.js

const CADENCE_TYPES = {
  CLASSICAL: {
    AUTHENTIC_PERFECT: {
      name: 'Authentic Perfect',
      pattern: ['V', 'I'],
      description: 'Dominante a tónica, con voz superior descendente'
    },
    AUTHENTIC_IMPERFECT: {
      name: 'Authentic Imperfect',
      pattern: ['V', 'I'],
      description: 'Dominante a tónica, sin voz superior descendente'
    },
    PLAGAL: {
      name: 'Plagal',
      pattern: ['IV', 'I'],
      description: 'Subdominante a tónica'
    },
    HALF: {
      name: 'Half',
      pattern: ['I', 'V'],
      description: 'Cualquier acorde a dominante'
    },
    DECEPTIVE: {
      name: 'Deceptive',
      pattern: ['V', 'vi'],
      description: 'Dominante a relativo menor'
    },
    PHRYGIAN: {
      name: 'Phrygian Half',
      pattern: ['iv6', 'V'],
      description: 'Segunda grado menor en primera inversión a dominante'
    }
  },
  JAZZ_POP: {
    II_V_I: {
      name: 'Two-Five-One',
      pattern: ['ii', 'V', 'I'],
      description: 'Progresión característica del jazz'
    },
    BACKDOOR: {
      name: 'Backdoor',
      pattern: ['bVII', 'IV', 'I'],
      description: 'Substitución de dominante'
    },
    TRITONE_SUBSTITUTION: {
      name: 'Tritone Substitution',
      pattern: ['bII', 'I'],
      description: 'Dominante sustituida por tritono'
    },
    MODAL: {
      name: 'Modal Cadence',
      pattern: ['vii', 'I'],
      description: 'Progresión modal'
    }
  }
};

module.exports = CADENCE_TYPES;