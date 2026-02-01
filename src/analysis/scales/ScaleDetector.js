// src/analysis/scales/ScaleDetector.js

class ScaleDetector {
  constructor(options = {}) {
    this.options = options;
  }

  detect(notes, key, options = {}) {
    // Placeholder para la detección de escalas
    return {
      scale: 'major',
      mode: 'ionian',
      confidence: 0.9
    };
  }
}

module.exports = new ScaleDetector();