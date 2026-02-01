// src/core/models/Measure.js

class Measure {
  constructor(number, notes, chords) {
    this.number = number;
    this.notes = notes || [];
    this.chords = chords || [];
    this.timeSignature = { beats: 4, beatType: 4 };
  }

  addNote(note) {
    this.notes.push(note);
  }

  addChord(chord) {
    this.chords.push(chord);
  }
}

module.exports = Measure;