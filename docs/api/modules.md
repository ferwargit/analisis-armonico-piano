# Documentación de API Interna - Módulos

## Descripción

Este archivo documenta los módulos internos del sistema de análisis armónico.

## Módulos Principales

### Core Modules

- **Note**: Representa una nota musical con sus propiedades (altura, duración, etc.)
- **Chord**: Representa un acorde con sus notas y tipo
- **Measure**: Representa un compás con sus notas y acordes
- **Key**: Representa una tonalidad con su tónica y modo
- **Scale**: Representa una escala musical
- **Cadence**: Representa una cadencia armónica
- **Progression**: Representa una progresión armónica

### Analysis Modules

- **TonalityDetector**: Detecta la tonalidad principal de una pieza
- **ChordDetector**: Detecta acordes a partir de notas
- **HarmonyAnalyzer**: Analiza funciones armónicas
- **CadenceDetector**: Detecta cadencias armónicas
- **ScaleDetector**: Detecta y sugiere escalas

### Parsing Modules

- **MusicXMLParser**: Parsea archivos MusicXML
- **NoteExtractor**: Extrae información de notas
- **KeyExtractor**: Extrae información de tonalidad
- **MeasureExtractor**: Extrae información de compases

### Output Modules

- **JSONExporter**: Exporta resultados en formato JSON
- **ReportGenerator**: Genera informes en formato Markdown
- **MusicXMLWriter**: Genera archivos MusicXML con anotaciones

## Interfaces Comunes

### IAnalysisResult

Interfaz que define la estructura de un resultado de análisis:

```javascript
{
  tonality: {
    key: string,
    mode: string,
    confidence: number
  },
  chords: Array<IChord>,
  progression: IProgression,
  cadences: Array<ICadence>,
  scales: Array<IScale>
}
```

## Convenciones

- Todos los módulos deben exportar una clase o función constructora
- Los módulos deben tener pruebas unitarias asociadas
- La documentación debe seguir el estándar JSDoc