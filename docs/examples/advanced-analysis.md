# Análisis Avanzado

## Introducción

Este documento explica cómo realizar análisis armónicos avanzados usando el sistema de Análisis Armónico Piano, incluyendo detección de modulaciones, progresiones complejas y análisis funcional detallado.

## Configuración Avanzada

### Parámetros de Análisis

Para análisis avanzados, se pueden ajustar parámetros específicos en la configuración:

```json
{
  "analysis": {
    "advanced": {
      "modulationDetection": {
        "enabled": true,
        "sensitivity": 0.7,
        "methods": ["alteration", "progression", "commonTone"]
      },
      "chromaticAnalysis": {
        "enabled": true,
        "nonChordTones": {
          "enabled": true,
          "types": ["passing", "neighboring", "appoggiatura", "escape", "anticipation", "suspension"]
        }
      },
      "modalAnalysis": {
        "enabled": true,
        "modes": ["dorian", "phrygian", "lydian", "mixolydian", "aeolian", "locrian"],
        "borrowedChords": {
          "enabled": true,
          "detection": true
        }
      },
      "jazzHarmony": {
        "enabled": true,
        "extensions": ["9th", "11th", "13th"],
        "alterations": ["b9", "#9", "#11", "b13"],
        "substitutions": {
          "tritone": true,
          "tonic": true,
          "dominant": true
        }
      }
    }
  }
}
```

## Análisis de Modulaciones

### Tipos de Modulaciones Detectadas

#### 1. Por Alteraciones Características

Detecta modulaciones a través de alteraciones que son características de la nueva tonalidad:

```javascript
// Ejemplo de detección de modulación
const modulationExample = {
  from: { key: "C", mode: "major" },
  to: { key: "G", mode: "major" },
  method: "characteristicAlteration",
  evidence: {
    // Alteraciones que indican la nueva tonalidad
    alterations: ["F#"],
    // Progresión que confirma la modulación
    progression: ["D7", "G"]
  },
  confidence: 0.85
};
```

#### 2. Por Progresiones Típicas

Identifica progresiones que comúnmente indican modulación:

- V7/ii → ii → V → I (modulación a la tonalidad relativa)
- V7/V → V → I (modulación a la dominante)
- N6 → V → I (modulación con acorde neapolitano)

#### 3. Por Tono Común

Detecta modulaciones que utilizan un acorde común como pivote entre tonalidades.

## Análisis de Notas Cromáticas

El sistema identifica y clasifica notas cromáticas:

### Tipos de Notas Cromáticas

| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| Paso | Conecta melodías por movimiento cromático | E♮ entre E♭ y F |
| Bordadura | Movimiento cromático de y hacia la misma nota | E♭ rodeando E♮ |
| Apoyatura | Nota cromática resolviendo por grado conjunto | E♭ resolviendo a D |
| Escapada | Nota cromática desde una nota fuerte | D resolviendo a E♭ |

### Configuración de Análisis Cromático

```json
{
  "analysis": {
    "chromatic": {
      "nonChordTones": {
        "enabled": true,
        "detection": {
          "passingTones": true,
          "neighboringTones": true,
          "appoggiaturas": true,
          "escapeTones": true,
          "anticipations": true,
          "suspensions": true,
          "chromaticApproaches": true
        },
        "classification": {
          "method": "contextual",
          "options": ["contextual", "metrical", "voiceLeading"]
        }
      }
    }
  }
}
```

## Análisis Modal

### Modos de la Escala Mayor

El sistema puede analizar música en modos:

```javascript
// Ejemplo de análisis en modo Dórico
const dorianAnalysis = {
  mode: "dorian",
  tonic: "D",
  characteristicNotes: ["B♭", "F"],
  harmonicFunctions: {
    // En Dórico, el IV grado tiene función de dominante
    "IV": { function: "dominant", chord: "G", romanNumeral: "IV" }
  }
};
```

### Préstamos Modales

Detecta acordes tomados prestados de modos paralelos:

