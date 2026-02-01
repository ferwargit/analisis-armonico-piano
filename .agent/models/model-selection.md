# Guía de Selección de Modelos

## Matriz de Decisión General

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          ¿QUÉ MODELO USAR?                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │  MINIMAX    │  │   CLAUDE    │  │   GEMINI    │  │   COPILOT   │        │
│  │  ─────────  │  │  ─────────  │  │  ─────────  │  │  ─────────  │        │
│  │             │  │             │  │             │  │             │        │
│  │ Principal   │  │ Diseño      │  │ Archivos    │  │ Autocompl.  │        │
│  │ Tareas día  │  │ Arquitectura│  │ grandes     │  │ Boilerplate │        │
│  │ Código rápido│ │ Tests compl.│  │ Generación  │  │ Patrones    │        │
│  │ Análisis Básico│ │ Refactoring │  │ masiva      │  │ Tests simil.│        │
│  │ Iteraciones │  │ Docs técnica│  │ Prototipado │  │ Inline code │        │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘        │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Por Tipo de Tarea

### Fase 1: Setup & Estructura

| Tarea                     | Modelo  | Razón                 |
| ------------------------- | ------- | --------------------- |
| Diseñar arquitectura      | Claude  | Razonamiento profundo |
| Crear estructura carpetas | Claude  | Coherencia            |
| Configurar proyecto       | MiniMax | Rápido y funcional    |
| package.json, configs     | Copilot | Estándar              |

### Fase 2: Parsing MusicXML

| Tarea                   | Modelo  | Razón                  |
| ----------------------- | ------- | ---------------------- |
| Analizar estructura XML | MiniMax | Principal del proyecto |
| Implementar parser      | MiniMax | Código estructurado    |
| Tests del parser        | Claude  | Edge cases             |
| Funciones helper        | MiniMax | Patrones simples       |

### Fase 3: Análisis Armónico

| Tarea                | Modelo  | Razón                |
| -------------------- | ------- | -------------------- |
| Algoritmo Krumhansl  | Claude  | Matemáticas + música |
| Detección acordes    | MiniMax | Estructuras JSON     |
| Reglas armónicas     | Claude  | Conocimiento teórico |
| Generar corpus tests | Gemini  | Cantidad             |

### Fase 4: Output

| Tarea            | Modelo  | Razón                  |
| ---------------- | ------- | ---------------------- |
| Generar MusicXML | MiniMax | Estructura consistente |
| Informe Markdown | Claude  | Redacción pedagógica   |
| Templates        | MiniMax | Repetitivo             |

---

## MiniMax M2.1 - Modelo Principal

### Cuándo Usar MiniMax (Casos de Uso Específicos)

| Tarea                        | Prioridad | Razón                                  |
| ---------------------------- | --------- | -------------------------------------- |
| Desarrollo diario            | ⭐⭐⭐    | Principal modelo del usuario           |
| Parsing de archivos MusicXML | ⭐⭐⭐    | Estructura consistente, JSON coherente |
| Funciones de utilidad        | ⭐⭐⭐    | Rápido y directo                       |
| Tests unitarios funcionales  | ⭐⭐⭐    | Directo y efectivo                     |
| Código boilerplate           | ⭐⭐⭐    | Repetitivo pero necesario              |
| Análisis armónico básico     | ⭐⭐      | Limitado en complejidad                |
| Debugging simple             | ⭐⭐      | Respuestas rápidas                     |
| Documentación técnica básica | ⭐⭐      | Con revisión de Claude                 |
| Diseño de arquitectura       | ⭐        | Mejor Claude                           |
| Análisis de modulaciones     | ⭐        | Mejor Claude o Gemini                  |
| Debugging complejo           | ⭐        | Falta profundidad                      |

### Ventajas sobre Otros Modelos para este Proyecto

1. **Velocidad y Eficiencia**
    - Respuestas rápidas para iteraciones rápidas
    - Bajo consumo de recursos
    - Ideal para el flujo de trabajo diario

2. **Estructura Consistente**
    - Genera JSON bien estructurado para análisis musical
    - Buena adherencia a CommonJS
    - Integración natural con Node.js

3. **Costo**
    - Versión gratuita disponible
    - Sin límites restrictivos para desarrollo diario

4. **Especialización Musical**
    - Comprensión de teoría armónica básica
    - Terminología técnica precisa
    - Soporta entrada de archivos MusicXML

---

