# 📝 Lista de Tareas - Análisis Armónico Piano

## Leyenda de Estados

| Símbolo | Estado      |
| ------- | ----------- |
| ⬜      | Pendiente   |
| 🔄      | En progreso |
| ✅      | Completado  |
| 🚫      | Bloqueado   |
| ⏸️      | Pausado     |

## Leyenda de Prioridades

| Símbolo | Prioridad |
| ------- | --------- |
| 🔴      | Crítica   |
| 🟠      | Alta      |
| 🟡      | Media     |
| 🟢      | Baja      |

---

# FASE 0: Setup Inicial

## F0.1 - Configuración del Proyecto

| ID      | Tarea                                       | Prioridad | Estado    | Notas                   |
| ------- | ------------------------------------------- | --------- | --------- | ----------------------- |
| F0.1.1  | ⬜ Crear repositorio Git                    | 🔴        | Pendiente |                         |
| F0.1.2  | ⬜ Inicializar npm (`npm init`)             | 🔴        | Pendiente |                         |
| F0.1.3  | ⬜ Crear estructura de carpetas             | 🔴        | Pendiente | Ver FOLDER_STRUCTURE.md |
| F0.1.4  | ⬜ Instalar dependencias base               | 🔴        | Pendiente | xml2js, jest            |
| F0.1.5  | ⬜ Configurar Jest                          | 🔴        | Pendiente | jest.config.js          |
| F0.1.6  | ⬜ Configurar ESLint                        | 🟠        | Pendiente |                         |
| F0.1.7  | ⬜ Configurar Prettier                      | 🟠        | Pendiente |                         |
| F0.1.8  | ⬜ Crear .gitignore                         | 🔴        | Pendiente |                         |
| F0.1.9  | ⬜ Configurar VSCode (settings, extensions) | 🟡        | Pendiente |                         |
| F0.1.10 | ⬜ Configurar carpeta .agent                | 🟡        | Pendiente |                         |

## F0.2 - Documentación Inicial

| ID     | Tarea                                 | Prioridad | Estado    | Notas        |
| ------ | ------------------------------------- | --------- | --------- | ------------ |
| F0.2.1 | ⬜ Crear README.md inicial            | 🟠        | Pendiente |              |
| F0.2.2 | ⬜ Copiar documentos de planificación | 🟠        | Pendiente | Este archivo |
| F0.2.3 | ⬜ Crear CHANGELOG.md                 | 🟢        | Pendiente |              |

## F0.3 - Archivos de Prueba

| ID     | Tarea                                                     | Prioridad | Estado    | Notas                 |
| ------ | --------------------------------------------------------- | --------- | --------- | --------------------- |
| F0.3.1 | ⬜ Crear MusicXML simple en MuseScore (C mayor, I-IV-V-I) | 🔴        | Pendiente | Archivo de referencia |
| F0.3.2 | ⬜ Crear MusicXML con séptimas                            | 🟠        | Pendiente |                       |
| F0.3.3 | ⬜ Crear MusicXML con inversiones                         | 🟠        | Pendiente |                       |
| F0.3.4 | ⬜ Crear MusicXML menor                                   | 🟠        | Pendiente |                       |

---

# FASE 1: MVP (Producto Mínimo Viable)

## F1.1 - Core: Modelos de Datos

| ID     | Tarea                  | Prioridad | Estado    | Notas                               |
| ------ | ---------------------- | --------- | --------- | ----------------------------------- |
| F1.1.1 | ⬜ Crear clase Note    | 🔴        | Pendiente | pitch, octave, duration, accidental |
| F1.1.2 | ⬜ Crear clase Chord   | 🔴        | Pendiente | notes, root, type, inversion        |
| F1.1.3 | ⬜ Crear clase Measure | 🔴        | Pendiente | number, notes, chords, beat         |
| F1.1.4 | ⬜ Crear clase Key     | 🔴        | Pendiente | tonic, mode, fifths                 |
| F1.1.5 | ⬜ Tests para modelos  | 🔴        | Pendiente |                                     |

## F1.2 - Core: Constantes Musicales

| ID     | Tarea                               | Prioridad | Estado    | Notas                 |
| ------ | ----------------------------------- | --------- | --------- | --------------------- |
| F1.2.1 | ⬜ Definir notas y enarmónicos      | 🔴        | Pendiente | C, C#/Db, D...        |
| F1.2.2 | ⬜ Definir intervalos               | 🔴        | Pendiente | m2, M2, m3...         |
| F1.2.3 | ⬜ Definir tipos de acordes básicos | 🔴        | Pendiente | maj, min, dim, aug, 7 |
| F1.2.4 | ⬜ Tests para constantes            | 🟡        | Pendiente |                       |

