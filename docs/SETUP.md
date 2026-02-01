---

## 📄 DOCUMENTO 5: SETUP.md


# 🔧 Guía de Setup - Análisis Armónico Piano

## Prerrequisitos

### Software Requerido

| Software | Versión Mínima | Propósito |
|----------|----------------|-----------|
| Node.js | 18.x LTS | Runtime JavaScript |
| npm | 9.x | Gestor de paquetes |
| Git | 2.x | Control de versiones |
| VSCode | Latest | Editor (recomendado) |
| MuseScore 4 | 4.x | Crear/editar MusicXML |

### Verificar Instalación

```bash
# Verificar Node.js
node --version
# Esperado: v18.x.x o superior

# Verificar npm
npm --version
# Esperado: 9.x.x o superior

# Verificar Git
git --version
```

---

## Instalación Paso a Paso

### 1. Clonar/Crear Repositorio

#### Opción A: Crear desde cero

```
mkdir analisis-armonico-piano
cd analisis-armonico-piano
git init
```

#### Opción B: Clonar existente

```
git clone <url-del-repositorio>
cd analisis-armonico-piano
```

## 2. Inicializar npm

npm init -y

3. Configurar package.json

Editar package.json:

{
"name": "analisis-armonico-piano",
"version": "0.1.0",
"description": "Análisis armónico automatizado de ejercicios de piano en MusicXML",
"main": "src/index.js",
"scripts": {
"start": "node src/index.js",
"analyze": "node scripts/analyze.js",
"test": "jest",
"test:watch": "jest --watch",
"test:coverage": "jest --coverage",
"test:unit": "jest tests/unit",
"test:integration": "jest tests/integration",
"lint": "eslint src/**/\*.js",
"lint:fix": "eslint src/**/_.js --fix",
"format": "prettier --write \"src/\*\*/_.js\" \"tests/\*_/_.js\""
},
"keywords": [
"music",
"harmony",
"analysis",
"musicxml",
"piano",
"n8n"
],
"author": "Tu Nombre",
"license": "MIT",
"engines": {
"node": ">=18.0.0"
}
}

4. Instalar Dependencias

# Dependencias de producción

npm install xml2js

# Dependencias de desarrollo

npm install --save-dev jest eslint prettier

# Opcional: más herramientas de desarrollo

npm install --save-dev eslint-config-prettier eslint-plugin-jest

5. Crear Estructura de Carpetas

# Script para crear estructura (ejecutar en bash/PowerShell)

# Directorios principales

mkdir -p src/{core/{models,constants,utils},parsing/{extractors,transformers},analysis/{tonality/algorithms,modality,chords/matchers,harmony/nomenclature,cadences/types,modulations,scales/types,chromatic},output/{musicxml/variants,markdown/{sections,templates},json},config/schemas}

mkdir -p tests/{unit/{core/{models,constants,utils},parsing/{extractors,transformers},analysis/{tonality,chords,harmony,cadences,scales}},integration,e2e,fixtures/{musicxml/{simple,intermediate,advanced},expected,mocks},helpers/matchers}

mkdir -p docs/{api,theory,examples}
mkdir -p examples/{input,output}
mkdir -p scripts
mkdir -p n8n/{workflows,nodes}
mkdir -p .agent/{prompts,models}
mkdir -p .vscode

# Crear archivos index.js vacíos

touch src/index.js
touch src/core/index.js
touch src/core/models/index.js
touch src/core/constants/index.js
touch src/core/utils/index.js
touch src/parsing/index.js
touch src/analysis/index.js
touch src/output/index.js
touch src/config/index.js

6. Configurar Jest

Crear jest.config.js:

module.exports = {
testEnvironment: 'node',
testMatch: ['**/tests/**/*.test.js'],
testPathIgnorePatterns: ['/node_modules/', '/n8n/'],
collectCoverage: true,
coverageDirectory: 'coverage',
coverageReporters: ['text', 'lcov', 'html'],
coverageThreshold: {
global: {
branches: 80,
functions: 80,
lines: 80,
statements: 80
}
},
collectCoverageFrom: [
'src/**/*.js',
'!src/**/index.js'
],
verbose: true,
testTimeout: 10000
};

7. Configurar ESLint

Crear .eslintrc.json:

