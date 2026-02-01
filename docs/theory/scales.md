# Detección y Sugerencia de Escalas

## Introducción

El módulo de detección de escalas identifica y sugiere escalas musicales apropiadas para un contexto armónico dado. Esto es fundamental para el análisis melódico y la improvisación.

## Tipos de Escalas Soportadas

### 1. Escalas Diatónicas

#### Mayor Natural (Jónico)
- **Patrón**: T-T-S-T-T-T-S (T=Tono, S=Semitono)
- **Grados**: I-II-III-IV-V-VI-VII

#### Menor Natural (Eolio)
- **Patrón**: T-S-T-T-S-T-T
- **Grados**: i-ii°-III-iv-v-VI-VII

#### Menor Armónica
- **Patrón**: T-S-T-T-S-T½-S
- **Característica**: Sexta y séptima elevadas

#### Menor Melódica
- **Ascendente**: T-S-T-T-T-T-S
- **Descendente**: T-T-S-T-T-S-T

### 2. Modos de la Escala Mayor

| Modo | Patrón | Grados | Función |
|------|--------|--------|---------|
| Jónico | T-T-S-T-T-T-S | I | Tónica Mayor |
| Dórico | T-S-T-T-T-S-T | ii | Tónica Menor |
| Frigio | S-T-T-T-S-T-T | iii | Tónica Menor |
| Lidio | T-T-T-S-T-T-S | IV | Tónica Mayor |
| Mixolidio | T-T-S-T-T-S-T | V | Tónica Mayor |
| Eolio | T-S-T-T-S-T-T | vi | Tónica Menor |
| Locrio | S-T-T-S-T-T-T | vii° | Disminuido |

### 3. Escalas Simétricas

#### Disminuida (Octatónica)
- **Patrón**: S-T-S-T-S-T-S-T o T-S-T-S-T-S-T-S
- **Uso**: Jazz y música del siglo XX

#### Tonos Completos (Hexacordo Mayor)
- **Patrón**: T-T-T-T-T-T
- **Características**: Ausencia de semitonos

#### Pentatónicas
- **Mayor**: C-D-E-G-A (omitir IV y VII grado)
- **Menor**: C-Eb-F-G-Bb (omitir II y VI grado)

### 4. Escalas Jazz

#### Bebop
- **Dominante Bebop**: Escala mixolidia con añadido de séptima mayor
- **Mayor Bebop**: Escala mayor con añadido de séptima menor

#### Blues
- **Hexacordo**: 1-♭3-4-5-♭7
- **Heptacordo**: Añade la quinta aumentada (#5)

## Algoritmos de Detección

### 1. Análisis de Acordes

Para cada acorde, el sistema sugiere escalas apropiadas:

```
Cmaj7 → [C Mayor, C Lidio, C Mixolidio (si dominante)]
Dm7 → [D Dórico, D Menor Natural, D Menor Armónica]
G7 → [G Mixolidio, G Mixolidio b9, G Mixolidio b13]
```

### 2. Análisis de Progresión

Considera la progresión armónica para sugerir escalas modales:

```
C - Am - F - G → Escala de C Mayor (I-vi-IV-V)
Dm - G - C - Am → Escala de C Mayor (ii-V-I-vi)
```

### 3. Análisis de Melodía

Examina las notas melódicas para confirmar o sugerir escalas apropiadas.

## Sistemas de Notación

### Americano
- C Major Scale
- C Minor Natural Scale
- C Dorian Mode

### Romano
- I-Ionian
- ii-Dorian
- iii-Phrygian
- IV-Lydian
- V-Mixolydian
- vi-Aeolian
- vii-Locrian

### Funcional
- T (Tónica)
- S (Subdominante)
- D (Dominante)

## Configuración

```json
{
  "analysis": {
    "scales": {
      "detection": {
        "enabled": true,
        "algorithm": "chord-contextual",
        "algorithms": {
          "chordContextual": {
            "enabled": true,
            "weight": 0.5
          },
          "progressionAnalysis": {
            "enabled": true,
            "weight": 0.3
          },
          "melodicAnalysis": {
            "enabled": true,
            "weight": 0.2
          }
        }
      },
      "suggestion": {
        "maxSuggestions": 3,
        "rankingMethod": "probability",
        "includeMode": true,
        "includeChromatic": false
      },
      "types": {
        "diatonic": true,
        "modal": true,
        "symmetric": false,
        "jazz": false,
        "pentatonic": true
      }
    }
  }
}
```

## Implementación Técnica

### Clasificación de Escalas

```javascript
class ScaleDetector {
  suggestForChord(chord, context) {
    const suggestions = [];
    
    // Escalas diatónicas
    suggestions.push(...this.diatonicScalesForChord(chord, context.key));
    
    // Escalas modales
    suggestions.push(...this.modalScalesForChord(chord, context.progression));
    
    // Escalas jazz (si habilitadas)
    if (context.settings.jazzScales) {
      suggestions.push(...this.jazzScalesForChord(chord));
    }
    
    // Ranking por probabilidad
    return this.rankByProbability(suggestions, context);
  }
}
```

## Casos Especiales

### Modulaciones
Durante una modulación, el sistema puede sugerir escalas de la tonalidad destino.

### Préstamos Modales
Cuando se usan acordes de préstamo modal, el sistema sugiere escalas correspondientes.

### Escalas Cromáticas
Para pasajes cromáticos, se identifican como tales en lugar de forzar una escala diatónica.

## Precisión y Limitaciones

- **Precisión típica**: 85-95% en música tonal funcional
- **Casos problemáticos**:
  - Música atonal o serial
  - Escalas exóticas no implementadas
  - Contextos armónicos ambiguos
  - Música microtonal