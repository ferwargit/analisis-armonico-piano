// Entry point for the main application
// This file orchestrates the harmonic analysis

const Analyzer = require('./src/analysis/Analyzer');
const MusicXMLParser = require('./src/parsing/MusicXMLParser');
const OutputGenerator = require('./src/output/OutputGenerator');

module.exports = {
  Analyzer,
  MusicXMLParser,
  OutputGenerator,
};