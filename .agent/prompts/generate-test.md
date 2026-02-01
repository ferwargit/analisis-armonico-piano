# Prompt: Generar Tests

## Instrucciones

Genera tests para el módulo indicado siguiendo estas pautas:

1. Ubicar tests en ruta espejo bajo tests/unit/
2. Usar describe/it con descripciones claras
3. Cubrir casos: happy path, edge cases, errores
4. Usar fixtures cuando sea apropiado
5. Mínimo 80% cobertura del módulo

---

## Template

```javascript
const ModuleName = require('path/to/module');

describe('ModuleName', () => {
  describe('methodName', () => {
    it('should [expected behavior] when [condition]', () => {
      // Arrange
      // Act
      // Assert
    });

    it('should throw error when [invalid condition]', () => {
      expect(() => {}).toThrow();
    });
  });
});
```