## Estrategia de Integración con Claude y Gemini

### Flujo de Trabajo Complementario

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    INTEGRACIÓN ENTRE MODELOS                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  MINIMAX (Principal)                                                         │
│  ├── Desarrollo diario                                                       │
│  ├── Implementación de funciones                                             │
│  ├── Tests unitarios                                                         │
│  ├── Parsing y análisis básico                                               │
│  └── Documentación técnica                                                   │
│                                      │                                       │
│                                      ▼                                       │
│  CLAUDE (Diseño y Revisión)                                                  │
│  ├── Arquitectura de módulos complejos                                       │
│  ├── Revisión de código generado                                             │
│  ├── Debugging difícil                                                       │
│  ├── Algoritmos matemáticos (Krumhansl)                                     │
│  └── Documentación pedagógica                                                │
│                                      │                                       │
│                                      ▼                                       │
│  GEMINI (Tareas Específicas)                                                 │
│  ├── Generación masiva de tests                                              │
│  ├── Archivos muy grandes                                                    │
│  ├── Prototipado rápido                                                      │
│  └── Documentación final                                                     │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Estrategia de Transferencia

```
1. Claude: Diseña arquitectura del módulo complejo
2. MiniMax: Implementa funciones individuales siguiendo el diseño
3. Claude: Revisa y refina el código
4. MiniMax: Genera tests unitarios y documentación
5. Gemini: Genera casos de prueba masivos
6. Claude: Revisión final y optimización
```

---

## Flujo de Trabajo Recomendado con MiniMax

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      FLUJO POR SESIÓN (Con MiniMax)                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  1. INICIO DE SESIÓN                                                        │
│     └── Revisar tareas del día                                              │
│     └── Clasificar: MiniMax (diario), Claude (diseño), Gemini (masivo)     │
│                                                                              │
│  2. DESARROLLO DIARIO (Mañana - Mente fresca)                              │
│     └── Usar MiniMax como modelo principal para:                           │
│         ├── Implementación de funciones                                     │
│         ├── Parsing de archivos                                             │
│         ├── Tests unitarios                                                 │
│         └── Código de utilidad                                              │
│                                                                              │
│  3. DISEÑO Y ARQUITECTURA (Mediodía)                                        │
│     └── Usar Claude para:                                                   │
│         ├── Nuevos módulos complejos                                        │
│         ├── Algoritmos matemáticos                                          │
│         └── Decisiones arquitectónicas                                      │
│                                                                              │
│  4. REVISIÓN (Tarde)                                                        │
│     └── Claude: revisar trabajo del día                                     │
│     └── MiniMax: iteraciones rápidas según feedback                         │
│                                                                              │
│  5. TESTS MASIVOS (Final del día)                                           │
│     └── Gemini: generar casos de prueba grandes                             │
│                                                                              │
│  6. CIERRE                                                                  │
│     └── Documentar decisiones                                               │
│     └── Claude: revisión final                                              │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Matriz de Decisión Actualizada (4 Modelos)

| Criterio                | MiniMax    | Claude     | Gemini     | Copilot    |
| ----------------------- | ---------- | ---------- | ---------- | ---------- |
| **Velocidad**           | ⭐⭐⭐⭐⭐ | ⭐⭐⭐     | ⭐⭐⭐⭐   | ⭐⭐⭐⭐⭐ |
| **Razonamiento**        | ⭐⭐       | ⭐⭐⭐⭐⭐ | ⭐⭐⭐     | ⭐⭐⭐     |
| **Código estructurado** | ⭐⭐⭐⭐   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐     | ⭐⭐⭐⭐   |
| **Análisis musical**    | ⭐⭐⭐     | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐   | ⭐⭐       |
| **Contextos largos**    | ⭐⭐       | ⭐⭐⭐⭐   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐     |
| **Tests masivos**       | ⭐⭐       | ⭐⭐       | ⭐⭐⭐⭐⭐ | ⭐⭐⭐     |
| **Coste**               | ⭐⭐⭐⭐⭐ | ⭐⭐       | ⭐⭐⭐⭐   | ⭐⭐⭐     |
| **Documentación**       | ⭐⭐⭐     | ⭐⭐⭐⭐⭐ | ⭐⭐⭐     | ⭐⭐⭐     |

### Leyenda

- ⭐⭐⭐⭐⭐ = Excelente
- ⭐⭐⭐⭐ = Muy bueno
- ⭐⭐⭐ = Bueno
- ⭐⭐ = Limitado
- ⭐ = No recomendado