- Acordes de modo frigio en contexto mayor (bII, bVI, bVII)
- Acordes de modo lidio en contexto mayor (#IV)
- Acordes de modo jónico en contexto menor (bVI, bVII)

## Análisis de Jazz

### Extensiones y Alteraciones

El sistema reconoce acordes de jazz con extensiones:

```javascript
// Tipos de acordes jazz reconocidos
const jazzChordTypes = {
  "dominant9": "C9",
  "dominant11": "C11", 
  "dominant13": "C13",
  "dominantAlt": "C7alt",
  "major9": "Cmaj9",
  "major13": "Cmaj13",
  "minor9": "Cm9",
  "minor11": "Cm11",
  "minorMajor7": "CmM7"
};
```

### Sustituciones Armónicas

#### Sustitución Tritonal

Reemplaza un acorde dominante por otro a distancia de tritono:

```
Original: C7 (V de F)
Sustitución: Gb7 (V de B)
```

#### Sustitución de Tónica

Usa la relación tonal entre tonalidades a distancia de tritono:

```
Original: Cmaj7
Sustitución: F#maj7
```

## Análisis Funcional Detallado

### Funciones Armónicas Extendidas

Además de T (Tónica), S (Subdominante) y D (Dominante), el sistema reconoce:

- PD (Predominante): Funciones que preparan la dominante
- SD (Secundaria Dominante): Dominantes secundarias (V/V, V/ii, etc.)
- ST (Secundaria Tónica): Relativas y paralelas (vi, III, etc.)
- SB (Secundaria Subdominante): Subdominantes secundarias (ii, IV, etc.)

### Progresiones Comunes

#### Clásicas
- ii-V-I (dórico a dominante a tónica)
- vi-ii-V-I (entrada fría a la cadencia)
- IV-V-I (cadencia plagal)
- iii-vi-ii-V-I (progresión de "Rhythm Changes")

#### Jazz
- ii-V-I mayor o menor
- iiø-V7-Im7 (progresión menor)
- I-vi-ii-V (ciclo de sextas)
- Backdoor: I-bVII-IV-I

#### Pop/Contemporánea
- I-V-vi-IV (ciclo popular)
- vi-IV-I-V (variante del ciclo)
- iii-vi-IV-V (progresión de "Andalusian")

## Uso del Sistema de Análisis Avanzado

### Ejemplo Completo

```javascript
const { AdvancedAnalyzer } = require('../src/analysis/AdvancedAnalyzer');

// Configurar analizador con opciones avanzadas
const advancedAnalyzer = new AdvancedAnalyzer({
  modulationDetection: { enabled: true, sensitivity: 0.8 },
  chromaticAnalysis: { enabled: true },
  modalAnalysis: { enabled: true, modes: ['dorian', 'mixolydian'] },
  jazzHarmony: { enabled: true, substitutions: { tritone: true } }
});

// Contenido MusicXML con progresión compleja
const complexMusicXml = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Ejemplo con modulación y acordes extendidos -->
<score-partwise version="4.0">
  ...
</score-partwise>`;

// Ejecutar análisis avanzado
const advancedResult = await advancedAnalyzer.analyze(complexMusicXml, {
  includeModulations: true,
  includeChromaticAnalysis: true,
  includeModalAnalysis: true,
  includeJazzElements: true
});

console.log('Análisis avanzado completado:');
console.log(JSON.stringify(advancedResult, null, 2));
```

## Interpretación de Resultados Avanzados

### Información Adicional en la Salida

Los resultados de análisis avanzado incluyen:

- `modulations`: Array de modulaciones detectadas
- `chromaticNotes`: Notas cromáticas identificadas y clasificadas
- `modalInterpretations`: Interpretaciones modales alternativas
- `jazzElements`: Elementos de armonía jazz detectados
- `extendedChords`: Acordes con extensiones y alteraciones
- `substitutions`: Sustituciones armónicas detectadas
- `voiceLeading`: Análisis de conducción de voces

## Casos de Prueba Avanzados

### Modulación Cromática
Música que modula usando progresiones cromáticas.

### Polimodalidad
Música que combina modos diferentes simultáneamente.

### Atonalidad Parcial
Pasajes que se alejan temporalmente de la tonalidad principal.

## Consideraciones Finales

El análisis avanzado proporciona una comprensión más profunda de la estructura armónica de una pieza musical, pero requiere más recursos computacionales y puede ser más propenso a errores en música compleja o atonal. Ajustar los niveles de sensibilidad y confianza según el tipo de música a analizar.