## F1.3 - Core: Utilidades

| ID     | Tarea                                             | Prioridad | Estado    | Notas |
| ------ | ------------------------------------------------- | --------- | --------- | ----- |
| F1.3.1 | ⬜ noteToMidi() - Convertir nota a número MIDI    | 🔴        | Pendiente |       |
| F1.3.2 | ⬜ midiToNote() - Convertir MIDI a nota           | 🔴        | Pendiente |       |
| F1.3.3 | ⬜ getInterval() - Calcular intervalo entre notas | 🔴        | Pendiente |       |
| F1.3.4 | ⬜ transposeNote() - Transportar nota             | 🟠        | Pendiente |       |
| F1.3.5 | ⬜ normalizeNoteName() - Normalizar nombre        | 🔴        | Pendiente |       |
| F1.3.6 | ⬜ Tests para utilidades                          | 🔴        | Pendiente |       |

## F1.4 - Parsing: MusicXML Parser

| ID     | Tarea                                 | Prioridad | Estado    | Notas            |
| ------ | ------------------------------------- | --------- | --------- | ---------------- |
| F1.4.1 | ⬜ Configurar xml2js                  | 🔴        | Pendiente |                  |
| F1.4.2 | ⬜ Crear MusicXMLParser.js base       | 🔴        | Pendiente |                  |
| F1.4.3 | ⬜ Implementar parse() - leer archivo | 🔴        | Pendiente |                  |
| F1.4.4 | ⬜ Implementar keyExtractor           | 🔴        | Pendiente | Extraer armadura |
| F1.4.5 | ⬜ Implementar timeExtractor          | 🔴        | Pendiente | Extraer compás   |
| F1.4.6 | ⬜ Implementar noteExtractor          | 🔴        | Pendiente | Extraer notas    |
| F1.4.7 | ⬜ Implementar measureExtractor       | 🔴        | Pendiente | Extraer compases |
| F1.4.8 | ⬜ Implementar handUnifier            | 🔴        | Pendiente | Unificar manos   |
| F1.4.9 | ⬜ Tests para parser                  | 🔴        | Pendiente |                  |

## F1.5 - Analysis: Detección de Tonalidad Básica

| ID     | Tarea                                 | Prioridad | Estado    | Notas                |
| ------ | ------------------------------------- | --------- | --------- | -------------------- |
| F1.5.1 | ⬜ Crear TonalityDetector.js          | 🔴        | Pendiente |                      |
| F1.5.2 | ⬜ Implementar Krumhansl-Schmuckler   | 🔴        | Pendiente | Algoritmo principal  |
| F1.5.3 | ⬜ Definir perfiles K-S (profiles.js) | 🔴        | Pendiente | Perfiles mayor/menor |
| F1.5.4 | ⬜ Calcular confianza/correlación     | 🔴        | Pendiente |                      |
| F1.5.5 | ⬜ Tests para tonalidad               | 🔴        | Pendiente |                      |

## F1.6 - Analysis: Detección de Acordes Básica

| ID     | Tarea                            | Prioridad | Estado    | Notas            |
| ------ | -------------------------------- | --------- | --------- | ---------------- |
| F1.6.1 | ⬜ Crear ChordDetector.js        | 🔴        | Pendiente |                  |
| F1.6.2 | ⬜ Implementar getNotesAtBeat()  | 🔴        | Pendiente | Notas por tiempo |
| F1.6.3 | ⬜ Implementar triadMatcher      | 🔴        | Pendiente | Detectar triadas |
| F1.6.4 | ⬜ Implementar seventhMatcher    | 🔴        | Pendiente | Detectar 7mas    |
| F1.6.5 | ⬜ Implementar InversionDetector | 🟠        | Pendiente |                  |
| F1.6.6 | ⬜ Tests para acordes            | 🔴        | Pendiente |                  |

## F1.7 - Analysis: Grados Básicos

| ID     | Tarea                            | Prioridad | Estado    | Notas |
| ------ | -------------------------------- | --------- | --------- | ----- |
| F1.7.1 | ⬜ Crear DegreeCalculator.js     | 🔴        | Pendiente |       |
| F1.7.2 | ⬜ Implementar getRomanNumeral() | 🔴        | Pendiente |       |
| F1.7.3 | ⬜ Tests para grados             | 🔴        | Pendiente |       |

