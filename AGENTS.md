# AGENTS.md

## Descripción del Proyecto

Sistema automatizado para análisis armónico de ejercicios de piano de 4 compases. Analiza archivos MusicXML para detectar tonalidad, acordes, progresiones armónicas, cadencias y modulaciones.

**Stack técnico:** Node.js 18+, JavaScript, Jest para testing

## Comandos de Configuración

```bash
# Instalar dependencias
npm install

# Verificar instalación
npm test

# Ejecutar análisis de ejemplo
npm run analyze -- --input examples/sample.musicxml
```

## Comandos de Desarrollo

```bash
# Iniciar análisis
npm start

# Analizar un archivo específico
npm run analyze -- --input <ruta-archivo.musicxml>

# Ejecutar tests
npm test

# Tests en modo observación
npm run test:watch

# Tests con cobertura
npm run test:coverage

# Verificar calidad del código
npm run lint

# Corregir problemas automáticamente
npm run lint:fix

# Formatear código
npm run format
```

## Estructura del Proyecto

```
src/
├── core/              # Modelos de datos y utilidades base
│   ├── models/        # Note, Chord, Key, etc.
│   └── utils/         # Funciones auxiliares musicales
├── parsing/           # Parser de archivos MusicXML
│   ├── musicxml-parser.js
│   └── xml-validator.js
├── analysis/          # Módulos de análisis musical
│   ├── tonality/      # Detección de tonalidad (Krumhansl-Schmuckler, etc.)
│   ├── chords/        # Identificación de acordes e inversiones
│   ├── harmony/       # Análisis de progresión armónica (grados romanos)
│   ├── cadences/      # Detección de cadencias (auténtica, plagal, etc.)
│   ├── modulations/   # Identificación de modulaciones
│   └── scales/        # Sugerencia de escalas por contexto
└── output/            # Generación de reportes
    ├── musicxml-generator.js
    ├── markdown-generator.js
    └── json-generator.js

tests/                 # Tests unitarios y de integración
examples/
├── input/             # Archivos MusicXML de ejemplo
├── output/            # Salidas generadas
└── templates/         # Plantillas para crear ejemplos
    └── template.musicxml
config/                # Configuración del analizador
docs/                  # Documentación adicional
scripts/               # Scripts de utilidad
```

## Estilo de Código

### JavaScript
- **ES6+ moderno:** Usar const/let, arrow functions, destructuring
- **Comillas simples** para strings: `'texto'`
- **Sin punto y coma** al final de líneas
- **Indentación:** 2 espacios
- **Nombrado:**
  - Variables y funciones: `camelCase`
  - Clases: `PascalCase`
  - Constantes: `UPPER_SNAKE_CASE`
  - Archivos: `kebab-case.js`

### Patrones
- Preferir **programación funcional** donde sea posible
- Usar **arrow functions** para callbacks
- Evitar mutaciones directas, preferir spread operators e immutability
- Modularizar en funciones pequeñas y reutilizables
- Documentar funciones complejas con JSDoc

### Ejemplo
```javascript
// ✅ Correcto
const analyzeChord = (notes) => {
  const sortedNotes = [...notes].sort()
  return identifyChordType(sortedNotes)
}

// ❌ Incorrecto
function analyzeChord(notes) {
  notes.sort();
  return identifyChordType(notes);
}
```

## Testing

### Framework
- **Jest** como framework principal
- Archivos de test en carpeta `tests/` con sufijo `.test.js`

### Convenciones
- Usar `describe()` para agrupar tests relacionados
- Usar `test()` o `it()` para casos individuales
- Nombres descriptivos en español o inglés consistente
- Seguir patrón AAA: Arrange, Act, Assert

### Ejecutar Tests
```bash
# Todos los tests
npm test

# Tests específicos
npm test -- tonality

# Con cobertura
npm run test:coverage

# Modo watch para desarrollo
npm run test:watch
```

### Ejemplo
```javascript
describe('Análisis de Tonalidad', () => {
  test('detecta Do Mayor correctamente', () => {
    const notes = [/* ... */]
    const key = detectKey(notes)
    expect(key.tonic).toBe('C')
    expect(key.mode).toBe('major')
  })
})
```

## Archivos de Configuración

### `.eslintrc.json`
Configuración de ESLint para mantener calidad de código

### `.prettierrc`
Configuración de Prettier para formateo consistente

### `jest.config.js`
Configuración de Jest para testing

### `config/`
Carpeta con parámetros ajustables del analizador:
- Umbrales de detección
- Pesos de algoritmos
- Configuración de outputs

