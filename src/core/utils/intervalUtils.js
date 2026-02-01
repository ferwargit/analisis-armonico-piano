// src/core/utils/intervalUtils.js

function calculateInterval(note1, note2) {
  // Calcular intervalo entre dos notas
  return Math.abs(note1.toMidi() - note2.toMidi()); // Placeholder
}

function intervalToQuality(intervalSemitones) {
  // Convertir número de semitonos a calidad de intervalo
  const qualities = {
    0: 'unison',
    1: 'minor second',
    2: 'major second',
    3: 'minor third',
    4: 'major third',
    5: 'perfect fourth',
    6: 'tritone',
    7: 'perfect fifth',
    8: 'minor sixth',
    9: 'major sixth',
    10: 'minor seventh',
    11: 'major seventh',
    12: 'octave'
  };
  return qualities[intervalSemitones] || 'unknown';
}

module.exports = {
  calculateInterval,
  intervalToQuality
};