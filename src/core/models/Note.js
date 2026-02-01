// src/core/models/Note.js

class Note {
  constructor({ pitch, octave, duration, accidental }) {
    this.pitch = pitch;
    this.octave = octave;
    this.duration = duration;
    this.accidental = accidental;
  }

  toMidi() {
    // Convertir nota a número MIDI
    const noteValues = { 'C': 0, 'D': 2, 'E': 4, 'F': 5, 'G': 7, 'A': 9, 'B': 11 };
    return 12 + (this.octave * 12) + noteValues[this.pitch];
  }

  getIntervalTo(otherNote) {
    // Calcular intervalo entre dos notas
    return Math.abs(this.toMidi() - otherNote.toMidi());
  }
}

module.exports = Note;