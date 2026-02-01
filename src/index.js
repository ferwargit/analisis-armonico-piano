// Entry point for the main application
// This file orchestrates the harmonic analysis

const Analyzer = require('./analysis/Analyzer');
const MusicXMLParser = require('./parsing/MusicXMLParser');
const OutputGenerator = require('./output/OutputGenerator');

module.exports = {
  Analyzer,
  MusicXMLParser,
  OutputGenerator,
};