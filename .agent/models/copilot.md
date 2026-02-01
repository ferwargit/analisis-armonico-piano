# GitHub Copilot - Configuración para Análisis Armónico Piano

## Versión Recomendada

- **Copilot Chat** (integrado en VSCode)
- **Copilot Edits** (para refactoring)

---

## Fortalezas para este Proyecto

### 1. Autocompletado Contextual

- Completa funciones basándose en el proyecto
- Aprende patrones del código existente
- Sugerencias inline mientras escribes

### 2. Integración VSCode

- Sin cambio de contexto
- Acceso directo a archivos del proyecto
- Comandos integrados (/fix, /explain, /tests)

### 3. Velocidad de Iteración

- Sugerencias instantáneas
- Ideal para código repetitivo
- Buenos para implementar patrones establecidos

---

## Configuración Óptima

### settings.json

```json
{
  "github.copilot.enable": {
    "*": true,
    "markdown": true,
    "yaml": true
  },
  "github.copilot.advanced": {
    "temperature": 0.1,
    "top_p": 0.95
  }
}
```

### Archivo .github/copilot-instructions.md

```markdown
# Instrucciones para Copilot

## Contexto del Proyecto
Este es un analizador armónico musical para archivos MusicXML.
Stack: Node.js, Jest, xml2js

## Convenciones de Código
- Usar ES Modules (import/export)
- Funciones puras cuando sea posible
- JSDoc para documentación
- Nombrar en inglés, comentarios en español permitidos
```

---

## Patrones Comunes

### Estructura de Módulo

```javascript
/**
 * @description Descripción del módulo
 * @module nombre-modulo
 */

// Imports
import { dependency } from './dependency.js';

// Constants
const CONSTANT = 'value';

// Main functions
export function mainFunction(param) {
  // implementation
}

// Helper functions (private)
function helperFunction() {
  // implementation
}
```

### Estructura de Test

```javascript
describe('ModuleName', () => {
  describe('functionName', () => {
    it('should do something when condition', () => {
      // Arrange
      // Act
      // Assert
    });
  });
});
```

### Terminología Musical

```
note:        nota individual (C4, D#5)
chord:       acorde (Cmaj7, Dm)
progression: secuencia de acordes
cadence:     cadencia (V-I, IV-I)
measure:     compás
beat:        tiempo/pulso
```

---

## Comandos Útiles

| Comando      | Uso                            |
|--------------|--------------------------------|
| `/explain`   | Explicar código seleccionado   |
| `/fix`       | Corregir errores               |
| `/tests`     | Generar tests                  |
| `/doc`       | Generar documentación          |
| `Ctrl+I`     | Copilot Chat inline            |

---

## Tareas Ideales para Copilot

| Tarea                  | Prioridad | Razón                      |
|------------------------|-----------|----------------------------|
| Autocompletado         | ⭐⭐⭐     | Nativo y rápido            |
| Implementar patrones   | ⭐⭐⭐     | Aprende del proyecto       |
| Tests similares        | ⭐⭐⭐     | Replica estructura         |
| Boilerplate            | ⭐⭐⭐     | Muy eficiente              |
| Lógica compleja        | ⭐         | Preferir Claude            |
| Arquitectura           | ⭐         | Preferir Claude            |

---

## Limitaciones

1. **Contexto limitado**: No ve todo el proyecto
2. **Puede inventar APIs**: Validar imports
3. **Menos razonamiento**: Para lógica compleja usar otros modelos

---

## Integración con Workflow

```
┌─────────────────────────────────────────────────────────┐
│                   WORKFLOW COPILOT                       │
├─────────────────────────────────────────────────────────┤
│  1. Escribir firma de función → Copilot autocompleta    │
│  2. Escribir primer test → Copilot genera similares     │
│  3. Código repetitivo → Copilot inline                  │
│  4. Refactoring menor → Copilot Edits                   │
│  5. Lógica compleja → Cambiar a Claude/Gemini           │
└─────────────────────────────────────────────────────────┘
```
