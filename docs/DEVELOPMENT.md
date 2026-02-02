# Guía de Desarrollo - Análisis Armónico Piano

## Inicio Rápido

### Prerrequisitos

- Node.js 18+
- npm 9+
- Git
- VSCode (recomendado)

### Instalación

```bash
# Clonar repositorio
git clone <url-del-repo>
cd analisis-armonico-piano

# Instalar dependencias
npm install

# Verificar instalación
npm test

# Ejecutar ejemplo
npm run analyze -- --input examples/input/sample.musicxml
```

---

## Estructura del Proyecto

```
analisis-armonico-piano/
├── .agent/                    # Configuración de agentes IA
│   ├── config.json
│   ├── skills.md
│   ├── rules.md
│   └── session-template.md
├── .vscode/                   # Configuración VSCode
├── config/                    # Configuración del analizador
│   ├── analyzer.config.json
│   └── analyzer.schema.json
├── docs/                      # Documentación
├── examples/                  # Archivos MusicXML de ejemplo
│   ├── input/                 # Archivos MusicXML de entrada
│   ├── output/                # Archivos de salida generados
│   └── templates/             # Plantillas para crear nuevos ejemplos
│       └── template.musicxml  # Plantilla estándar con formato correcto
├── n8n/                       # Integración con n8n
│   ├── workflows/
│   └── nodes/
├── output/                    # Archivos generados (gitignored)
├── scripts/                   # Scripts de utilidad
├── src/                       # Código fuente principal
│   ├── core/                  # Modelos y utilidades base
│   │   ├── models/            # Modelos de datos
│   │   │   ├── Note.js
│   │   │   ├── Chord.js
│   │   │   ├── Measure.js
│   │   │   ├── Key.js
│   │   │   ├── Scale.js
│   │   │   ├── Cadence.js
│   │   │   ├── Progression.js
│   │   │   └── index.js
│   │   ├── constants/         # Constantes musicales
│   │   │   ├── notes.js
│   │   │   ├── intervals.js
│   │   │   ├── chordTypes.js
│   │   │   ├── scaleTypes.js
│   │   │   ├── modes.js
│   │   │   ├── cadenceTypes.js
│   │   │   └── index.js
│   │   ├── utils/             # Utilidades generales
│   │   │   ├── noteUtils.js
│   │   │   ├── intervalUtils.js
│   │   │   ├── mathUtils.js
│   │   │   └── index.js
│   │   └── index.js
│   ├── parsing/               # Módulo de parsing MusicXML
│   │   ├── MusicXMLParser.js
│   │   ├── extractors/        # Extractores específicos
│   │   │   ├── noteExtractor.js
│   │   │   ├── keyExtractor.js
│   │   │   ├── timeExtractor.js
│   │   │   ├── measureExtractor.js
│   │   │   └── index.js
│   │   ├── transformers/      # Transformadores de datos
│   │   │   ├── handUnifier.js
│   │   │   ├── handSeparator.js
│   │   │   └── index.js
│   │   └── index.js
│   ├── analysis/              # Módulos de análisis
│   │   ├── Analyzer.js        # Analizador principal
│   │   ├── tonality/          # Detección de tonalidad
│   │   │   ├── TonalityDetector.js
│   │   │   ├── algorithms/
│   │   │   │   ├── KrumhanslSchmuckler.js
│   │   │   │   ├── BassAnalysis.js
│   │   │   │   ├── NoteFrequency.js
│   │   │   │   ├── CadenceAnalysis.js
│   │   │   │   └── index.js
│   │   │   ├── ConsensusEngine.js
│   │   │   └── profiles.js
│   │   ├── modality/          # Detección de modalidad
│   │   ├── chords/            # Detección de acordes
│   │   ├── harmony/           # Análisis armónico
│   │   ├── cadences/          # Detección de cadencias
│   │   ├── modulations/       # Detección de modulaciones
│   │   ├── scales/            # Detección/sugerencia de escalas
│   │   ├── chromatic/         # Notas cromáticas
│   │   └── index.js
│   └── output/                # Generadores de output
│       ├── OutputGenerator.js
│       ├── musicxml/          # Generadores MusicXML
│       │   ├── MusicXMLWriter.js
│       │   ├── HarmonyWriter.js
│       │   └── variants/
│       ├── markdown/          # Generadores Markdown
│       │   ├── ReportGenerator.js
│       │   ├── sections/
│       │   └── templates/
│       ├── json/              # Generadores JSON
│       │   └── JSONExporter.js
│       └── index.js
├── tests/                     # Tests del proyecto
│   ├── unit/                  # Tests unitarios
│   │   ├── core/
│   │   │   ├── models/
│   │   │   ├── constants/
│   │   │   └── utils/
│   │   ├── parsing/
│   │   ├── analysis/
│   │   │   ├── tonality/
│   │   │   ├── chords/
│   │   │   ├── harmony/
│   │   │   ├── cadences/
│   │   │   └── scales/
│   │   └── output/
│   ├── integration/           # Tests de integración
│   ├── e2e/                   # Tests end-to-end
│   ├── fixtures/              # Datos de prueba
│   │   ├── musicxml/
│   │   ├── expected/
│   │   └── mocks/
│   └── helpers/               # Utilidades para tests
├── .eslintrc.json             # Configuración de ESLint
├── .prettierrc                # Configuración de Prettier
├── jest.config.js             # Configuración de Jest
├── .gitignore                 # Archivos a ignorar
├── package.json               # Configuración del proyecto
├── README.md                  # Documentación principal
└── LICENSE                    # Licencia del proyecto
```

