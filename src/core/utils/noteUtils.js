// src/core/utils/noteUtils.js

function normalizeNoteName(note) {
  // Normalizar nombre de nota (convertir sostenidos a bemoles si es necesario)
  return note.replace('#', '♯').replace('b', '♭');
}

function getEnharmonicEquivalent(note) {
  // Obtener equivalente enarmónico
  const enharmonics = {
    'C#': 'Db',
    'Db': 'C#',
    'D#': 'Eb',
    'Eb': 'D#',
    'F#': 'Gb',
    'Gb': 'F#',
    'G#': 'Ab',
    'Ab': 'G#',
    'A#': 'Bb',
    'Bb': 'A#'
  };
  return enharmonics[note] || note;
}

function transposeNote(note, semitones) {
  // Transponer nota un número de semitonos
  return note; // Placeholder
}

module.exports = {
  normalizeNoteName,
  getEnharmonicEquivalent,
  transposeNote
};