## F1.8 - Output: JSON Básico

| ID     | Tarea                                | Prioridad | Estado    | Notas |
| ------ | ------------------------------------ | --------- | --------- | ----- |
| F1.8.1 | ⬜ Crear JSONExporter.js             | 🔴        | Pendiente |       |
| F1.8.2 | ⬜ Definir estructura JSON de salida | 🔴        | Pendiente |       |
| F1.8.3 | ⬜ Tests para exportación            | 🟠        | Pendiente |       |

## F1.9 - Integración MVP

| ID     | Tarea                                      | Prioridad | Estado    | Notas |
| ------ | ------------------------------------------ | --------- | --------- | ----- |
| F1.9.1 | ⬜ Crear Analyzer.js (orquestador)         | 🔴        | Pendiente |       |
| F1.9.2 | ⬜ Crear index.js principal                | 🔴        | Pendiente |       |
| F1.9.3 | ⬜ Crear script analyze.js (CLI)           | 🟠        | Pendiente |       |
| F1.9.4 | ⬜ Test de integración completo            | 🔴        | Pendiente |       |
| F1.9.5 | ⬜ Probar con archivos reales de MuseScore | 🔴        | Pendiente |       |

---

# FASE 2: Core Features

## F2.1 - Tonalidad: Algoritmos Adicionales

| ID     | Tarea                          | Prioridad | Estado    | Notas                    |
| ------ | ------------------------------ | --------- | --------- | ------------------------ |
| F2.1.1 | ⬜ Implementar BassAnalysis    | 🟠        | Pendiente | Primera/última nota bajo |
| F2.1.2 | ⬜ Implementar NoteFrequency   | 🟠        | Pendiente | Frecuencia de notas      |
| F2.1.3 | ⬜ Implementar CadenceAnalysis | 🟠        | Pendiente | Analizar cadencia final  |
| F2.1.4 | ⬜ Crear ConsensusEngine       | 🔴        | Pendiente | Combinar algoritmos      |
| F2.1.5 | ⬜ Tests para algoritmos       | 🟠        | Pendiente |                          |

## F2.2 - Funciones Armónicas Básicas

| ID     | Tarea                           | Prioridad | Estado    | Notas   |
| ------ | ------------------------------- | --------- | --------- | ------- |
| F2.2.1 | ⬜ Crear FunctionAnalyzer.js    | 🟠        | Pendiente |         |
| F2.2.2 | ⬜ Implementar Tónica (T)       | 🟠        | Pendiente | I, vi   |
| F2.2.3 | ⬜ Implementar Subdominante (S) | 🟠        | Pendiente | IV, ii  |
| F2.2.4 | ⬜ Implementar Dominante (D)    | 🟠        | Pendiente | V, vii° |
| F2.2.5 | ⬜ Tests para funciones         | 🟠        | Pendiente |         |

## F2.3 - Cadencias Clásicas

| ID     | Tarea                                | Prioridad | Estado    | Notas        |
| ------ | ------------------------------------ | --------- | --------- | ------------ |
| F2.3.1 | ⬜ Crear CadenceDetector.js          | 🟠        | Pendiente |              |
| F2.3.2 | ⬜ Detectar Auténtica Perfecta (V-I) | 🟠        | Pendiente |              |
| F2.3.3 | ⬜ Detectar Plagal (IV-I)            | 🟠        | Pendiente |              |
| F2.3.4 | ⬜ Detectar Semicadencia (→V)        | 🟠        | Pendiente |              |
| F2.3.5 | ⬜ Detectar Rota (V-vi)              | 🟠        | Pendiente |              |
| F2.3.6 | ⬜ Implementar CadenceLocator        | 🟠        | Pendiente | Compás 2 y 4 |
| F2.3.7 | ⬜ Tests para cadencias              | 🟠        | Pendiente |              |

## F2.4 - Output Markdown Básico

| ID     | Tarea                              | Prioridad | Estado    | Notas |
| ------ | ---------------------------------- | --------- | --------- | ----- |
| F2.4.1 | ⬜ Crear ReportGenerator.js        | 🔴        | Pendiente |       |
| F2.4.2 | ⬜ Implementar sección header      | 🟠        | Pendiente |       |
| F2.4.3 | ⬜ Implementar sección summary     | 🔴        | Pendiente |       |
| F2.4.4 | ⬜ Implementar sección progression | 🔴        | Pendiente |       |
| F2.4.5 | ⬜ Implementar sección cadences    | 🟠        | Pendiente |       |
| F2.4.6 | ⬜ Template intermedio             | 🟠        | Pendiente |       |
| F2.4.7 | ⬜ Tests para markdown             | 🟠        | Pendiente |       |

