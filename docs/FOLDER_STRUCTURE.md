# 📁 Estructura de Carpetas - Análisis Armónico Piano

## Árbol Completo del Proyecto

```
analisis-armonico-piano/
│
├── 📁 .agent/ # Configuración de agentes IA
│ ├── config.extended.json # Configuración extendida de agentes
│ ├── config.simple.json # Configuración simple de agentes
│ ├── context.md # Contexto del proyecto para IAs
│ ├── rules.md # Reglas y restricciones
│ ├── skills.md # Habilidades requeridas
│ ├── session-templates.md # Plantillas de sesiones de desarrollo
│ ├── 📁 prompts/ # Prompts reutilizables
│ │ ├── generate-test.md
│ │ ├── implement-feature.md
│ │ └── minmax-analysis.md
│ └── 📁 models/ # Configuración por modelo
│ ├── claude.md
│ ├── gemini.md
│ ├── copilot.md
│ ├── minmax.md # Configuración para modelo MinMax
│ └── model-selection.md # Selección de modelo de IA
│
├── 📁 .vscode/ # Configuración VSCode
│ ├── settings.json
│ ├── extensions.json
│ ├── launch.json # Configuración de debugging
│ └── tasks.json # Tareas automatizadas
│
├── 📁 docs/ # Documentación del proyecto
│ ├── README.md # Índice de documentación
│ ├── PROJECT_PLAN.md
│ ├── FOLDER_STRUCTURE.md
│ ├── TASKS.md
│ ├── TESTING_STRATEGY.md
│ ├── SETUP.md
│ ├── DEVELOPMENT.md
│ ├── COMMIT_CONVENTION.md
│ ├── CHANGELOG.md
│ ├── 📁 api/ # Documentación de API interna
│ │ └── modules.md
│ ├── 📁 theory/ # Documentación teórica musical
│ │ ├── tonality-detection.md
│ │ ├── chord-detection.md
│ │ ├── cadences.md
│ │ └── scales.md
│ └── 📁 examples/ # Ejemplos de uso
│ ├── basic-analysis.md
│ └── advanced-analysis.md
│
├── 📁 src/ # Código fuente principal
│ │
│ ├── 📁 core/ # Núcleo: modelos y utilidades base
│ │ ├── index.js # Exportaciones del módulo
│ │ ├── 📁 models/ # Modelos de datos
│ │ │ ├── Note.js # Clase/modelo de nota
│ │ │ ├── Chord.js # Clase/modelo de acorde
│ │ │ ├── Measure.js # Clase/modelo de compás
│ │ │ ├── Key.js # Clase/modelo de tonalidad
│ │ │ ├── Scale.js # Clase/modelo de escala
│ │ │ ├── Cadence.js # Clase/modelo de cadencia
│ │ │ ├── Progression.js # Clase/modelo de progresión
│ │ │ └── index.js
│ │ ├── 📁 constants/ # Constantes musicales
│ │ │ ├── notes.js # Nombres de notas, enarmónicos
│ │ │ ├── intervals.js # Intervalos
│ │ │ ├── chordTypes.js # Tipos de acordes
│ │ │ ├── scaleTypes.js # Tipos de escalas
│ │ │ ├── modes.js # Modos
│ │ │ ├── cadenceTypes.js # Tipos de cadencias
│ │ │ └── index.js
│ │ └── 📁 utils/ # Utilidades generales
│ │ ├── noteUtils.js # Funciones de notas
│ │ ├── intervalUtils.js # Funciones de intervalos
│ │ ├── mathUtils.js # Funciones matemáticas
│ │ └── index.js
│ │
│ ├── 📁 parsing/ # Módulo de parsing MusicXML
│ │ ├── index.js
│ │ ├── MusicXMLParser.js # Parser principal
│ │ ├── 📁 extractors/ # Extractores específicos
│ │ │ ├── noteExtractor.js
│ │ │ ├── keyExtractor.js
│ │ │ ├── timeExtractor.js
│ │ │ ├── measureExtractor.js
│ │ │ └── index.js
│ │ └── 📁 transformers/ # Transformadores de datos
│ │ ├── handUnifier.js # Unificar manos piano
│ │ ├── handSeparator.js # Separar manos piano
│ │ └── index.js
│ │
│ ├── 📁 analysis/ # Módulo de análisis musical
│ │ ├── index.js
│ │ ├── Analyzer.js # Analizador principal (orquestador)
│ │ │
│ │ ├── 📁 tonality/ # Detección de tonalidad
│ │ │ ├── index.js
│ │ │ ├── TonalityDetector.js # Detector principal
│ │ │ ├── 📁 algorithms/ # Algoritmos individuales
│ │ │ │ ├── KrumhanslSchmuckler.js
│ │ │ │ ├── BassAnalysis.js
│ │ │ │ ├── NoteFrequency.js
│ │ │ │ ├── CadenceAnalysis.js
│ │ │ │ └── index.js
│ │ │ ├── ConsensusEngine.js # Motor de consenso
│ │ │ └── profiles.js # Perfiles de tonalidad K-S
│ │ │
│ │ ├── 📁 modality/ # Detección de modalidad
│ │ │ ├── index.js
│ │ │ ├── ModalityDetector.js
│ │ │ ├── majorModes.js # Modos de mayor
│ │ │ ├── melodicMinorModes.js
│ │ │ └── harmonicMinorModes.js
│ │ │
│ │ ├── 📁 chords/ # Detección de acordes
│ │ │ ├── index.js
│ │ │ ├── ChordDetector.js # Detector principal
│ │ │ ├── ChordIdentifier.js # Identificador de tipo
│ │ │ ├── InversionDetector.js
│ │ │ ├── TensionAnalyzer.js # Analizar tensiones
│ │ │ └── 📁 matchers/ # Matchers por tipo de acorde
│ │ │ ├── triadMatcher.js
│ │ │ ├── seventhMatcher.js
│ │ │ ├── extensionMatcher.js
│ │ │ └── index.js
│ │ │
│ │ ├── 📁 harmony/ # Análisis armónico
│ │ │ ├── index.js
│ │ │ ├── HarmonyAnalyzer.js # Analizador principal
│ │ │ ├── DegreeCalculator.js # Calcular grados
│ │ │ ├── FunctionAnalyzer.js # Funciones armónicas
│ │ │ ├── SecondaryDominants.js
│ │ │ ├── ModalBorrowing.js # Préstamo modal
│ │ │ └── 📁 nomenclature/
│ │ │ ├── romanNumerals.js
│ │ │ ├── nashvilleNumbers.js
│ │ │ └── index.js
│ │ │
│ │ ├── 📁 cadences/ # Detección de cadencias
│ │ │ ├── index.js
│ │ │ ├── CadenceDetector.js
│ │ │ ├── 📁 types/
│ │ │ │ ├── classical.js # Cadencias clásicas
│ │ │ │ ├── jazz.js # Cadencias jazz
│ │ │ │ └── index.js
│ │ │ └── CadenceLocator.js # Ubicar cadencias
│ │ │
│ │ ├── 📁 modulations/ # Detección de modulaciones
│ │ │ ├── index.js
│ │ │ ├── ModulationDetector.js
│ │ │ ├── AlterationAnalyzer.js
│ │ │ └── ProgressionAnalyzer.js
│ │ │
│ │ ├── 📁 scales/ # Detección/sugerencia de escalas
│ │ │ ├── index.js
│ │ │ ├── ScaleDetector.js
│ │ │ ├── ScaleSuggester.js
│ │ │ └── 📁 types/
│ │ │ ├── diatonic.js
│ │ │ ├── modes.js
│ │ │ ├── symmetric.js
│ │ │ ├── jazz.js
│ │ │ ├── pentatonic.js
│ │ │ └── index.js
│ │ │
│ │ └── 📁 chromatic/ # Notas cromáticas
│ │ ├── index.js
│ │ ├── ChromaticAnalyzer.js
│ │ └── NonChordTones.js # Notas de paso, bordaduras, etc.
│ │
│ ├── 📁 output/ # Módulo de generación de outputs
│ │ ├── index.js
│ │ ├── OutputGenerator.js # Generador principal
│ │ │
│ │ ├── 📁 musicxml/ # Generadores MusicXML
│ │ │ ├── index.js
│ │ │ ├── MusicXMLWriter.js # Escritor principal
│ │ │ ├── HarmonyWriter.js # Escribir armonías
│ │ │ └── 📁 variants/
│ │ │ ├── americanCifrado.js
│ │ │ ├── harmonySymbols.js
│ │ │ ├── cifradoWithDegrees.js
│ │ │ └── romanNumeralsOnly.js
│ │ │
│ │ ├── 📁 markdown/ # Generadores Markdown
│ │ │ ├── index.js
│ │ │ ├── ReportGenerator.js # Generador principal
│ │ │ ├── 📁 sections/ # Secciones del informe
│ │ │ │ ├── header.js
│ │ │ │ ├── summary.js
│ │ │ │ ├── measureAnalysis.js
│ │ │ │ ├── progression.js
│ │ │ │ ├── scales.js
│ │ │ │ ├── cadences.js
│ │ │ │ ├── modulations.js
│ │ │ │ ├── pedagogicalNotes.js
│ │ │ │ └── technicalData.js
│ │ │ └── 📁 templates/
│ │ │ ├── concise.js
│ │ │ ├── intermediate.js
│ │ │ └── detailed.js
│ │ │
│ │ └── 📁 json/ # Generadores JSON
│ │ ├── index.js
│ │ └── JSONExporter.js
│ │
│ ├── 📁 config/ # Configuración de la aplicación
│ │ ├── index.js
│ │ ├── default.json # Configuración por defecto
│ │ ├── ConfigLoader.js # Cargador de configuración
│ │ ├── analyzer.config.json # Configuración del analizador
│ │ ├── analyzer.schema.json # Esquema de validación del analizador
│ │ └── schemas/ # Esquemas de validación
│ │ └── configSchema.js
│ │
│ └── index.js # Punto de entrada principal
│
├── 📁 tests/ # Tests del proyecto
│ ├── 📁 unit/ # Tests unitarios
│ │ ├── 📁 core/
│ │ │ ├── models/
│ │ │ ├── constants/
│ │ │ └── utils/
│ │ ├── 📁 parsing/
│ │ ├── 📁 analysis/
│ │ │ ├── tonality/
│ │ │ ├── chords/
│ │ │ ├── harmony/
│ │ │ ├── cadences/
│ │ │ └── scales/
│ │ └── 📁 output/
│ │
│ └── 📁 e2e/ # Tests end-to-end
│ ├── 📁 integration/ # Tests de integración
│ │ ├── parsing.test.js
│ │ ├── fullAnalysis.test.js
│ │ └── outputGeneration.test.js
│ │
│ ├── 📁 fixtures/ # Datos de prueba
│ │ ├── 📁 musicxml/ # Archivos MusicXML de prueba
│ │ │ ├── simple-c-major.musicxml
│ │ │ ├── ii-v-i-jazz.musicxml
│ │ │ ├── modulation-example.musicxml
│ │ │ └── ...
│ │ ├── 📁 expected/ # Resultados esperados
│ │ │ ├── simple-c-major.json
│ │ │ └── ...
│ │ └── 📁 mocks/ # Mocks para tests
│ │
│ └── 📁 helpers/ # Utilidades para tests
│ ├── testUtils.js
│ └── musicTestHelpers.js
│
├── 📁 examples/ # Ejemplos de archivos
│ ├── 📁 input/ # MusicXML de ejemplo (input)
│ │ ├── classical-exercise-1.musicxml
│ │ ├── jazz-ii-v-i.musicxml
│ │ └── pop-progression.musicxml
│ ├── 📁 output/ # Outputs de ejemplo
│ └── 📁 templates/ # Plantillas para crear nuevos ejemplos
│ │ └── template.musicxml # Plantilla estándar con formato correcto
│ ├── classical-exercise-1/
│ │ ├── analysis.json
│ │ ├── report.md
│ │ ├── cifrado-americano.musicxml
│ │ ├── harmony-symbols.musicxml
│ │ ├── cifrado-with-degrees.musicxml
│ │ └── roman-numerals.musicxml
│ └── ...
│
├── 📁 scripts/ # Scripts de utilidad
│ ├── analyze.js # Script CLI para analizar
│ ├── generate-test-files.js # Generar archivos de prueba
│ ├── test-data.json # Datos de configuración para archivos de prueba
│ ├── validate-config.js # Validar configuración
│ ├── setup.js # Script de configuración inicial
│ └── verify-installation.js # Verificar instalación del proyecto
│
├── 📁 n8n/ # Integración n8n
│ ├── README.md
│ ├── 📁 workflows/ # Workflows exportados
│ │ └── harmonic-analysis.json
│ └── 📁 nodes/ # Código para nodos Code
│ ├── parseInput.js
│ ├── analyze.js
│ └── generateOutput.js
│
├── 📄 .gitignore
├── 📄 .eslintrc.json
├── 📄 .prettierrc
├── 📄 jest.config.js
├── 📄 package.json
├── 📄 README.md
└── 📄 LICENSE
```