---

## Criterios de Decisión para Elegir entre los 4 Modelos

### Usa **MiniMax** cuando:

- Necesitas desarrollo rápido y iteraciones frecuentes
- Trabajas con estructuras JSON para análisis musical
- Implementas funciones individuales de utilidad
- Generas tests unitarios funcionales
- Documentación técnica básica
- **→ Es tu modelo principal para desarrollo diario**

### Usa **Claude** cuando:

- Necesitas diseño de arquitectura
- El razonamiento lógico es crítico
- Análisis musical profundo (modulaciones, armonía extendida)
- Debugging complejo
- Documentación pedagógica
- Revisión de código generado por otros modelos
- **→ Para diseño, revisión y complejidad alta**

### Usa **Gemini** cuando:

- Tienes archivos muy grandes (MusicXML extensos)
- Necesitas generación masiva de tests
- Prototipado rápido
- Contexto muy largo
- **→ Para volumen y tamaño**

### Usa **Copilot** cuando:

- Autocompletado en tiempo real
- Código boilerplate simple
- Patrones repetitivos
- Sugerencias inline
- **→ Como asistente de codificación, no como modelo principal**

---

## Comandos Rápidos por Contexto

### En Terminal (si tienes CLI configurado)

```bash
# MiniMax - Desarrollo diario
minimax "Implementa una función para detectar compás"

# Claude - Diseño y arquitectura
claude "¿Cómo estructuro el módulo de cadencias?"

# Gemini - Generación masiva
gemini "Genera 50 casos de test para acordes"

# Copilot - Autocompletado
# Ctrl+Space en VSCode
```

### En VSCode

```
# Copilot Chat
Ctrl+Shift+I → Chat lateral
Ctrl+I → Chat inline

# Si usas Continue.dev
Ctrl+L → Chat con modelo seleccionado

# Cambiar modelo rápidamente
/settings → Seleccionar modelo activo
```

---

## Costos y Límites

| Modelo     | Costo Aprox.       | Límite Gratuito         | Recomendación           |
| ---------- | ------------------ | ----------------------- | ----------------------- |
| MiniMax    | Gratis             | Libre                   | ⭐⭐⭐⭐⭐ Principal    |
| Claude API | $3/1M tokens input | Limitado                | ⭐⭐⭐ Diseño/Revisión  |
| Gemini API | $1.25/1M tokens    | Tier gratuito generoso  | ⭐⭐⭐⭐ Tareas masivas |
| Copilot    | $10-19/mes         | Gratis para estudiantes | ⭐⭐⭐⭐ Autocompletado |

---

## Anti-Patrones a Evitar

```
❌ NO HACER:
├── Usar Copilot para arquitectura compleja
├── Usar Claude para código repetitivo (desperdicio)
├── Usar Gemini Flash para razonamiento profundo
├── Cambiar de modelo a mitad de una tarea compleja
├── No validar output de ningún modelo
├── Usar MiniMax para análisis de modulaciones complejas
└── Depender solo de un modelo para todo el proyecto

✅ HACER:
├── Elegir modelo según la tarea ANTES de empezar
├── Usar MiniMax como modelo principal (desarrollo diario)
├── Usar Claude para diseño y revisión
├── Usar Gemini para volumen y tamaño
├── Usar Copilot para autocompletado
├── Dar contexto suficiente al modelo
├── Validar siempre el código generado
├── Iterar con el mismo modelo si es necesario
└── Documentar qué funcionó y qué no
```

---

## Resumen de Estrategias por Fase

| Fase               | Modelo Principal | Modelo Soporte | Razón                         |
| ------------------ | ---------------- | -------------- | ----------------------------- |
| Setup & Estructura | MiniMax          | Claude         | Rápido + Diseño               |
| Parsing MusicXML   | MiniMax          | Gemini         | Principal + Contextos largos  |
| Análisis Armónico  | MiniMax          | Claude         | Diario + Complejidad          |
| Generación Output  | MiniMax          | Claude         | Estructura + Pedagogía        |
| Tests Unitarios    | MiniMax          | Gemini         | Rápido + Masivo               |
| Documentación      | MiniMax          | Claude         | Diario + Pedagógica           |
| Debugging Complejo | Claude           | MiniMax        | Profundidad + Iteraciones     |
| Revisión de Código | Claude           | Gemini         | Razonamiento + Casos extremos |
