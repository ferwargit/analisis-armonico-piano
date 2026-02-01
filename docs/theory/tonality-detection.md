# Detección de Tonalidad

## Introducción

La detección de tonalidad es un componente crítico del sistema de análisis armónico. Este módulo implementa múltiples algoritmos para determinar la tonalidad principal de una pieza musical basándose en la distribución de alturas, progresiones armónicas y patrones melódicos.

## Algoritmos Implementados

### 1. Krumhansl-Schmuckler

Basado en el perfil psicoacústico de tonalidad desarrollado por Krumhansl y Schmuckler. Este algoritmo compara la distribución de alturas en la pieza con perfiles tonales predefinidos.

#### Perfiles Mayores
- C: [6.35, 2.23, 3.48, 2.33, 4.38, 4.09, 2.52, 5.19, 2.39, 3.66, 2.29, 2.88]
- G: [2.88, 6.35, 2.23, 3.48, 2.33, 4.38, 4.09, 2.52, 5.19, 2.39, 3.66, 2.29]
- D: [2.29, 2.88, 6.35, 2.23, 3.48, 2.33, 4.38, 4.09, 2.52, 5.19, 2.39, 3.66]

#### Perfiles Menores
- A: [6.33, 2.68, 3.52, 5.38, 2.60, 3.53, 2.54, 4.75, 3.98, 2.69, 3.34, 3.17]
- E: [3.17, 6.33, 2.68, 3.52, 5.38, 2.60, 3.53, 2.54, 4.75, 3.98, 2.69, 3.34]

### 2. Análisis de Bajo

Analiza la primera y última nota del bajo para inferir la tonalidad. Este método es particularmente efectivo para identificar la tónica en cadencias.

### 3. Análisis de Frecuencia de Notas

Calcula la frecuencia de aparición de cada altura en la pieza y compara con patrones esperados para diferentes tonalidades.

### 4. Análisis de Cadencias

Identifica patrones de cadencia final (auténtica, plagal, etc.) para confirmar la tonalidad principal.

## Motor de Consenso

El sistema implementa un motor de consenso que combina los resultados de múltiples algoritmos para determinar la tonalidad más probable:

```
Tonalidad Final = Σ(Peso_i × Resultado_i) / Σ(Peso_i)
```

Donde cada algoritmo tiene un peso configurable según su precisión en diferentes contextos musicales.

## Configuración

La detección de tonalidad se puede configurar mediante el archivo `config/analyzer.config.json`:

```json
{
  "analysis": {
    "tonality": {
      "algorithms": {
        "krumhanslSchmuckler": {
          "enabled": true,
          "weight": 0.4
        },
        "bassAnalysis": {
          "enabled": true,
          "weight": 0.2
        },
        "noteFrequency": {
          "enabled": true,
          "weight": 0.2
        },
        "cadenceAnalysis": {
          "enabled": true,
          "weight": 0.2
        }
      },
      "consensusThreshold": 0.7,
      "detectModes": true
    }
  }
}
```

## Casos Especiales

### Modulaciones
El sistema puede detectar modulaciones temporales o permanentes identificando cambios en la distribución de alturas y progresiones armónicas.

### Modos
Además de las tonalidades mayores y menores, el sistema puede detectar modos como dórico, frigio, lidio, etc.

## Precisión y Limitaciones

- **Precisión típica**: 85-95% en música tonal clásica
- **Casos problemáticos**: Música atonal, polimodal, música con muchos accidentes
- **Contextos favorables**: Música tonal funcional con progresiones claras