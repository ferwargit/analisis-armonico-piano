// src/parsing/extractors/timeExtractor.js

function extractTime(parsedData) {
  // Placeholder para extracción de compás
  return parsedData.time || { beats: 4, beatType: 4 };
}

module.exports = { extractTime };