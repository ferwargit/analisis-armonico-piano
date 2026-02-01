// src/core/models/Progression.js

class Progression {
  constructor(chords, romanNumerals, functions) {
    this.chords = chords || [];
    this.romanNumerals = romanNumerals || [];
    this.functions = functions || [];
    this.description = this.getDescription();
  }

  getDescription() {
    // Obtener descripción de la progresión
    return `Progresión de ${this.chords.length} acordes`;
  }

  addChord(chord, romanNumeral, functionType) {
    this.chords.push(chord);
    this.romanNumerals.push(romanNumeral);
    this.functions.push(functionType);
  }
}

module.exports = Progression;