// src/config/ConfigLoader.js

class ConfigLoader {
  constructor(configPath = './config/analyzer.config.json') {
    this.configPath = configPath;
    this.config = this.loadConfig();
  }

  loadConfig() {
    // Cargar configuración desde archivo
    try {
      return require(this.configPath);
    } catch (error) {
      console.warn(`No se pudo cargar la configuración desde ${this.configPath}, usando valores por defecto`);
      return this.getDefaultConfig();
    }
  }

  getDefaultConfig() {
    // Configuración por defecto
    return {
      version: '1.0.0',
      input: {
        format: 'musicxml',
        encoding: 'utf-8',
        validation: true
      },
      analysis: {
        tonality: {
          algorithms: {
            krumhanslSchmuckler: { enabled: true, weight: 0.4 },
            bassAnalysis: { enabled: true, weight: 0.2 },
            noteFrequency: { enabled: true, weight: 0.2 },
            cadenceAnalysis: { enabled: true, weight: 0.2 }
          }
        }
      }
    };
  }

  get(key) {
    // Obtener valor de configuración por clave
    return key.split('.').reduce((obj, k) => obj?.[k], this.config);
  }

  set(key, value) {
    // Establecer valor de configuración
    const keys = key.split('.');
    let current = this.config;
    
    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) current[keys[i]] = {};
      current = current[keys[i]];
    }
    
    current[keys[keys.length - 1]] = value;
  }
}

module.exports = new ConfigLoader();