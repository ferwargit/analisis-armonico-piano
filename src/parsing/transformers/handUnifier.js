// src/parsing/transformers/handUnifier.js

function unifyHands(leftHand, rightHand) {
  // Placeholder para unificación de manos
  return [...leftHand, ...rightHand].sort((a, b) => a.time - b.time);
}

module.exports = { unifyHands };