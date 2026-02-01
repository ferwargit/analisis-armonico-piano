# 🧪 Estrategia de Testing - Análisis Armónico Piano

## Filosofía de Testing

```markdown
                  PIRÁMIDE DE TESTS

                         / \
                        /E2E\   (5%)
                       /-----\
                      / Integ \ (15%)
                     /---------\
                    /   Unit    \
                   /    Tests    \  (80%)
                  /_______________\
```

---

## Configuración de Jest

### jest.config.js

```javascript
module.exports = {
    // Entorno de ejecución
    testEnvironment: "node",

    // Patrones de archivos de test
    testMatch: ["**/tests/**/*.test.js", "**/__tests__/**/*.js"],

    // Ignorar directorios
    testPathIgnorePatterns: ["/node_modules/", "/n8n/"],

    // Cobertura de código
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: ["text", "lcov", "html"],

    // Umbrales mínimos de cobertura
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },

    // Directorios para cobertura
    collectCoverageFrom: ["src/**/*.js", "!src/index.js", "!src/**/index.js"],

    // Setup global antes de todos los tests
    setupFilesAfterEnv: ["./tests/helpers/setup.js"],

    // Verbose output
    verbose: true,

    // Timeout para tests
    testTimeout: 10000,
};
```

---

Estructura de Tests

```
tests/
├── unit/ # Tests unitarios (80%)
│ ├── core/
│ │ ├── models/
│ │ │ ├── Note.test.js
│ │ │ ├── Chord.test.js
│ │ │ ├── Measure.test.js
│ │ │ └── Key.test.js
│ │ ├── constants/
│ │ │ └── notes.test.js
│ │ └── utils/
│ │ ├── noteUtils.test.js
│ │ └── intervalUtils.test.js
│ │
│ ├── parsing/
│ │ ├── MusicXMLParser.test.js
│ │ ├── extractors/
│ │ │ ├── noteExtractor.test.js
│ │ │ └── keyExtractor.test.js
│ │ └── transformers/
│ │ └── handUnifier.test.js
│ │
│ └── analysis/
│ ├── tonality/
│ │ ├── TonalityDetector.test.js
│ │ ├── KrumhanslSchmuckler.test.js
│ │ └── ConsensusEngine.test.js
│ ├── chords/
│ │ ├── ChordDetector.test.js
│ │ ├── triadMatcher.test.js
│ │ └── InversionDetector.test.js
│ ├── harmony/
│ │ ├── DegreeCalculator.test.js
│ │ └── FunctionAnalyzer.test.js
│ └── cadences/
│ └── CadenceDetector.test.js
│
├── integration/ # Tests de integración (15%)
│ ├── parsing.integration.test.js
│ ├── analysis.integration.test.js
│ ├── output.integration.test.js
│ └── fullPipeline.integration.test.js
│
├── e2e/ # Tests end-to-end (5%)
│ └── workflow.e2e.test.js
│
├── fixtures/ # Datos de prueba
│ ├── musicxml/
│ │ ├── simple/
│ │ │ ├── c-major-triads.musicxml
│ │ │ ├── a-minor-triads.musicxml
│ │ │ └── g-major-sevenths.musicxml
│ │ ├── intermediate/
│ │ │ ├── ii-v-i-c-major.musicxml
│ │ │ └── modulation-c-to-g.musicxml
│ │ └── advanced/
│ │ ├── jazz-turnaround.musicxml
│ │ └── modal-dorian.musicxml
│ │
│ ├── expected/ # Resultados esperados
│ │ ├── c-major-triads.json
│ │ └── ...
│ │
│ └── mocks/ # Objetos mock
│ ├── mockNotes.js
│ ├── mockChords.js
│ └── mockMeasures.js
│
└── helpers/ # Utilidades para tests
├── setup.js # Configuración global
├── testUtils.js # Funciones helper
├── musicTestHelpers.js # Helpers específicos de música
└── matchers/ # Custom matchers de Jest
└── chordMatchers.js
```

---

Patrones de Testing

1. Tests Unitarios - Ejemplo Modelo Note

```js
// tests/unit/core/models/Note.test.js

const Note = require("../../../../src/core/models/Note");

describe("Note", () => {
    describe("constructor", () => {
        it("should create a note with basic properties", () => {
            const note = new Note({
                pitch: "C",
                octave: 4,
                duration: "quarter",
            });

            expect(note.pitch).toBe("C");
            expect(note.octave).toBe(4);
            expect(note.duration).toBe("quarter");
        });

        it("should handle accidentals", () => {
            const note = new Note({
                pitch: "F",
                octave: 4,
                accidental: "sharp",
            });

            expect(note.accidental).toBe("sharp");
            expect(note.fullName).toBe("F#4");
        });
    });

    describe("toMidi", () => {
        it.each([
            ["C", 4, 60],
            ["A", 4, 69],
            ["C", 5, 72],
            ["F#", 4, 66],
            ["Bb", 3, 58],
        ])("should convert %s%i to MIDI %i", (pitch, octave, expectedMidi) => {
            const note = new Note({ pitch, octave });
            expect(note.toMidi()).toBe(expectedMidi);
        });
    });

    describe("getInterval", () => {
        it("should calculate interval between two notes", () => {
            const c4 = new Note({ pitch: "C", octave: 4 });
            const e4 = new Note({ pitch: "E", octave: 4 });

            expect(c4.getIntervalTo(e4)).toBe(4); // Major 3rd in semitones
        });
    });
});
```

