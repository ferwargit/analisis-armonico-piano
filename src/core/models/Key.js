// src/core/models/Key.js

class Key {
  constructor(tonic, mode) {
    this.tonic = tonic;
    this.mode = mode;
    this.fifths = this.calculateFifths();
  }

  calculateFifths() {
    // Calcular número de sostenidos o bemoles
    const keyFifths = {
      'C': 0, 'G': 1, 'D': 2, 'A': 3, 'E': 4, 'B': 5, 'F#': 6, 'Cb': -7,
      'F': -1, 'Bb': -2, 'Eb': -3, 'Ab': -4, 'Db': -5, 'Gb': -6, 'Bbb': -8
    };
    return keyFifths[this.tonic] || 0;
  }

  getScale() {
    // Obtener la escala correspondiente a la tonalidad
    return this.mode;
  }
}

module.exports = Key;