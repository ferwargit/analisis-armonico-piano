// src/core/models/Scale.js

class Scale {
  constructor(root, type, mode) {
    this.root = root;
    this.type = type;
    this.mode = mode;
    this.notes = this.generateScale();
  }

  generateScale() {
    // Generar notas de la escala
    return [this.root]; // Placeholder
  }

  getDegrees() {
    // Obtener grados de la escala
    return []; // Placeholder
  }
}

module.exports = Scale;