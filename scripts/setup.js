#!/usr/bin/env node

/**
 * Script de setup para el proyecto Análisis Armónico Piano
 * 
 * Este script realiza tareas de inicialización del proyecto
 */

const fs = require('fs');
const path = require('path');

console.log('Iniciando setup del proyecto Análisis Armónico Piano...\n');

// Verificar que los directorios esenciales existan
const requiredDirs = [
  'src',
  'tests',
  'examples/input',
  'examples/output',
  'output',
  'config',
  'scripts',
  'docs'
];

console.log('Verificando directorios esenciales...');
let allDirsExist = true;

requiredDirs.forEach(dir => {
  const dirPath = path.join(__dirname, '..', dir);
  if (!fs.existsSync(dirPath)) {
    console.log(`✗ Directorio faltante: ${dir}`);
    allDirsExist = false;
  } else {
    console.log(`✓ Directorio encontrado: ${dir}`);
  }
});

if (!allDirsExist) {
  console.log('\nCreando directorios faltantes...');
  requiredDirs.forEach(dir => {
    const dirPath = path.join(__dirname, '..', dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(`✓ Directorio creado: ${dir}`);
    }
  });
}

// Verificar que los archivos de configuración existan
const configFiles = [
  'config/analyzer.config.json',
  'config/analyzer.schema.json',
  'package.json',
  'jest.config.js',
  '.eslintrc.json',
  '.prettierrc'
];

console.log('\nVerificando archivos de configuración...');
configFiles.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    console.log(`✓ Archivo encontrado: ${file}`);
  } else {
    console.log(`✗ Archivo faltante: ${file}`);
  }
});

console.log('\nSetup completado. El proyecto está listo para comenzar a desarrollar.');
console.log('\nSugerencia: Ejecute `npm test` para verificar que todo funcione correctamente.');