# Prompt: Análisis Armónico de Piano (MiniMax M2.1)

## Contexto del Proyecto

Sistema de análisis armónico para archivos MusicXML de ejercicios de piano (4 compases). Input: archivo MusicXML → Output: informe estructurado con análisis armónico completo.

**Elementos a analizar:**

- Tonalidad y modalidad (mayor/menor)
- Acordes (fundamental, cualidad, inversión)
- Progresiones armónicas
- Cadencias (auténtica, plagal, semicadencia, rota)
- Modulaciones (momentos de cambio tonal)

---

## Instrucciones para MiniMax M2.1

Responde de forma estructurada y concisa. Sigue estos pasos:

1. Identifica las notas presentes en cada compás
2. Determina la tonalidad principal por acumulación de accidentales
3. Identifica el acorde de cada compás (fundamental + cualidad)
4. Detecta cadencias por la secuencia V-I o IV-I
5. Identifica modulaciones por cambio de centro tonal

---

## Template de Análisis

### 1. Detección de Tonalidad

```
Entrada: Lista de notas con octavas
Proceso:
  1. Contar accidentales por compás
  2. Identificar sensible (7ª mayor) resolviendo a tónica
  3. Evaluar prevalencia de notas diatónicas

Salida JSON:
{
  "key": "C major | A minor",
  "confidence": 0.0-1.0,
  "accidentals": ["F#"],
  "evidence": []
}
```

### 2. Identificación de Acordes

```
Entrada: Notas simultáneas de un compás
Proceso:
  1. Ordenar notas por altura
  2. Identificar tercera (mayor/menor)
  3. Identificar quinta (justa/disminuida/aumentada)
  4. Determinar inversión si aplica

Salida JSON por compás:
{
  "measure": 1,
  "chord": {
    "root": "C",
    "quality": "major | minor | diminished | augmented",
    "seventh": "none | major7 | minor7 | dominant7",
    "inversion": 0,
    "symbol": "C | Cm | Cdim | Caug | C7 | Cm7 | Cmaj7"
  },
  "notes": ["C4", "E4", "G4"]
}
```

### 3. Análisis de Cadencias

```
Entrada: Secuencia de acordes (cifras)
Proceso:
  1. Buscar patrón V-I (cadencia auténtica)
  2. Buscar patrón IV-I (cadencia plagal)
  3. Buscar patrón cualquier_acorde-V (semicadencia)
  4. Buscar patrón V-cualquier_acorde_no_I (cadencia rota)

Salida JSON:
{
  "cadences": [
    {
      "type": "authentic | plagal | half | deceptive",
      "measures": "2-3",
      "progression": "V-I",
      "analysis": "D7 -> G"
    }
  ]
}
```

### 4. Detección de Modulaciones

```
Entrada: Análisis por compás con tonalidades
Proceso:
  1. Comparar tonalidad de compases adyacentes
  2. Detectar cambio cuando tonalidad ≠ tonalidad principal
  3. Identificar acorde pivote o preparación

Salida JSON:
{
  "modulations": [
    {
      "measure": 3,
      "from": "C major",
      "to": "G major",
      "type": "direct | pivot",
      "pivot_chord": "D7 (V de G)"
    }
  ]
}
```

---

## Ejemplos de Entrada/Salida

### Ejemplo 1: Análisis Completo

**Entrada:**

```
Archivo: exercise_001.xml
Compás 1: C4-E4-G4 (time: 4/4, key: C major)
Compás 2: C4-E4-G4-B4
Compás 3: D4-F4-A4-C5
Compás 4: G4-B4-D5
```

**Salida estructurada:**

```markdown
## Análisis Armónico

### Tonalidad

- **Principal:** C major
- **Confianza:** 0.92
- **Evidencia:** Sin accidentales, C-E-G como acorde tónico estable

### Acordes por Compás

| Compás | Acorde | Cualidad | Inversión |
| ------ | ------ | -------- | --------- |
| 1      | C      | major    | 0         |
| 2      | Cmaj7  | major7   | 0         |
| 3      | Dm     | minor    | 0         |
| 4      | G      | major    | 0         |

### Cadencias

- **Semicadencia (compás 3):** Dm -> G (IV de C, luego V de C)

### Modulaciones

Ninguna detectada.
```

### Ejemplo 2: Acordes con Inversión

**Entrada:**

```
Compás: E4-G4-C5 (notas del acorde)
```

**Salida:**

```json
{
    "measure": 1,
    "chord": {
        "root": "C",
        "quality": "major",
        "seventh": "none",
        "inversion": 1,
        "symbol": "C/E"
    },
    "analysis": "C major en primera inversión (fundamental en bajo: E)",
    "notes": ["E4", "G4", "C5"]
}
```

### Ejemplo 3: Detección de Cadencia Rota

**Entrada:**

```
Compás 3: A4-C#5-E5 (A major)
Compás 4: B4-D5-F#5 (B minor - inesperado)
```

**Salida:**

```json
{
    "cadences": [
        {
            "type": "deceptive",
            "measures": "3-4",
            "progression": "V-vi",
            "analysis": "A -> Bm (cadencia rota, erwarteter I statt vi)",
            "confidence": 0.75
        }
    ]
}
```

---

## Formato de Respuesta Esperado

### Opción A: Markdown (recomendado)

```markdown
## Análisis Armónico

### Tonalidad

- Principal: [tono]
- Modalidad: [mayor/menor]
- Confianza: [0-1]

### Acordes

| Compás | Root | Cualidad | Inv | Cifra |
| ------ | ---- | -------- | --- | ----- |
| 1      | C    | major    | 0   | C     |

### Cadencias

- [tipo]: compás [n] → [progresión]

### Modulaciones

- Compás [n]: [tono1] → [tono2] ([tipo])
```

### Opción B: JSON (para integración)

```json
{
    "analysis": {
        "key": { "tonic": "C", "mode": "major", "confidence": 0.92 },
        "chords": [
            { "measure": 1, "root": "C", "quality": "major", "inversion": 0 }
        ],
        "cadences": [],
        "modulations": []
    }
}
```

---

## Restricciones y Advertencias

### ⚠️ Limitaciones de MiniMax M2.1

1. **Archivos grandes:** Dividir en chunks de máximo 4 compases
2. **Enarmonías ambiguas:** Proporcionar contexto del compás anterior/siguiente
3. **Modulaciones complejas:** Si detectas cambio tonal, especifica el compás exacto
4. **Acordes incompletos:** Indicar "incomplete" si faltan notas esenciales

### ✓ Directrices

- Usar notación anglosajona (C, D, E, F, G, A, B)
- Usar '#' para sostenidos y 'b' para bemoles
- Indicar confianza (0-1) cuando haya ambigüedad
- Si no puedes determinar algo, responder "indeterminado" + razón

### ❌ Evitar

- No inventar notas que no estén en el MusicXML
- No asumir tonalidad sin evidencia suficiente
- No omitir compases sin acordes
- No mezclar sistemas de notación

---

## Flujo de Trabajo Recomendado

```
1. Extraer notas del MusicXML (parser existente)
2. Para cada compás:
   a. Identificar notas únicas
   b. Determinar acorde (si coincide con tríada)
   c. Asignar función armónica (I, ii, IV, V, etc.)
3. Analizar secuencia completa:
   a. Tonalidad principal
   b. Cadencias
   c. Modulaciones
4. Generar respuesta estructurada
```

---

## Changelog

- 2024-01: Versión inicial para MiniMax M2.1
