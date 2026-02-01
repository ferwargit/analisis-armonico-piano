// src/parsing/transformers/handSeparator.js

function separateHands(notes) {
  // Placeholder para separación de manos
  return {
    leftHand: notes.filter((_, index) => index % 2 === 0),
    rightHand: notes.filter((_, index) => index % 2 === 1)
  };
}

module.exports = { separateHands };