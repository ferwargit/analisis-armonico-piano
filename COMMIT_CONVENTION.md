# Conventional Commits - Guía de Contribución

## 1. Introducción

Este proyecto utiliza **Conventional Commits**, un convención de mensajes de commit que proporciona un conjunto de reglas para crear un historial de commit explícito. Esta convención se alinea con [Semantic Versioning](https://semver.org/), ya que los mensajes de commit permiten identificar automáticamente cambios menores, mayores y breaking changes.

### Beneficios de usar Conventional Commits

- **Historial legible**: Mensajes de commit claros y estructurados que facilitan la comprensión del historial del proyecto.
- **Release automáticas**: Herramientas como `standard-version` o `release-please` pueden generar changelogs y versionar automáticamente.
- **Identificación de cambios**: Facilita la identificación del tipo de cambio (feature, fix, etc.) sin necesidad de leer el código.
- **Consistencia**: Establece un formato estándar que todos los contribuidores deben seguir.

---

## 2. Formato de Commits

Los mensajes de commit deben seguir el siguiente formato:

```
<tipo>(<ámbito>): <descripción>
```

### Componentes

| Componente      | Descripción                           | Ejemplo                         |
| --------------- | ------------------------------------- | ------------------------------- |
| **Tipo**        | Categoría del cambio                  | `feat`, `fix`, `docs`           |
| **Ámbito**      | Área del proyecto afectada (opcional) | `core`, `parsing`, `analysis`   |
| **Descripción** | Resumen del cambio en presente        | `add chord detection algorithm` |

### Ejemplo completo

```
feat(analysis): implement harmonic progression analyzer
```

---

## 3. Tipos Permitidos

### `feat` - Nueva característica

Agregar nuevas funciones o mejoras de funcionalidad.

```
feat(analysis): add harmonic function detection
feat(core): implement note frequency calculator
feat(output): add MIDI export functionality
```

### `fix` - Corrección de bug

Corregir errores o problemas en el código.

```
fix(parsing): resolve crash when parsing complex chords
fix(core): fix octave calculation error in note normalization
fix(analysis): correct harmonic series calculation
```

### `docs` - Cambios en documentación

Actualizar documentación sin incluir cambios de código.

```
docs: update API documentation for chord module
docs(readme): add installation instructions for Windows
docs: improve JSDoc comments in analyzer.js
```

### `style` - Cambios de estilo

Cambios de formato que no afectan el significado del código (espacios, punto y coma, sangría, etc.).

```
style: fix indentation in parser.js
style: remove trailing whitespace across project
style: standardize quote style to single quotes
```

### `refactor` - Refactorización

Cambios en el código que no corrigen errores ni agregan funciones.

```
refactor(core): simplify note class structure
refactor(analysis): restructure harmonic functions module
refactor(parsing): improve chord pattern matching algorithm
```

### `test` - Tests

Cambios relacionados con pruebas, incluyendo agregar, modificar o reparar pruebas.

```
test: add unit tests for chord parser
test(core): increase coverage for note utilities
test(analysis): add integration tests for harmonic analysis
```

### `chore` - Tareas de mantenimiento

Cambios en el proceso de construcción, configuración de herramientas o funciones auxiliares.

```
chore: update package.json dependencies
chore: add .editorconfig file
chore: configure CI/CD pipeline
```

### `perf` - Mejoras de rendimiento

Cambios de código relacionados con optimización del rendimiento.

```
perf(analysis): optimize harmonic progression calculation
perf(core): cache note frequency calculations
perf(parsing): improve chord recognition speed
```

### `ci` - Cambios en CI/CD

Cambios en la configuración y scripts de CI/CD.

```
ci: add GitHub Actions workflow for testing
ci: configure automated linting on push
ci: add build verification step
```

---

## 4. Ámbitos Comunes

Para este proyecto, se definen los siguientes ámbitos específicos según la estructura del proyecto:

| Ámbito     | Descripción                                               |
| ---------- | --------------------------------------------------------- |
| `core`     | Funcionalidades centrales: notas, intervalos, frecuencias |
| `parsing`  | Parser de acordes y notación musical                      |
| `analysis` | Análisis armónico, detección de funciones tonales         |
| `output`   | Generación de resultados, exportación, formato de salida  |
| `config`   | Archivos de configuración, esquemas, opciones             |
| `agent`    | Configuración del agente IA, prompts, modelos             |
| `docs`     | Documentación del proyecto                                |

### Uso del ámbito

- **Obligatorio** para cambios que afecten un módulo específico
- **Omitir** para cambios globales o que afecten múltiples módulos
- Usar ámbito genérico como `core` cuando no exista uno específico

```
feat(core): add new note transposition method
fix(parsing): resolve issue with diminished chord parsing
refactor: update project dependencies (sin ámbito - cambio general)
```

---

## 5. Ejemplos Completos

### Nuevas características (feat)

```
feat(core): implement MIDI note number conversion
feat(analysis): add harmonic function detection algorithm
feat(parsing): support for slash chord notation
feat(output): export analysis results to JSON format
feat(agent): integrate MiniMax M2.1 model for analysis
```

### Correcciones (fix)

```
fix(core): normalize note names to sharp notation
fix(parsing): handle edge case in sus chord parsing
fix(analysis): correct secondary dominant resolution
fix(config): fix schema validation for analysis options
```

### Documentación (docs)

```
docs: add contribution guidelines
docs(analysis): document harmonic function rules
docs(readme): add feature list and screenshots
docs(api): document all exported functions
```

### Refactorización (refactor)

```
refactor(core): separate note class from frequency calculations
refactor(analysis): extract harmonic progression logic
refactor: migrate from callback to Promise-based API
```

### Tests (test)

```
test: add Jest configuration for coverage
test(core): test note transposition edge cases
test(integration): add end-to-end tests for full analysis pipeline
```

### Mantenimiento (chore)

```
chore: update Node.js version requirement to 18+
chore: configure ESLint with project rules
chore: add .gitignore for node_modules
chore: update package-lock.json
```

### Rendimiento (perf)

```
perf(analysis): cache harmonic function lookups
perf(core): optimize frequency calculation with lookup table
perf(parsing): pre-compile regex patterns for chord recognition
```

### CI/CD (ci)

```
ci: add automated testing on PR
ci: configure semantic-release
ci: add build status badge to README
```

---

## 6. Reglas Adicionales

### Lenguaje

- **Usar infinitivo en presente**: "add" no "added", "fix" no "fixed"
- **Primera letra en minúscula**: Excepto al inicio de la descripción
- **Sin punto final**: La descripción no debe terminar con punto

```
✓ feat(core): add MIDI support
✗ feat(core): Added MIDI support
✗ feat(core): adds MIDI support.
```

### Longitud

- **Título**: Máximo 72 caracteres
- **Cuerpo**: Líneas de máximo 80 caracteres
- Si excede, considerar separar en múltiples commits

```
feat(analysis): add comprehensive harmonic progression tracking

This feature implements:
- Detection of ii-V-I progressions
- Identification of deceptive cadences
- Roman numeral analysis output

Closes #42
```

### Cuerpo del commit

Usar el cuerpo para proporcionar contexto adicional cuando sea necesario:

- **Por qué** se realizó el cambio
- **Cómo** funciona (si es complejo)
- **Referencias** a issues o PR relacionados
- **Notas** sobre efectos secundarios

### Pie de footer

Usar para información especial:

```
BREAKING CHANGE: Note constructor now requires pitch class as string

Closes #123
Refs #456
```

---

## 7. Breaking Changes

Los breaking changes deben indicarse explícitamente y generan un cambio de versión mayor.

### Formato en el mensaje

**Opción 1: En el pie (recomendado)**

```
<tipo>(<ámbito>): <descripción>

BREAKING CHANGE: <descripción del cambio incompatible>

La API de análisis de acordes ha sido modificada.
Antes: analyzeChord(chord, key)
Ahora: analyzeChord(chord, options)
```

**Opción 2: Exclamación en el título**

```
feat(core)!: change note constructor signature

BREAKING CHANGE: Note constructor now requires pitch class parameter
```

### Generación de changelog

Los breaking changes serán automáticamente:

1. Marcados como `⚠ BREAKING CHANGE` en el changelog
2. Incluidos en la sección de notas de actualización
3. Utilizados para determinar el versionado semántico (major)

---

## 8. Scripts y Hooks

### Husky (Git hooks)

Instalar Husky para validar mensajes de commit:

```bash
npm install --save-dev husky
npx husky install
```

### Commitlint

Usar commitlint para validar mensajes de commit:

```bash
npm install --save-dev @commitlint/cli @commitlint/config-conventional
```

**`.commitlintrc.js`**:

```javascript
module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "type-enum": [
            2,
            "always",
            [
                "feat",
                "fix",
                "docs",
                "style",
                "refactor",
                "test",
                "chore",
                "perf",
                "ci",
            ],
        ],
        "scope-enum": [
            2,
            "always",
            [
                "core",
                "parsing",
                "analysis",
                "output",
                "config",
                "agent",
                "docs",
                "",
            ],
        ],
        "subject-case": [2, "always", "sentence-case"],
        "subject-empty": [2, "never"],
        "header-max-length": [2, "always", 72],
    },
};
```

**Crear hook**:

```bash
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

### Configuración de Git Hooks para el proyecto actual

Para habilitar los hooks de Git en este proyecto, sigue estos pasos:

1. Instala las dependencias de desarrollo:
```bash
npm install
```

2. Si usas Husky, inicializa el sistema de hooks:
```bash
npx husky install
```

3. Asegúrate de que el hook de commit-msg esté configurado (como se muestra arriba).

4. Alternativamente, puedes usar un script de validación personalizado. Crea un archivo `.git/hooks/commit-msg` con permisos de ejecución que valide el formato del mensaje de commit.

---

## 9. Flujo de Trabajo Recomendado

### Antes de commit

1. Asegúrate de que los tests pasen: `npm test`
2. Ejecuta el linter: `npm run lint`
3. Formatea el código: `npm run format`
4. Verifica el mensaje de commit

### Crear commit

```bash
# Stage cambios
git add <archivos>

# Commit con mensaje
git commit -m "feat(analysis): add dominant function detection"

# O usar editor para mensajes largos
git commit
```

### Ejemplos de commits para el estado actual del proyecto

Después de haber completado la configuración inicial del proyecto:

```
chore: create package.json with project configuration
docs: create README.md with project overview and quick start
chore: add .gitignore with appropriate exclusions
chore: create LICENSE file with MIT license
chore: configure jest.config.js for testing
chore: configure .eslintrc.json for code quality
chore: configure .prettierrc for code formatting
chore: create directory structure according to FOLDER_STRUCTURE.md
feat: create index.js files as module entry points
docs: update SETUP.md with corrected instructions
docs: update PROJECT_PLAN.md with current implementation status
docs: update DEVELOPMENT.md with configuration references
```

---

## 10. Recursos Adicionales

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
- [Commitlint](https://commitlint.js.org/)
- [Husky](https://typicode.github.io/husky/)

---

## Resumen Rápido

```
✓ Tipo(ámbito): Descripción en presente
✓ Máximo 72 caracteres en título
✓ Usar cuerpo para detalles adicionales
✓ Indicar BREAKING CHANGE explícitamente
✓ Validar con commitlint antes de commit
✓ Seguir las fases: core → parsing → analysis → output
```

**Recuerda**: Cada commit debe representar un cambio atómico y significativo para el historial del proyecto.