{
"env": {
"node": true,
"es2021": true,
"jest": true
},
"extends": [
"eslint:recommended"
],
"parserOptions": {
"ecmaVersion": "latest",
"sourceType": "module"
},
"rules": {
"indent": ["error", 2],
"linebreak-style": ["error", "unix"],
"quotes": ["error", "single"],
"semi": ["error", "always"],
"no-unused-vars": ["warn"],
"no-console": ["warn", { "allow": ["warn", "error"] }]
}
}

8. Configurar Prettier

Crear .prettierrc:

{
"semi": true,
"singleQuote": true,
"tabWidth": 2,
"trailingComma": "es5",
"printWidth": 100,
"bracketSpacing": true
}

9. Configurar .gitignore

Crear .gitignore:

# Dependencies

node_modules/

# Coverage

coverage/

# IDE

.vscode/\*
!.vscode/settings.json
!.vscode/extensions.json
!.vscode/launch.json
!.vscode/tasks.json
.idea/

# OS

.DS_Store
Thumbs.db

# Logs

_.log
npm-debug.log_

# Environment

.env
.env.local
.env.\*.local

# Build

dist/
build/

# Temp

tmp/
temp/
\*.tmp

# Output files (opcional - comentar si quieres versionar ejemplos)

# examples/output/

# MusicXML de prueba personales

\*.musicxml.backup

10. Configurar VSCode

Crear .vscode/settings.json:

{
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true
},
"eslint.validate": ["javascript"],
"files.associations": {
"\*.musicxml": "xml"
},
"editor.tabSize": 2,
"files.eol": "\n"
}

Crear .vscode/extensions.json:

{
"recommendations": [
"dbaeumer.vscode-eslint",
"esbenp.prettier-vscode",
"orta.vscode-jest",
"redhat.vscode-xml",
"streetsidesoftware.code-spell-checker",
"gruntfuggly.todo-tree",
"github.copilot"
]
}

Crear .vscode/launch.json:

{
"version": "0.2.0",
"configurations": [
{
"type": "node",
"request": "launch",
"name": "Run Analyzer",
"program": "${workspaceFolder}/scripts/analyze.js",
      "args": ["${workspaceFolder}/examples/input/test.musicxml"],
"console": "integratedTerminal"
},
{
"type": "node",
"request": "launch",
"name": "Jest Current File",
"program": "${workspaceFolder}/node_modules/.bin/jest",
      "args": ["${relativeFile}", "--config", "jest.config.js"],
"console": "integratedTerminal",
"internalConsoleOptions": "neverOpen"
},
{
"type": "node",
"request": "launch",
"name": "Jest All",
"program": "${workspaceFolder}/node_modules/.bin/jest",
"args": ["--config", "jest.config.js"],
"console": "integratedTerminal"
}
]
}

---

Verificación de Setup

Test de Verificación

Crear tests/unit/setup.test.js:

describe('Project Setup', () => {
it('should have Node.js 18+', () => {
const nodeVersion = parseInt(process.versions.node.split('.')[0]);
expect(nodeVersion).toBeGreaterThanOrEqual(18);
});

it('should import xml2js', () => {
expect(() => require('xml2js')).not.toThrow();
});

it('should have basic project structure', () => {
const fs = require('fs');
const path = require('path');

    const requiredDirs = [
      'src/core',
      'src/parsing',
      'src/analysis',
      'src/output',
      'tests'
    ];

    requiredDirs.forEach(dir => {
      const fullPath = path.join(process.cwd(), dir);
      expect(fs.existsSync(fullPath)).toBe(true);
    });

});
});

Ejecutar Verificación

npm test -- tests/unit/setup.test.js

---

Comandos Útiles

# Desarrollo

npm test # Ejecutar todos los tests
npm run test:watch # Tests en modo watch
npm run lint # Verificar código
npm run lint:fix # Corregir código automáticamente

# Análisis

npm run analyze <archivo.musicxml>

# Utilidades

npm run format # Formatear código

---

Próximos Pasos

✅ Verificar que el setup funciona (npm test)
⬜ Crear primer archivo MusicXML de prueba en MuseScore
⬜ Implementar modelo Note (FASE 1)
⬜ Comenzar con parsing básico

---

Última actualización: 2026-02-01
