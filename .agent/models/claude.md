# Claude - Configuración para Análisis Armónico Piano

## Modelo Recomendado

- **Claude 3.5 Sonnet** (claude-3-5-sonnet-20241022)
- Excelente para: razonamiento complejo, código, análisis musical

---

## Fortalezas para este Proyecto

### 1. Análisis de Código

- Refactoring de módulos complejos
- Detección de bugs y edge cases
- Optimización de algoritmos

### 2. Teoría Musical

- Explicaciones pedagógicas detalladas
- Validación de reglas armónicas
- Generación de contenido educativo

### 3. Arquitectura

- Diseño de sistemas modulares
- Patrones de diseño apropiados
- Revisión de estructura de proyecto

---

## Prompts Optimizados

### Para Análisis de Código

```
Analiza el siguiente módulo de [nombre]:

Identifica posibles mejoras de rendimiento
Sugiere mejor manejo de errores
Verifica coherencia con la arquitectura del proyecto
Contexto: Proyecto de análisis armónico musical en Node.js
```

### Para Teoría Musical

```
Actúa como un profesor de armonía con experiencia en:

Armonía clásica (tratados de Piston, Kostka)
Armonía jazz (Berklee, Mark Levine)
Explica/valida: [concepto o regla]
```

### Para Generación de Tests

```
Genera tests Jest para el módulo [nombre].
Incluye:

Casos básicos (happy path)
Edge cases musicales (acordes ambiguos, enarmonías)
Casos de error

Sigue el patrón AAA (Arrange, Act, Assert)
```

---

## Configuración en VSCode (Continue/Cursor)

```json
{
  "model": "claude-3-5-sonnet-20241022",
  "temperature": 0.3,
  "maxTokens": 4096,
  "systemPrompt": "Eres un experto en desarrollo Node.js y teoría musical. El proyecto es un analizador armónico para archivos MusicXML. Prioriza código limpio, testeable y bien documentado."
}
```

---

## Tareas Ideales para Claude

| Tarea                  | Prioridad | Razón                    |
|------------------------|-----------|--------------------------|
| Diseño de arquitectura | ⭐⭐⭐     | Razonamiento estructural |
| Escribir tests complejos | ⭐⭐⭐   | Manejo de edge cases     |
| Documentación técnica  | ⭐⭐⭐     | Claridad y detalle       |
| Refactoring            | ⭐⭐⭐     | Análisis profundo        |
| Debugging              | ⭐⭐       | Bueno pero verbose       |
| Código boilerplate     | ⭐         | Mejor usar snippets      |

---

## Limitaciones a Considerar

- Contexto limitado: Dividir archivos grandes
- No ejecuta código: Validar manualmente
- Puede ser verbose: Pedir respuestas concisas cuando sea necesario

---

## Integración con Workflow

```
┌─────────────────────────────────────────────────────────┐
│                    WORKFLOW CLAUDE                       │
├─────────────────────────────────────────────────────────┤
│  1. Diseño inicial → Claude                             │
│  2. Implementación → Claude + validación manual         │
│  3. Tests → Claude genera, humano valida                │
│  4. Documentación → Claude con revisión humana          │
│  5. Refactoring → Claude analiza, humano decide         │
└─────────────────────────────────────────────────────────┘
```