---

## Descripción de Directorios Principales

### `/src/core/`

Contiene los **fundamentos** del proyecto:

- **models/**: Clases que representan entidades musicales
- **constants/**: Datos estáticos (nombres de notas, intervalos, tipos)
- **utils/**: Funciones helper reutilizables

### `/src/parsing/`

Responsable de **leer y transformar** MusicXML:

- Parsear el XML a objetos JavaScript
- Extraer información específica (notas, tonalidad, compás)
- Transformar datos (unificar/separar manos)

### `/src/analysis/`

El **corazón del proyecto** - toda la lógica de análisis:

- Cada subdirectorio es un dominio de análisis independiente
- Facilita testing aislado y desarrollo paralelo
- `Analyzer.js` orquesta todos los sub-analizadores

### `/src/output/`

Generación de **todos los outputs**:

- Variantes de MusicXML
- Informes Markdown con diferentes verbosidades
- Exportación JSON

### `/tests/`

Estructura espejo de `/src/` para tests:

- **unit/**: Tests de funciones/clases individuales
- **integration/**: Tests de flujos completos
- **fixtures/**: Archivos de prueba y resultados esperados

### `/.agent/`

Configuración para **asistentes IA**:

- Contexto del proyecto
- Reglas de código
- Prompts reutilizables
- Configuración por modelo

---

## Convenciones de Nombrado

| Tipo        | Convención             | Ejemplo                        |
| ----------- | ---------------------- | ------------------------------ |
| Archivos    | camelCase              | `chordDetector.js`             |
| Clases      | PascalCase             | `ChordDetector`                |
| Funciones   | camelCase              | `detectChord()`                |
| Constantes  | UPPER_SNAKE            | `MAJOR_SCALE`                  |
| Directorios | kebab-case o camelCase | `chord-types/` o `chordTypes/` |
| Tests       | `*.test.js`            | `ChordDetector.test.js`        |

---

_Última actualización: 2026-02-01_
