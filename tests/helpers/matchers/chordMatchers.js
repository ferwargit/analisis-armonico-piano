// Custom matchers para pruebas de música

const { equals } = require('jest').getState();

expect.extend({
  /**
   * Comprueba si un acorde es del tipo esperado
   */
  toBeChordType(received, expectedType) {
    const pass = received.type === expectedType;
    
    return {
      message: () =>
        `Se esperaba que el acorde fuera de tipo ${expectedType}, pero era ${received.type}`,
      pass,
    };
  },

  /**
   * Comprueba si una tonalidad es la esperada
   */
  toBeInKey(received, expectedKey) {
    const pass = received.key === expectedKey;
    
    return {
      message: () =>
        `Se esperaba que la tonalidad fuera ${expectedKey}, pero era ${received.key}`,
      pass,
    };
  },

  /**
   * Comprueba si un número romano es el esperado
   */
  toHaveRomanNumeral(received, expectedNumeral) {
    const pass = received.romanNumeral === expectedNumeral;
    
    return {
      message: () =>
        `Se esperaba que el numeral romano fuera ${expectedNumeral}, pero era ${received.romanNumeral}`,
      pass,
    };
  }
});

module.exports = {};