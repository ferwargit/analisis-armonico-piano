// src/parsing/extractors/keyExtractor.js

function extractKey(parsedData) {
  // Placeholder para extracción de armadura
  return parsedData.key || { fifths: 0, mode: 'major' };
}

module.exports = { extractKey };