## F2.5 - Output MusicXML Básico

| ID     | Tarea                                        | Prioridad | Estado    | Notas             |
| ------ | -------------------------------------------- | --------- | --------- | ----------------- |
| F2.5.1 | ⬜ Investigar estructura Harmony en MusicXML | 🔴        | Pendiente | Documentación     |
| F2.5.2 | ⬜ Crear MusicXMLWriter.js                   | 🔴        | Pendiente |                   |
| F2.5.3 | ⬜ Implementar HarmonyWriter                 | 🔴        | Pendiente |                   |
| F2.5.4 | ⬜ Variante: cifrado americano               | 🔴        | Pendiente |                   |
| F2.5.5 | ⬜ Probar output en MuseScore                | 🔴        | Pendiente | Validación visual |
| F2.5.6 | ⬜ Tests para musicxml output                | 🟠        | Pendiente |                   |

## F2.6 - Configuración

| ID     | Tarea                             | Prioridad | Estado    | Notas |
| ------ | --------------------------------- | --------- | --------- | ----- |
| F2.6.1 | ⬜ Crear default.json             | 🟠        | Pendiente |       |
| F2.6.2 | ⬜ Crear ConfigLoader.js          | 🟠        | Pendiente |       |
| F2.6.3 | ⬜ Definir opciones configurables | 🟠        | Pendiente |       |
| F2.6.4 | ⬜ Tests para configuración       | 🟡        | Pendiente |       |

---

# FASE 3: Avanzado

## F3.1 - Acordes Completos

| ID     | Tarea                                       | Prioridad | Estado    | Notas |
| ------ | ------------------------------------------- | --------- | --------- | ----- |
| F3.1.1 | ⬜ Implementar extensionMatcher (9, 11, 13) | 🟠        | Pendiente |       |
| F3.1.2 | ⬜ Implementar sus2, sus4, add              | 🟠        | Pendiente |       |
| F3.1.3 | ⬜ Clasificar inversiones (1ra, 2da, 3ra)   | 🟠        | Pendiente |       |
| F3.1.4 | ⬜ Tests acordes extendidos                 | 🟠        | Pendiente |       |

## F3.2 - Tensiones y Avoid Notes

| ID     | Tarea                                | Prioridad | Estado    | Notas |
| ------ | ------------------------------------ | --------- | --------- | ----- |
| F3.2.1 | ⬜ Crear TensionAnalyzer.js          | 🟠        | Pendiente |       |
| F3.2.2 | ⬜ Identificar tensiones disponibles | 🟠        | Pendiente |       |
| F3.2.3 | ⬜ Identificar avoid notes           | 🟠        | Pendiente |       |
| F3.2.4 | ⬜ Tests para tensiones              | 🟠        | Pendiente |       |

## F3.3 - Modos y Escalas Completas

| ID      | Tarea                             | Prioridad | Estado    | Notas |
| ------- | --------------------------------- | --------- | --------- | ----- |
| F3.3.1  | ⬜ Crear ModalityDetector.js      | 🟠        | Pendiente |       |
| F3.3.2  | ⬜ Implementar 7 modos de mayor   | 🟠        | Pendiente |       |
| F3.3.3  | ⬜ Crear ScaleDetector.js         | 🟠        | Pendiente |       |
| F3.3.4  | ⬜ Crear ScaleSuggester.js        | 🟠        | Pendiente |       |
| F3.3.5  | ⬜ Implementar escalas diatónicas | 🟠        | Pendiente |       |
| F3.3.6  | ⬜ Implementar escalas simétricas | 🟡        | Pendiente |       |
| F3.3.7  | ⬜ Implementar escalas jazz       | 🟡        | Pendiente |       |
| F3.3.8  | ⬜ Implementar pentatónicas       | 🟡        | Pendiente |       |
| F3.3.9  | ⬜ Ranking de escalas por acorde  | 🟠        | Pendiente |       |
| F3.3.10 | ⬜ Tests para modos y escalas     | 🟠        | Pendiente |       |

## F3.4 - Cadencias Jazz