## Flujo de Trabajo de Análisis

1. **Parsing:** Leer archivo MusicXML y extraer datos estructurados
2. **Validación:** Verificar formato y estructura del archivo
3. **Análisis secuencial:**
   - Detectar tonalidad (múltiples algoritmos)
   - Identificar acordes por tiempo (triadas, séptimas, tensiones)
   - Analizar progresión armónica (grados romanos, funciones)
   - Detectar cadencias (auténtica, plagal, etc.)
   - Identificar modulaciones
   - Sugerir escalas por contexto
4. **Generación de outputs:** MusicXML anotado, Markdown, JSON

## Formatos de Entrada/Salida

### Entrada
- **Formato:** MusicXML (`.musicxml` o `.xml`)
- **Requisitos:** Ejercicio de piano típicamente de 4 compases
- **Ubicación:** `examples/input/`

### Salida
- **MusicXML:** Archivo original con anotaciones de análisis
- **Markdown:** Reporte legible con análisis detallado
- **JSON:** Datos estructurados para procesamiento posterior
- **Ubicación:** `examples/output/`

## Teoría Musical - Conceptos Clave

### Detección de Tonalidad
- **Algoritmo Krumhansl-Schmuckler:** Correlación de perfil de notas
- **Análisis de bajo:** Primera y última nota como referencia
- **Frecuencia de notas:** Conteo estadístico

### Acordes
- **Triadas:** Mayor, menor, aumentada, disminuida
- **Séptimas:** Maj7, min7, dom7, half-dim7, dim7
- **Inversiones:** Fundamental, primera, segunda, tercera
- **Extensiones:** 9, 11, 13

### Cadencias
- **Auténtica:** V - I
- **Plagal:** IV - I
- **Engañosa:** V - vi
- **Semicadencia:** X - V
- **Cadencia de jazz:** ii - V - I

### Grados Romanos
- I, ii, iii, IV, V, vi, vii° (mayor)
- i, ii°, III, iv, v, VI, VII (menor)

## Buenas Prácticas

### Al agregar nuevas funcionalidades
1. Crear primero el test (TDD cuando sea posible)
2. Implementar en módulos pequeños
3. Documentar con comentarios claros
4. Actualizar README.md si afecta uso general
5. Ejecutar `npm run lint` antes de commit

### Al trabajar con MusicXML
- Validar estructura antes de procesar
- Manejar errores de parsing gracefully
- Considerar variaciones de formato entre editores

### Al implementar algoritmos musicales
- Documentar base teórica (referencias)
- Incluir casos de ejemplo en comentarios
- Testear con ejemplos musicales conocidos

## Recursos Útiles

### Documentación Externa
- [MusicXML Specification](https://www.w3.org/2021/06/musicxml40/)
- [Music Theory Reference](https://www.musictheory.net/)
- [Jest Documentation](https://jestjs.io/)

### Archivos de Referencia
- `INSTALLATION_GUIDE.md` - Guía detallada de instalación
- `PLANIFICACION_MEJORA_DOCUMENTACION.md` - Roadmap del proyecto
- `docs/TASKS.md` - Tareas pendientes y en progreso

## Consideraciones Especiales

### Manejo de Errores
- Siempre validar entrada antes de procesar
- Proporcionar mensajes de error descriptivos
- Logging de errores para debugging

### Performance
- Optimizar para archivos de hasta 4 compases típicamente
- Considerar caché de resultados si se reprocesa

### Extensibilidad
- Diseñar módulos independientes y desacoplados
- Facilitar adición de nuevos algoritmos de detección
- Permitir configuración flexible vía `config/`

## Contribución

### Antes de hacer un PR
1. Ejecutar todos los tests: `npm test`
2. Verificar linting: `npm run lint`
3. Formatear código: `npm run format`
4. Actualizar documentación si es necesario
5. Describir cambios claramente en el PR

### Convenciones de Commits
- feat: Nueva funcionalidad
- fix: Corrección de bug
- docs: Cambios en documentación
- style: Formateo, sin cambios de código
- refactor: Refactorización sin cambio funcional
- test: Agregar o modificar tests
- chore: Tareas de mantenimiento

## Notas para Agentes de IA

- Este proyecto tiene un **dominio específico** de teoría musical
- Las decisiones de diseño privilegian **precisión musical** sobre velocidad
- Los **tests son críticos** para validar algoritmos musicales
- Consultar `config/` para ajustar comportamiento sin cambiar código
- Los ejemplos en `examples/` sirven como referencia de casos de uso

---

*Última actualización: 2026-02-02*
