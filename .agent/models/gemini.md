# Gemini - Configuración para Análisis Armónico Piano

## Modelo Recomendado

- **Gemini 2.5 Pro** o **Gemini 2.0 Flash**
- Pro: Tareas complejas, análisis profundo
- Flash: Tareas rápidas, iteraciones frecuentes

---

## Fortalezas para este Proyecto

### 1. Contexto Extenso

- Puede manejar archivos MusicXML completos
- Analizar múltiples módulos simultáneamente
- Ventana de contexto muy grande (1M+ tokens)

### 2. Velocidad (Flash)

- Iteraciones rápidas de código
- Generación de variantes
- Prototipado veloz

### 3. Multimodal (Futuro)

- Potencial para analizar partituras como imagen
- Validación visual de outputs

---

## Prompts Optimizados

### Para Procesamiento de MusicXML

```
Analiza la estructura de este archivo MusicXML.
Extrae:

Estructura jerárquica de elementos
Atributos relevantes para análisis armónico
Posibles inconsistencias o datos faltantes
[contenido del archivo]
```

### Para Generación Masiva

```
Genera [N] casos de test para:

Acordes en tonalidad de [X]
Incluyendo inversiones
Formato: { input: [...notas], expected: {...} }
```

### Para Análisis de Patrones

```
Dado este conjunto de progresiones armónicas:
[lista de progresiones]

Identifica:

Patrones comunes
Anomalías
Clasificación por estilo (clásico/jazz/pop)
```

---

## Configuración en VSCode

```json
{
  "model": "gemini-2.5-pro-preview-05-06",
  "temperature": 0.2,
  "maxTokens": 8192,
  "systemPrompt": "Proyecto Node.js de análisis armónico musical. Archivos MusicXML como input. Respuestas concisas y código ejecutable."
}
```

---

## Tareas Ideales para Gemini

| Tarea                      | Prioridad | Razón                        |
|----------------------------|-----------|------------------------------|
| Procesar archivos grandes  | ⭐⭐⭐     | Contexto extenso             |
| Generar datos de test      | ⭐⭐⭐     | Velocidad + cantidad         |
| Análisis de patrones       | ⭐⭐⭐     | Buen pattern matching        |
| Prototipado rápido         | ⭐⭐⭐     | Flash es muy rápido          |
| Explicaciones pedagógicas  | ⭐⭐       | Menos detallado que Claude   |
| Arquitectura compleja      | ⭐⭐       | Preferir Claude              |

---

## Limitaciones a Considerar

- Puede ser superficial: Pedir profundidad explícitamente
- Formato variable: Especificar formato exacto deseado
- Menos consistente en edge cases: Validar outputs musicales

---

## Integración con Workflow

```
┌─────────────────────────────────────────────────────────┐
│                    WORKFLOW GEMINI                       │
├─────────────────────────────────────────────────────────┤
│  1. Análisis de MusicXML → Gemini Pro (contexto largo)  │
│  2. Generación de tests → Gemini Flash (velocidad)      │
│  3. Prototipado → Gemini Flash                          │
│  4. Validación → Claude o manual                        │
└─────────────────────────────────────────────────────────┘
```

---

## Casos de Uso Específicos

### Análisis de MusicXML Completo

```javascript
// Gemini puede analizar el archivo completo
// gracias a su contexto extenso
const prompt = `
Dado este MusicXML completo:
${xmlContent}

Extrae en formato JSON:
{
  "measures": [...],
  "notes": [...],
  "keySignature": {...},
  "timeSignature": {...}
}
`;
```

### Generación de Corpus de Tests

```javascript
// Usar Flash para generar muchos casos rápidamente
const prompt = `
Genera 50 casos de test para detectar acordes de séptima.
Formato por caso:
{
  "notes": ["C4", "E4", "G4", "B4"],
  "expected": {
    "root": "C",
    "type": "maj7",
    "inversion": 0
  }
}
`;
```
