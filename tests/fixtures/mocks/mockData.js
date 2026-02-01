// Mocks para pruebas

const mockNotes = [
  { pitch: 'C', octave: 4, duration: 'quarter' },
  { pitch: 'E', octave: 4, duration: 'quarter' },
  { pitch: 'G', octave: 4, duration: 'quarter' }
];

const mockChords = [
  {
    root: 'C',
    type: 'major',
    symbol: 'C',
    notes: mockNotes
  }
];

const mockMeasures = [
  {
    number: 1,
    notes: mockNotes,
    chords: mockChords
  }
];

module.exports = {
  mockNotes,
  mockChords,
  mockMeasures
};