| ID     | Tarea                         | Prioridad | Estado    | Notas |
| ------ | ----------------------------- | --------- | --------- | ----- |
| F3.4.1 | ⬜ Detectar ii-V-I            | 🟠        | Pendiente |       |
| F3.4.2 | ⬜ Detectar Backdoor (bVII-I) | 🟡        | Pendiente |       |
| F3.4.3 | ⬜ Detectar cadencias modales | 🟡        | Pendiente |       |
| F3.4.4 | ⬜ Tests cadencias jazz       | 🟠        | Pendiente |       |

## F3.5 - Funciones Armónicas Avanzadas

| ID     | Tarea                                 | Prioridad | Estado    | Notas        |
| ------ | ------------------------------------- | --------- | --------- | ------------ |
| F3.5.1 | ⬜ Implementar dominantes secundarias | 🟠        | Pendiente | V/V, V/ii... |
| F3.5.2 | ⬜ Implementar sustitutos tritonales  | 🟡        | Pendiente |              |
| F3.5.3 | ⬜ Implementar préstamo modal         | 🟡        | Pendiente |              |
| F3.5.4 | ⬜ Implementar acordes de paso        | 🟡        | Pendiente |              |
| F3.5.5 | ⬜ Tests funciones avanzadas          | 🟠        | Pendiente |              |

## F3.6 - Modulaciones

| ID     | Tarea                          | Prioridad | Estado    | Notas |
| ------ | ------------------------------ | --------- | --------- | ----- |
| F3.6.1 | ⬜ Crear ModulationDetector.js | 🟠        | Pendiente |       |
| F3.6.2 | ⬜ Detectar por alteraciones   | 🟠        | Pendiente |       |
| F3.6.3 | ⬜ Detectar por progresiones   | 🟠        | Pendiente |       |
| F3.6.4 | ⬜ Tests modulaciones          | 🟠        | Pendiente |       |

## F3.7 - Notas Cromáticas

| ID     | Tarea                         | Prioridad | Estado    | Notas |
| ------ | ----------------------------- | --------- | --------- | ----- |
| F3.7.1 | ⬜ Crear ChromaticAnalyzer.js | 🟡        | Pendiente |       |
| F3.7.2 | ⬜ Clasificar notas de paso   | 🟡        | Pendiente |       |
| F3.7.3 | ⬜ Clasificar bordaduras      | 🟡        | Pendiente |       |
| F3.7.4 | ⬜ Clasificar apoyaturas      | 🟡        | Pendiente |       |
| F3.7.5 | ⬜ Sugerir función armónica   | 🟡        | Pendiente |       |
| F3.7.6 | ⬜ Tests notas cromáticas     | 🟡        | Pendiente |       |

## F3.8 - Informe Pedagógico Completo

| ID     | Tarea                                        | Prioridad | Estado    | Notas |
| ------ | -------------------------------------------- | --------- | --------- | ----- |
| F3.8.1 | ⬜ Implementar todas las secciones restantes | 🟠        | Pendiente |       |
| F3.8.2 | ⬜ Template conciso                          | 🟠        | Pendiente |       |
| F3.8.3 | ⬜ Template detallado                        | 🟠        | Pendiente |       |
| F3.8.4 | ⬜ Notas pedagógicas contextuales            | 🟡        | Pendiente |       |
| F3.8.5 | ⬜ Tests informe completo                    | 🟠        | Pendiente |       |

## F3.9 - MusicXML Variantes Completas

| ID     | Tarea                             | Prioridad | Estado    | Notas |
| ------ | --------------------------------- | --------- | --------- | ----- |
| F3.9.1 | ⬜ Variante: harmony symbols      | 🟠        | Pendiente |       |
| F3.9.2 | ⬜ Variante: cifrado + grados     | 🟠        | Pendiente |       |
| F3.9.3 | ⬜ Variante: solo romanos         | 🟠        | Pendiente |       |
| F3.9.4 | ⬜ Posición vertical configurable | 🟡        | Pendiente |       |
| F3.9.5 | ⬜ Tests todas las variantes      | 🟠        | Pendiente |       |

## F3.10 - Separación de Manos Configurable

| ID      | Tarea                        | Prioridad | Estado    | Notas |
| ------- | ---------------------------- | --------- | --------- | ----- |
| F3.10.1 | ⬜ Implementar handSeparator | 🟡        | Pendiente |       |
| F3.10.2 | ⬜ Opción en configuración   | 🟡        | Pendiente |       |
| F3.10.3 | ⬜ Tests separación          | 🟡        | Pendiente |       |

