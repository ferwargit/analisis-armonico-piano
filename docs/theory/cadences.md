# Detección de Cadencias

## Introducción

Las cadencias son pausas musicales que proporcionan sensación de resolución o suspensión. La detección de cadencias es crucial para el análisis armónico profundo.

## Tipos de Cadencias

### Cadencias Clásicas

#### 1. Auténtica Perfecta
- **Patrón**: Dominante (V) a Tónica (I) en posición fundamental
- **Características**: 
  - V-I (o V7-I)
  - Ambas en posición fundamental
  - La sensible sube a la tónica
  - La tónica en la voz superior en el acorde final

#### 2. Auténtica Imperfecta
- **Patrón**: Dominante a Tónica
- **Formas comunes**:
  - V-I (dominante en inversión)
  - V7-I (acorde tónico en inversión)
  - V-I (voz superior no es la tónica)

#### 3. Plagal
- **Patrón**: Subdominante (IV) a Tónica (I)
- **También conocida como**: "Amen cadence"
- **Uso común**: Final de himnos religiosos

#### 4. Semicadencia
- **Patrón**: Cualquier acorde a Dominante (V)
- **Función**: Suspensión, prepara una resolución

#### 5. Rota
- **Patrón**: Dominante (V) a Relativo menor (vi)
- **Efecto**: Sorpresa armónica

#### 6. Frigia
- **Patrón**: Neapolitano (bII) a Dominante (V)
- **Características**: 
  - Segunda grado menor en primera inversión
  - Movimiento característico descendente de la sensible

### Cadencias Jazz/Pop

#### 1. ii-V-I
- **Patrón**: ii-V-I en cualquier inversión
- **Fundamental en**: Jazz estándar
- **Variaciones**: 
  - iiø-V7-Imaj7 (menor armónico)
  - ii-V7-Imaj7 (mayor)

#### 2. Cadencia de Puerto Trasero (Backdoor)
- **Patrón**: bVII-IV-I
- **Uso común**: Jazz y música contemporánea

#### 3. Sustituto Tritonal
- **Patrón**: bII-V-I (en lugar de V-I)
- **Base**: Dominante a distancia de tritono

## Algoritmos de Detección

### 1. Análisis de Progresión Armónica

El sistema identifica patrones de acordes característicos de cadencias:

```
// Ejemplo de detección de cadencia auténtica perfecta
const perfectAuthenticCadence = {
  pattern: ['V', 'I'],
  bassRequirements: ['ti', 'do'], // Sensible a tónica
  sopranoRequirements: ['sol', 'do'], // Quinta a tónica
  voicing: ['root_position', 'root_position']
};
```

### 2. Análisis de Contexto

Considera el contexto armónico previo y posterior para determinar si una progresión es funcionalmente cadencial.

### 3. Análisis de Compás

Las cadencias típicamente ocurren en posiciones métricas fuertes, especialmente al final de frases.

## Configuración

```json
{
  "analysis": {
    "cadences": {
      "detection": {
        "classical": true,
        "jazz": true,
        "modal": false,
        "searchPositions": ["end", "phrase_end", "strong_beat"]
      },
      "classification": {
        "threshold": 0.7,
        "confidenceWeighting": {
          "patternMatch": 0.4,
          "context": 0.3,
          "metricalPosition": 0.2,
          "voiceLeading": 0.1
        }
      }
    }
  }
}
```

## Implementación Técnica

### Clasificación de Cadencias

```javascript
class CadenceClassifier {
  classify(chordProgression, keyContext, metricPosition) {
    const candidates = this.findCadenceCandidates(chordProgression);
    
    return candidates.map(candidate => {
      return {
        type: this.identifyCadenceType(candidate.pattern, keyContext),
        strength: this.calculateCadenceStrength(candidate, keyContext, metricPosition),
        confidence: this.calculateConfidence(candidate)
      };
    });
  }
}
```

## Casos Especiales

### Modulaciones
Las cadencias pueden servir como puntos de modulación. El sistema identifica cadencias que resuelven en tonalidades diferentes a la original.

### Cadencias Interrumpidas
Progresiones que se esperaría que fueran cadencias pero que se desvían, como V-vi (decepción).

### Cadencias en Modos
Diferentes modos tienen patrones cadenciales distintos (por ejemplo, Phrygian half-cadence: iv6-V).

## Precisión y Limitaciones

- **Precisión típica**: 80-90% en música funcional tonal
- **Casos problemáticos**:
  - Música modal sin función armónica clara
  - Progresiones cromáticas
  - Música atonal
  - Agrupaciones rítmicas complejas