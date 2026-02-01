#!/usr/bin/env node

/**
 * Script para validar la configuración del analizador
 */

const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');

// Parsear argumentos de línea de comandos
const args = process.argv.slice(2);

// Función para mostrar ayuda
function showHelp() {
  console.log(`
Uso: node validate-config.js [opciones]

Opciones:
  --config FILE, -c FILE    Archivo de configuración personalizado a validar
  --help, -h                Mostrar esta ayuda

Ejemplos:
  node validate-config.js
  node validate-config.js --config custom-config.json
  node validate-config.js -c ../path/to/config.json
  `);
  process.exit(0);
}

// Procesar argumentos
let customConfigPath = null;
for (let i = 0; i < args.length; i++) {
  switch (args[i]) {
    case '--config':
    case '-c':
      customConfigPath = args[i + 1];
      i++; // Saltar el siguiente argumento (ruta del archivo)
      break;
    case '--help':
    case '-h':
      showHelp();
      break;
  }
}

// Cargar el esquema de configuración
const configSchema = require('../config/analyzer.schema.json');

// Inicializar AJV para validación de esquema
const ajv = new Ajv();
addFormats(ajv);

function validateConfig(config, schema) {
  const validate = ajv.compile(schema);
  const valid = validate(config);

  return {
    valid,
    errors: validate.errors
  };
}

function validateConfiguration(configPath = null) {
  let configToValidate;
  let configDescription;

  if (configPath) {
    // Validar configuración personalizada
    const fullPath = path.resolve(configPath);

    if (!fs.existsSync(fullPath)) {
      console.error(`Error: El archivo de configuración no existe: ${fullPath}`);
      process.exit(1);
    }

    try {
      configToValidate = require(fullPath);
      configDescription = configPath;
    } catch (error) {
      console.error(`Error: No se pudo cargar el archivo de configuración: ${error.message}`);
      process.exit(1);
    }
  } else {
    // Validar configuración predeterminada
    configToValidate = require('../config/analyzer.config.json');
    configDescription = 'configuración predeterminada';
  }

  console.log(`Validando ${configDescription}...\n`);

  // Validar la configuración
  const result = validateConfig(configToValidate, configSchema);

  if (result.valid) {
    console.log('✓ Configuración válida');
    console.log('\nResumen de configuración:');
    console.log(`- Versión: ${configToValidate.version}`);
    console.log(`- Fase actual: ${configToValidate.features?.phase || 'N/A'}`);
    console.log(`- Formato de entrada: ${configToValidate.input?.format || 'N/A'}`);
    console.log(`- Idioma: ${configToValidate.analysis?.context?.language?.code || 'N/A'}`);

    console.log('\nValidación completada exitosamente.');
    return true;
  } else {
    console.error('✗ Errores en la configuración:');
    result.errors.forEach(error => {
      console.error(`  ${error.instancePath || 'raíz'}: ${error.message}`);
    });
    return false;
  }
}

// Ejecutar validación
const isValid = validateConfiguration(customConfigPath);

if (!isValid) {
  process.exit(1);
}