2. Tests Unitarios - Ejemplo ChordDetector

```js
// tests/unit/analysis/chords/ChordDetector.test.js

const ChordDetector = require("../../../../src/analysis/chords/ChordDetector");
const Note = require("../../../../src/core/models/Note");

describe("ChordDetector", () => {
    let detector;

    beforeEach(() => {
        detector = new ChordDetector();
    });

    describe("detect", () => {
        describe("triads", () => {
            it("should detect C major triad", () => {
                const notes = [
                    new Note({ pitch: "C", octave: 4 }),
                    new Note({ pitch: "E", octave: 4 }),
                    new Note({ pitch: "G", octave: 4 }),
                ];

                const chord = detector.detect(notes);

                expect(chord.root).toBe("C");
                expect(chord.type).toBe("major");
                expect(chord.symbol).toBe("C");
            });

            it("should detect A minor triad", () => {
                const notes = [
                    new Note({ pitch: "A", octave: 3 }),
                    new Note({ pitch: "C", octave: 4 }),
                    new Note({ pitch: "E", octave: 4 }),
                ];

                const chord = detector.detect(notes);

                expect(chord.root).toBe("A");
                expect(chord.type).toBe("minor");
                expect(chord.symbol).toBe("Am");
            });

            it("should detect B diminished triad", () => {
                const notes = [
                    new Note({ pitch: "B", octave: 3 }),
                    new Note({ pitch: "D", octave: 4 }),
                    new Note({ pitch: "F", octave: 4 }),
                ];

                const chord = detector.detect(notes);

                expect(chord.type).toBe("diminished");
                expect(chord.symbol).toBe("Bdim");
            });
        });

        describe("inversions", () => {
            it("should detect first inversion (3rd in bass)", () => {
                const notes = [
                    new Note({ pitch: "E", octave: 3 }), // Bass = 3rd
                    new Note({ pitch: "G", octave: 4 }),
                    new Note({ pitch: "C", octave: 5 }),
                ];

                const chord = detector.detect(notes);

                expect(chord.root).toBe("C");
                expect(chord.inversion).toBe(1);
                expect(chord.bass).toBe("E");
                expect(chord.symbolWithBass).toBe("C/E");
            });
        });

        describe("seventh chords", () => {
            it("should detect Cmaj7", () => {
                const notes = [
                    new Note({ pitch: "C", octave: 4 }),
                    new Note({ pitch: "E", octave: 4 }),
                    new Note({ pitch: "G", octave: 4 }),
                    new Note({ pitch: "B", octave: 4 }),
                ];

                const chord = detector.detect(notes);

                expect(chord.type).toBe("major7");
                expect(chord.symbol).toBe("Cmaj7");
            });

            it("should detect G7 (dominant)", () => {
                const notes = [
                    new Note({ pitch: "G", octave: 3 }),
                    new Note({ pitch: "B", octave: 3 }),
                    new Note({ pitch: "D", octave: 4 }),
                    new Note({ pitch: "F", octave: 4 }),
                ];

                const chord = detector.detect(notes);

                expect(chord.type).toBe("dominant7");
                expect(chord.symbol).toBe("G7");
            });
        });
    });
});
```

3. Tests de Tonalidad

```js
// tests/unit/analysis/tonality/TonalityDetector.test.js

const TonalityDetector = require("../../../../src/analysis/tonality/TonalityDetector");

describe("TonalityDetector", () => {
    let detector;

    beforeEach(() => {
        detector = new TonalityDetector();
    });

    describe("Krumhansl-Schmuckler", () => {
        it("should detect C major from typical note distribution", () => {
            // Distribución típica de notas en C mayor
            const noteDistribution = {
                C: 20,
                D: 8,
                E: 12,
                F: 10,
                G: 15,
                A: 8,
                B: 5,
            };

            const result = detector.detect(noteDistribution);

            expect(result.key).toBe("C");
            expect(result.mode).toBe("major");
            expect(result.confidence).toBeGreaterThan(0.8);
        });

        it("should detect A minor", () => {
            const noteDistribution = {
                A: 18,
                B: 6,
                C: 14,
                D: 8,
                E: 16,
                F: 8,
                G: 6,
            };

            const result = detector.detect(noteDistribution);

            expect(result.key).toBe("A");
            expect(result.mode).toBe("minor");
        });
    });

    describe("consensus", () => {
        it("should use multiple algorithms when available", () => {
            // ... test de consenso entre algoritmos
        });
    });
});
```

