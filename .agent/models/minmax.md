# MiniMax M2.1 - Configuración para Análisis Armónico Piano

## Modelo Recomendado

- **MiniMax M2.1** (minimax/minimax-m2.1:free)
- Excelente para: generación de código rápido, tareas estructuradas, análisis musical básico

---

## Fortalezas para este Proyecto

### 1. Velocidad y Eficiencia

- Respuestas rápidas para iteraciones rápidas
- Bajo consumo de recursos
- Ideal para tareas repetitivas de código

### 2. Análisis Musical Estructurado

- Buena comprensión de teoría armónica básica
- Capacidad para generar estructuras JSON coherentes
- Soporta entrada de archivos MusicXML

### 3. Generación de Código

- Código funcional y directo
- Buena adherencia a CommonJS
- Integración con Node.js

---

## Debilidades o Limitaciones

### 1. Razonamiento Musical Compleso

- Dificultades con modulaciones complejas
- Limitado en análisis de armonía extendida jazz
- No maneja bien enarmonías ambiguas

### 2. Profundidad de Explicación

- Respuestas menos detalladas que otros modelos
- Explanaciones pedagógicas limitadas
- Menos ejemplos prácticos

### 3. Contexto y Memoria

- Context window limitado
- Dificultad con archivos grandes
- Pierde coherencia en sesiones largas

---

## Configuración Recomendada

```json
{
    "model": "minimax/minimax-m2.1:free",
    "temperature": 0.2,
    "maxTokens": 2048,
    "systemPrompt": "Eres un asistente especializado en análisis armónico musical y desarrollo Node.js. Genera código funcional, estructurado y bien organizado. Para análisis musical, usa terminología técnica precisa y estructuras JSON consistentes."
}
```

### Parámetros Óptimos

| Parámetro   | Valor | Razón                                         |
| ----------- | ----- | --------------------------------------------- |
| temperature | 0.2   | Respuestas más deterministas y precisas       |
| maxTokens   | 2048  | Balance entre detalle y limitación del modelo |
| top_p       | 0.8   | Evita respuestas demasiado creativas          |

---

## Casos de Uso Específicos

### Para Análisis Armónico de Piano

```
Analiza los siguientes datos de un archivo MusicXML:
- Notas: [lista de notas]
- Compás: [time signature]
- Tonalidad inicial: [key]

Identifica:
1. Tonalidad principal
2. Acordes por compás
3. Tipo de movimiento (root position, inversion)
4. Cadencias presentes

Responde en formato JSON estructurado.
```

### Para Generación de Código

```
Implementa una función en Node.js/CommonJS para [descripción].

Requisitos:
- Nombre descriptivo
- Documentación JSDoc
- Manejo de errores básico
- Sin dependencias externas

Código:
```

### Para Tests Unitarios

```
Genera un test Jest para la función [nombre].

Usa:
- Sintaxis CommonJS (require)
- Patrón AAA
- 3-5 casos de prueba máximo

Enfoque en: funcionalidad básica y casos obvios.
```

---

## Prompts Optimizados

### Para Análisis de Tonalidad

```
Determina la tonalidad de esta secuencia de notas:
[notas con octavas]

Usa el método de análisis de tonalidad por:
1. Count de accidentales
2. Sensible resolving to tonic
3. Prevalencia de determinadas notas

Devuelve: { key: "C major", confidence: 0.85, evidence: [] }
```

### Para Identificación de Acordes

```
Identifica el acorde formado por estas notas:
[notas]

Indica:
- root (en notación anglosajona)
- calidad (major, minor, dim, aug, 7, m7, etc.)
- posición (root, 1st, 2nd inversion)
- notación de cifra india

Ejemplo: "C/E" = C major in first inversion
```

### Para Detección de Cadencias

```
Analiza esta secuencia de acordes:
[secuencia de acordes en cifras]

Identifica:
1. Tipo de cadencia (auténtica, plagal, etc.)
2. Acorde dominante y tónica
3. Función armónica de cada acorde

Responde: { cadences: [], analysis: "" }
```

---

## Workflow Recomendado

```
┌─────────────────────────────────────────────────────────┐
│                  WORKFLOW MINIMAX M2.1                   │
├─────────────────────────────────────────────────────────┤
│  1. Tareas simples → MiniMax (código rápido)            │
│  2. Análisis básico → MiniMax (estructuras JSON)        │
│  3. Tests unitarios → MiniMax (funcionales)             │
│  4. Código boilerplate → MiniMax (repetitivo)           │
│  5. Revisión complejos → Claude/Gemini                   │
│  6. Documentación básica → MiniMax (con revisión)       │
└─────────────────────────────────────────────────────────┘
```

### Cuándo Usar MiniMax M2.1

| Tarea                    | Prioridad | Razón                   |
| ------------------------ | --------- | ----------------------- |
| Funciones simples        | ⭐⭐⭐    | Rápido y funcional      |
| Parsing MusicXML         | ⭐⭐⭐    | Estructura consistente  |
| Tests unitarios básicos  | ⭐⭐⭐    | 直接 y efectivo         |
| Análisis armónico simple | ⭐⭐      | Limitado en complejidad |
| Diseño arquitectura      | ⭐        | Mejor otros modelos     |
| Debugging complejo       | ⭐        | Falta profundidad       |

---

## Limitaciones Conocidas y Soluciones

### 1. Análisis de Modulaciones

**Problema**: Dificulta detectar modulaciones temporales
**Solución**: Dividir en segmentos más pequeños y analizar cada uno

### 2. Acordes Ambiguos

**Problema**: No distingue bien entre enarmonías
**Solución**: Proporcionar contexto del compás anterior y siguiente

### 3. Profundidad de Explicación

**Problema**: Respuestas muy breves
**Solución**: Pedir explícitamente "explica cada paso" o usar otro modelo

### 4. Contextos Largos

**Problema**: Pierde coherencia con archivos grandes
**Solución**: Dividir en chunks de máximo 100 compases

---

## Ejemplo de Sesión Completa

```
User: Analiza este fragmento MusicXML para detectar tonalidad

MiniMax: {
  "key": "G major",
  "confidence": 0.78,
  "accidentals": ["F#"],
  "evidence": [
    "F# aparece en 80% de compases",
    "Acorde G mayor como tónica",
    "D mayor como dominante bien definido"
  ]
}

User: Genera código para parser de compás

MiniMax: [código funcional en CommonJS]

User: Crea test para esta función

MiniMax: [test Jest básico]
```

---

## Integración con Other Models

###互补ario con Claude

```
1. Claude: Diseña arquitectura del módulo
2. MiniMax: Implementa funciones individuales
3. Claude: Revisa y refina
4. MiniMax: Genera tests y documentación
```

### Estrategia de Transferencia

- **MiniMax** → Código base y tests
- **Claude** → Revisión y optimización
- **Gemini** → Documentación final
