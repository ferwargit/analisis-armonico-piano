// Helpers generales para pruebas

const fs = require('fs');
const path = require('path');

/**
 * Helper para cargar archivos de fixture
 * @param {string} fixturePath - Ruta relativa al archivo de fixture
 * @returns {string} Contenido del archivo
 */
function loadFixture(fixturePath) {
  const fullPath = path.join(__dirname, '..', 'fixtures', fixturePath);
  return fs.readFileSync(fullPath, 'utf8');
}

/**
 * Helper para crear datos de prueba de notas
 * @param {Array} notesData - Array de objetos con datos de notas
 * @returns {Array} Array de objetos Nota
 */
function createMockNotes(notesData) {
  return notesData.map(noteData => ({
    pitch: noteData.pitch || 'C',
    octave: noteData.octave || 4,
    duration: noteData.duration || 'quarter',
    accidental: noteData.accidental || null
  }));
}

/**
 * Helper para crear datos de prueba de acordes
 * @param {Array} chordData - Array de objetos con datos de acordes
 * @returns {Array} Array de objetos Acordes
 */
function createMockChords(chordData) {
  return chordData.map(chord => ({
    notes: createMockNotes(chord.notes),
    root: chord.root || 'C',
    type: chord.type || 'major',
    symbol: chord.symbol || 'C'
  }));
}

module.exports = {
  loadFixture,
  createMockNotes,
  createMockChords
};