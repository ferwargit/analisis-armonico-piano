// src/analysis/tonality/TonalityDetector.js

class TonalityDetector {
  constructor(options = {}) {
    this.options = options;
  }

  detect(notes, options = {}) {
    // Placeholder para la detección de tonalidad
    return {
      key: 'C',
      mode: 'major',
      confidence: 0.85
    };
  }
}

module.exports = new TonalityDetector();