---

## Configuración de Desarrollo

### Archivos de Configuración

El proyecto incluye los siguientes archivos de configuración:

- `package.json` - Define dependencias, scripts y metadatos del proyecto
- `jest.config.js` - Configuración para pruebas unitarias e integración
- `.eslintrc.json` - Reglas de estilo y buenas prácticas para el código
- `.prettierrc` - Configuración de formateo automático
- `.gitignore` - Lista de archivos excluidos del control de versiones
- `config/analyzer.config.json` - Configuración específica del analizador
- `config/analyzer.schema.json` - Esquema de validación de la configuración

### Scripts Disponibles

```bash
# Desarrollo
npm test                    # Ejecutar todos los tests
npm run test:watch         # Ejecutar tests en modo observación
npm run test:coverage      # Ejecutar tests con cobertura
npm run test:unit          # Ejecutar solo tests unitarios
npm run test:integration   # Ejecutar solo tests de integración
npm run lint               # Verificar calidad del código
npm run lint:fix           # Corregir problemas automáticamente
npm run format             # Formatear código
npm run analyze            # Ejecutar análisis de MusicXML
npm start                  # Ejecutar el programa principal
```

---

## Flujo de Trabajo

### 1. Antes de Empezar una Tarea

```bash
# Actualizar rama principal
git checkout main
git pull origin main

# Crear rama para la tarea
git checkout -b feature/nombre-descriptivo
```

### 2. Durante el Desarrollo

```bash
# Ejecutar tests en modo watch
npm run test:watch

# Lint mientras desarrollas
npm run lint

# Formatear código
npm run format

# Probar con archivo de ejemplo
npm run analyze -- --input examples/input/sample.musicxml
```

### 3. Antes de Commit

```bash
# Ejecutar todos los tests
npm test

# Verificar lint
npm run lint

# Formatear código
npm run format
```

### 4. Commit y PR

```bash
# Commits semánticos
git commit -m "feat(chords): add seventh chord detection"
git commit -m "fix(parser): handle empty measures"
git commit -m "test(tonality): add edge cases for minor keys"

# Push y crear PR
git push origin feature/nombre-descriptivo
```

---

## Convenciones de Código

### Nombrado

| Tipo       | Convención  | Ejemplo           |
| ---------- | ----------- | ----------------- |
| Archivos   | kebab-case  | chord-detector.js |
| Funciones  | camelCase   | detectChordType() |
| Constantes | UPPER_SNAKE | MAJOR_SCALE       |
| Clases     | PascalCase  | ChordAnalyzer     |