4. Tests de Integración

```js
// tests/integration/fullPipeline.integration.test.js

const fs = require("fs");
const path = require("path");
const Analyzer = require("../../src/analysis/Analyzer");
const MusicXMLParser = require("../../src/parsing/MusicXMLParser");

describe("Full Analysis Pipeline", () => {
    let parser;
    let analyzer;

    beforeEach(() => {
        parser = new MusicXMLParser();
        analyzer = new Analyzer();
    });

    describe("C major simple progression", () => {
        let result;

        beforeAll(async () => {
            const filePath = path.join(
                __dirname,
                "../fixtures/musicxml/simple/c-major-triads.musicxml",
            );
            const xmlContent = fs.readFileSync(filePath, "utf-8");

            const parsedData = await parser.parse(xmlContent);
            result = analyzer.analyze(parsedData);
        });

        it("should detect C major tonality", () => {
            expect(result.tonality.key).toBe("C");
            expect(result.tonality.mode).toBe("major");
        });

        it("should detect correct chord progression", () => {
            expect(result.progression.chords).toHaveLength(4);
            expect(result.progression.symbols).toEqual(["C", "F", "G", "C"]);
        });

        it("should identify authentic cadence", () => {
            expect(result.cadences).toContainEqual(
                expect.objectContaining({
                    type: "authentic",
                    location: "end",
                }),
            );
        });

        it("should assign correct Roman numerals", () => {
            expect(result.progression.romanNumerals).toEqual([
                "I",
                "IV",
                "V",
                "I",
            ]);
        });
    });

    describe("ii-V-I jazz progression", () => {
        // ... tests para progresión jazz
    });
});
```

---

Custom Matchers

```js
// tests/helpers/matchers/chordMatchers.js

expect.extend({
    toBeChordType(received, expectedType) {
        const pass = received.type === expectedType;
        return {
            message: () =>
                `expected chord ${received.symbol} to be type ${expectedType}, but got ${received.type}`,
            pass,
        };
    },

    toHaveRomanNumeral(received, expectedNumeral) {
        const pass = received.romanNumeral === expectedNumeral;
        return {
            message: () =>
                `expected ${received.symbol} to have Roman numeral ${expectedNumeral}, but got ${received.romanNumeral}`,
            pass,
        };
    },

    toBeInKey(received, expectedKey) {
        // Verificar que el acorde pertenece a la tonalidad
        const diatonicChords = getDiatonicChords(expectedKey);
        const pass = diatonicChords.includes(received.root);
        return {
            message: () =>
                `expected ${received.symbol} to be diatonic in ${expectedKey}`,
            pass,
        };
    },
});
```

---

## Datos de Prueba (Fixtures)

### Archivos MusicXML de Prueba a Crear

| Archivo                      | Contenido               | Propósito           |
| :--------------------------- | :---------------------- | :------------------ |
| `c-major-triads.musicxml`    | C-F-G-C en C mayor      | Test básico triadas |
| `a-minor-triads.musicxml`    | Am-Dm-E-Am              | Test menor natural  |
| `g-major-sevenths.musicxml`  | Gmaj7-Cmaj7-D7-G        | Test séptimas       |
| `ii-v-i-c-major.musicxml`    | Dm7-G7-Cmaj7            | Test jazz básico    |
| `inversions-test.musicxml`   | Acordes con inversiones | Test inversiones    |
| `modulation-c-to-g.musicxml` | Modulación C→G          | Test modulación     |
| `modal-dorian.musicxml`      | D dórico                | Test modos          |

---

## Scripts de NPM

```json
{
    "scripts": {
        "test": "jest",
        "test:watch": "jest --watch",
        "test:coverage": "jest --coverage",
        "test:unit": "jest tests/unit",
        "test:integration": "jest tests/integration",
        "test:e2e": "jest tests/e2e",
        "test:verbose": "jest --verbose",
        "test:ci": "jest --ci --coverage --reporters=default --reporters=jest-junit"
    }
}
```

---

## Cobertura Mínima por Módulo

- Módulo Cobertura Mínima
- core/models 90%
- core/utils 90%
- parsing 85%
- analysis/tonality 85%
- analysis/chords 90%
- analysis/harmony 80%
- analysis/cadences 80%
- output 75%

---

## Checklist Pre-Commit

- Todos los tests pasan (npm test)
- Cobertura cumple umbrales
- No hay tests saltados (.skip)
- Tests nuevos para código nuevo
- Tests de regresión para bugs corregidos

---

- Última actualización: 2026-02-01
