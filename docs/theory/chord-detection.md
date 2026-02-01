# Detección de Acordes

## Introducción

El módulo de detección de acordes identifica y clasifica acordes a partir de grupos de notas. Utiliza múltiples enfoques para maximizar la precisión en diferentes contextos musicales.

## Algoritmos de Detección

### 1. Coincidencia de Patrones

El sistema compara grupos de notas con patrones predefinidos de acordes conocidos:

#### Tipos de Acordes Soportados

- **Triadas**: Mayor, menor, disminuida, aumentada
- **Séptimas**: Dominante, mayor, menor, semidisminuida, disminuida
- **Extensiones**: Novena, oncena, trecena
- **Suspensiones**: Sus2, sus4
- **Agregados**: Add9, add11

### 2. Análisis de Distancias

Calcula intervalos entre las notas para identificar la estructura del acorde:

```
Acordes de Tres Notas (Triadas):
- Mayor: Tono-Tono-Semitono-Tono-Tono-Tono-Semitono
- Menor: Tono-Semitono-Tono-Tono-Tono-Semitono-Tono
- Disminuido: Tono-Semitono-Tono-Semitono-Tono-Semitono-Tono
- Aumentado: Tono-Tono-Semitono-Tono-Tono-Semitono-Semitono
```

### 3. Análisis de Inversión

Determina la inversión del acorde basándose en la nota más grave:

- **Posición fundamental**: La fundamental está en el bajo
- **Primera inversión**: La tercera está en el bajo
- **Segunda inversión**: La quinta está en el bajo
- **Tercera inversión**: La séptima está en el bajo

## Identificación de Símbolos

El sistema convierte la estructura del acorde en notación estándar:

| Estructura | Símbolo Estándar | Función |
|------------|------------------|---------|
| C-E-G | C | Tónica |
| D-F-A | Dm | Subdominante |
| G-B-D-F | G7 | Dominante |
| C-E-G-B | Cmaj7 | Tónica con séptima mayor |

## Configuración

```json
{
  "analysis": {
    "chords": {
      "detection": {
        "algorithm": "patternMatching",
        "inversionDetection": true,
        "extensionRecognition": true,
        "suspensionDetection": true,
        "addedToneDetection": true
      },
      "notation": {
        "system": "american",
        "options": ["american", "roman", "german", "nashville"]
      },
      "granularity": {
        "level": "beat",
        "options": ["measure", "beat", "subdivision", "noteChange"]
      }
    }
  }
}
```

## Casos Especiales

### Acordes de Embellishment
El sistema puede identificar notas de ornamento como apoyaturas, bordaduras y pasos que no forman parte del acorde funcional.

### Acordes Polifónicos
En música polifónica, el sistema analiza cada voz por separado y luego identifica relaciones armónicas verticales.

### Notas Pedales
Las notas pedal se identifican y se analizan por separado para evitar confusiones con acordes.

## Precisión y Limitaciones

- **Precisión típica**: 90-95% en música tonal funcional
- **Casos problemáticos**: 
  - Acordes de paso
  - Agrupaciones rítmicas complejas
  - Notas de ornamento
  - Música atonal o experimental

## Integración con Otros Módulos

El detector de acordes se integra con:
- **Detector de tonalidad** para contexto armónico
- **Analizador de progresión** para funciones armónicas
- **Sugeridor de escalas** para contexto melódico