### Estructura de Función

```javascript
/**
 * Descripción breve de la función.
 *
 * @param {string} param1 - Descripción del parámetro
 * @param {Object} options - Opciones de configuración
 * @returns {Object} Descripción del retorno
 * @throws {Error} Cuándo lanza error
 *
 * @example
 * const result = myFunction('value', { option: true });
 */
export function myFunction(param1, options = {}) {
    // Validación de entrada
    if (!param1) {
        throw new Error("param1 is required");
    }

    // Lógica principal
    const result = processData(param1);

    // Retorno
    return result;
}
```

### Estructura de Test

```javascript
describe("ModuleName", () => {
    // Setup común
    let testData;

    beforeEach(() => {
        testData = createTestData();
    });

    describe("functionName", () => {
        describe("when condition A", () => {
            it("should do X", () => {
                // Arrange
                const input = "test";

                // Act
                const result = functionName(input);

                // Assert
                expect(result).toBe(expected);
            });
        });

        describe("when condition B", () => {
            it("should do Y", () => {
                // ...
            });
        });

        describe("edge cases", () => {
            it("should handle empty input", () => {
                // ...
            });

            it("should handle invalid input", () => {
                // ...
            });
        });
    });
});
```

---

## Testing

### Ejecutar Tests

```bash
# Todos los tests
npm test

# Con coverage
npm run test:coverage

# Solo un archivo
npm test -- path/to/file.test.js

# Solo tests que coincidan
npm test -- --testNamePattern="chord"

# Watch mode
npm run test:watch
```

### Escribir Tests

- Ubicación: `tests/unit/` para unitarios, `tests/integration/` para integración
- Nombrado: `[nombre-modulo].test.js`
- Fixtures: Archivos de prueba en `tests/fixtures/`

### Coverage Mínimo

| Tipo       | Mínimo |
| ---------- | ------ |
| Statements | 80%    |
| Branches   | 75%    |
| Functions  | 80%    |
| Lines      | 80%    |

---

## Módulos Principales

### Core

```javascript
// src/core/models/note.js
export class Note {
  constructor(pitch, octave, duration) { }
}

// src/core/models/chord.js
export class Chord {
  constructor(notes, root, type) { }
}

// src/core/constants/intervals.js
export const INTERVALS = { ... };

// src/core/constants/scales.js
export const SCALES = { ... };
```

### Parsing

```javascript
// src/parsing/musicxml-parser.js
export function parseMusicXML(xmlContent) {}
export function extractMeasures(parsed) {}
export function extractNotes(measure) {}
```

### Analysis

```javascript
// src/analysis/tonality/detector.js
export function detectTonality(notes, options) {}

// src/analysis/chords/detector.js
export function detectChord(notes, options) {}

// src/analysis/harmony/functions.js
export function analyzeHarmonicFunction(chord, key) {}
```

---

## Debugging

### VSCode

- Usar configuraciones de launch.json
- Breakpoints en el código
- Debug Console para evaluar expresiones

### Console Logging

```javascript
// Usar debug condicional
const DEBUG = process.env.DEBUG === "true";

function analyze(data) {
    if (DEBUG) console.log("[analyze] Input:", data);
    // ...
}
```

### Tests Fallidos

```bash
# Ejecutar solo el test fallido
npm test -- --testNamePattern="nombre del test"

# Con más información
npm test -- --verbose

# Debugging interactivo
node --inspect-brk node_modules/.bin/jest --runInBand
```

---

## Recursos

### Teoría Musical

- MusicXML Specification
- Music Theory Online
- Jazz Theory Book - Mark Levine

### Herramientas

- MuseScore 4 - Editor de partituras
- Postman - Testing API
- n8n - Automatización

### Documentación Interna

- `docs/PROJECT_PLAN.md` - Plan completo del proyecto
- `docs/CHANGELOG.md` - Historial de cambios
- `docs/API.md` - Documentación de API (futuro)
