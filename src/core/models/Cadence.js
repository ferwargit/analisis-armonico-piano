// src/core/models/Cadence.js

class Cadence {
  constructor(type, location, measures) {
    this.type = type;
    this.location = location;
    this.measures = measures;
    this.description = this.getDescription();
  }

  getDescription() {
    // Obtener descripción de la cadencia
    const descriptions = {
      'authenticPerfect': 'Cadencia auténtica perfecta (V-I)',
      'authenticImperfect': 'Cadencia auténtica imperfecta',
      'plagal': 'Cadencia plagal (IV-I)',
      'half': 'Medio clausurado (termina en V)',
      'deceptive': 'Cadencia deceptiva (V-vi)',
      'phrygian': 'Cadencia frigia (iv6-V)'
    };
    return descriptions[this.type] || 'Cadencia desconocida';
  }
}

module.exports = Cadence;