---

# FASE 4: Integración n8n

## F4.1 - Preparación del Código

| ID     | Tarea                                          | Prioridad | Estado    | Notas |
| ------ | ---------------------------------------------- | --------- | --------- | ----- |
| F4.1.1 | ⬜ Revisar compatibilidad con nodo Code de n8n | 🔴        | Pendiente |       |
| F4.1.2 | ⬜ Identificar dependencias problemáticas      | 🔴        | Pendiente |       |
| F4.1.3 | ⬜ Crear versión bundle si es necesario        | 🟠        | Pendiente |       |
| F4.1.4 | ⬜ Documentar limitaciones de n8n              | 🟠        | Pendiente |       |

## F4.2 - Nodos de n8n

| ID     | Tarea                            | Prioridad | Estado    | Notas |
| ------ | -------------------------------- | --------- | --------- | ----- |
| F4.2.1 | ⬜ Crear nodo: parseInput.js     | 🔴        | Pendiente |       |
| F4.2.2 | ⬜ Crear nodo: analyze.js        | 🔴        | Pendiente |       |
| F4.2.3 | ⬜ Crear nodo: generateOutput.js | 🔴        | Pendiente |       |
| F4.2.4 | ⬜ Tests de nodos                | 🟠        | Pendiente |       |

## F4.3 - Workflow n8n

| ID     | Tarea                                  | Prioridad | Estado    | Notas |
| ------ | -------------------------------------- | --------- | --------- | ----- |
| F4.3.1 | ⬜ Diseñar workflow completo           | 🔴        | Pendiente |       |
| F4.3.2 | ⬜ Configurar trigger (webhook/manual) | 🟠        | Pendiente |       |
| F4.3.3 | ⬜ Integrar nodos Code                 | 🔴        | Pendiente |       |
| F4.3.4 | ⬜ Exportar workflow como JSON         | 🟠        | Pendiente |       |
| F4.3.5 | ⬜ Documentar uso del workflow         | 🟠        | Pendiente |       |

## F4.4 - Postman

| ID     | Tarea                            | Prioridad | Estado    | Notas |
| ------ | -------------------------------- | --------- | --------- | ----- |
| F4.4.1 | ⬜ Crear colección Postman       | 🟠        | Pendiente |       |
| F4.4.2 | ⬜ Request: enviar MusicXML      | 🔴        | Pendiente |       |
| F4.4.3 | ⬜ Request: descargar resultados | 🔴        | Pendiente |       |
| F4.4.4 | ⬜ Documentar uso de Postman     | 🟠        | Pendiente |       |

## F4.5 - Documentación Final

| ID     | Tarea                    | Prioridad | Estado    | Notas |
| ------ | ------------------------ | --------- | --------- | ----- |
| F4.5.1 | ⬜ README completo       | 🔴        | Pendiente |       |
| F4.5.2 | ⬜ Guía de instalación   | 🔴        | Pendiente |       |
| F4.5.3 | ⬜ Guía de uso           | 🔴        | Pendiente |       |
| F4.5.4 | ⬜ Ejemplos documentados | 🟠        | Pendiente |       |
| F4.5.5 | ⬜ Troubleshooting       | 🟡        | Pendiente |       |

---

# Métricas del Proyecto

## Conteo de Tareas por Fase

| Fase      | Total   | Críticas 🔴 | Altas 🟠 | Medias 🟡 | Bajas 🟢 |
| --------- | ------- | ----------- | -------- | --------- | -------- |
| Fase 0    | 13      | 7           | 4        | 2         | 0        |
| Fase 1    | 35      | 28          | 5        | 2         | 0        |
| Fase 2    | 26      | 6           | 18       | 2         | 0        |
| Fase 3    | 40      | 0           | 26       | 14        | 0        |
| Fase 4    | 18      | 8           | 8        | 2         | 0        |
| **Total** | **132** | **49**      | **61**   | **22**    | **0**    |

---

## Progreso General

```markdown
Fase 0: [░░░░░░░░░░] 0% (0/13)
Fase 1: [░░░░░░░░░░] 0% (0/35)
Fase 2: [░░░░░░░░░░] 0% (0/26)
Fase 3: [░░░░░░░░░░] 0% (0/40)
Fase 4: [░░░░░░░░░░] 0% (0/18)
─────────────────────────────
Total: [░░░░░░░░░░] 0% (0/132)
```

---

_Última actualización: 2026-02-01_
