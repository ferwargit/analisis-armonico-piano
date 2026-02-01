// src/analysis/scales/ScaleSuggester.js

class ScaleSuggester {
  constructor(options = {}) {
    this.options = options;
  }

  suggest(chord, context, options = {}) {
    // Placeholder para la sugerencia de escalas
    return [
      {
        scale: 'major',
        mode: 'ionian',
        rank: 1,
        confidence: 0.95
      }
    ];
  }
}

module.exports = new ScaleSuggester();