// src/core/models/Chord.js

class Chord {
  constructor(notes, root, type) {
    this.notes = notes;
    this.root = root;
    this.type = type;
    this.symbol = this.generateSymbol();
  }

  generateSymbol() {
    // Generar símbolo de acorde
    return this.root + this.getTypeSymbol();
  }

  getTypeSymbol() {
    // Obtener símbolo según tipo de acorde
    const symbols = {
      'major': '',
      'minor': 'm',
      'diminished': 'dim',
      'augmented': 'aug',
      'dominant7': '7',
      'major7': 'maj7',
      'minor7': 'm7'
    };
    return symbols[this.type] || '';
  }
}

module.exports = Chord;