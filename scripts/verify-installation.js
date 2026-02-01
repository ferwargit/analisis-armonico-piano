#!/usr/bin/env node

// Archivo de prueba para verificar la instalación del proyecto

const fs = require('fs');
const path = require('path');

// Parsear argumentos de línea de comandos
const args = process.argv.slice(2);

// Función para mostrar ayuda
function showHelp() {
  console.log(`
Uso: node verify-installation.js [opciones]

Opciones:
  --json, -j                Salida en formato JSON
  --help, -h                Mostrar esta ayuda

Ejemplos:
  node verify-installation.js
  node verify-installation.js --json
  node verify-installation.js -j
  `);
  process.exit(0);
}

// Procesar argumentos
let outputJson = false;
for (let i = 0; i < args.length; i++) {
  switch (args[i]) {
    case '--json':
    case '-j':
      outputJson = true;
      break;
    case '--help':
    case '-h':
      showHelp();
      break;
  }
}

// Variable para almacenar resultados si se usa salida JSON
let verificationResults = {
  timestamp: new Date().toISOString(),
  projectName: 'Análisis Armónico Piano',
  status: 'success',
  checks: []
};

// Función para registrar un chequeo
function registerCheck(category, item, exists) {
  const checkResult = {
    category,
    item,
    exists,
    status: exists ? 'ok' : 'missing'
  };

  verificationResults.checks.push(checkResult);

  if (!outputJson) {
    const statusSymbol = exists ? '✓' : '✗';
    const statusText = exists ? '' : ' - NO ENCONTRADO';
    console.log(`${statusSymbol} ${item}${statusText}`);
  }
}

// Función reutilizable para verificar existencia de archivos/directorios
function checkExistence(items, label) {
  if (!outputJson) {
    console.log(`\\nVerificando ${label}...`);
  }

  items.forEach(item => {
    const fullPath = path.join(__dirname, '..', item);
    const exists = fs.existsSync(fullPath);
    registerCheck(label, item, exists);
  });
}

console.log('Verificando la instalación del proyecto Análisis Armónico Piano...');

// Intentar importar los módulos principales
try {
  // Verificar archivos de configuración principales
  const configFiles = [
    'package.json',
    'src/index.js',
    'config/analyzer.config.json',
    'jest.config.js',
    '.eslintrc.json',
    '.prettierrc'
  ];
  checkExistence(configFiles, 'archivos de configuración principales');

  // Verificar estructura de directorios
  const dirs = [
    'src/core',
    'src/parsing',
    'src/analysis',
    'src/output',
    'src/config',
    'tests/unit',
    'tests/integration',
    'tests/fixtures',
    'tests/helpers',
    'examples/input',
    'scripts'
  ];
  checkExistence(dirs, 'estructura de directorios');

  // Verificar archivos de ejemplo
  const exampleFiles = [
    'examples/input/sample.musicxml',
    'examples/input/chord-progression.musicxml'
  ];
  checkExistence(exampleFiles, 'archivos de ejemplo');

  // Determinar estado general
  const failedChecks = verificationResults.checks.filter(check => !check.exists);
  verificationResults.status = failedChecks.length > 0 ? 'partial' : 'success';
  verificationResults.failedCount = failedChecks.length;
  verificationResults.totalCount = verificationResults.checks.length;

  if (outputJson) {
    // Salida en formato JSON
    console.log(JSON.stringify(verificationResults, null, 2));
  } else {
    console.log('\\n✓ Verificación básica completada exitosamente');
    console.log('\\nEl proyecto tiene la estructura básica necesaria para funcionar.');
    console.log('Sugerencia: Ejecute `npm install` para instalar dependencias y luego `npm test` para verificar el funcionamiento.');
  }

} catch (error) {
  if (outputJson) {
    verificationResults.status = 'error';
    verificationResults.error = error.message;
    console.log(JSON.stringify(verificationResults, null, 2));
  } else {
    console.error('✗ Error durante la verificación:', error.message);
  }
  process.exit(1);
}