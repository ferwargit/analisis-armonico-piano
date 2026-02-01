#!/usr/bin/env node

/**
 * Script para validar la configuración del analizador
 */

const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');

// Cargar la configuración predeterminada y el esquema
const defaultConfig = require('../config/analyzer.config.json');
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

function validateConfiguration() {
  console.log('Validando configuración del analizador...\n');
  
  // Validar la configuración predeterminada
  const result = validateConfig(defaultConfig, configSchema);
  
  if (result.valid) {
    console.log('✓ Configuración válida');
    console.log('\nResumen de configuración:');
    console.log(`- Versión: ${defaultConfig.version}`);
    console.log(`- Fase actual: ${defaultConfig.features.phase}`);
    console.log(`- Formato de entrada: ${defaultConfig.input.format}`);
    console.log(`- Idioma: ${defaultConfig.analysis.context.language.code}`);
    
    // Validar que existan los archivos de configuración
    const configFiles = [
      '../config/analyzer.config.json',
      '../config/analyzer.schema.json'
    ];
    
    console.log('\n✓ Archivos de configuración existentes:');
    configFiles.forEach(file => {
      const fullPath = path.resolve(__dirname, file);
      if (fs.existsSync(fullPath)) {
        console.log(`  ✓ ${file}`);
      } else {
        console.log(`  ✗ ${file} - NO ENCONTRADO`);
      }
    });
    
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
const isValid = validateConfiguration();

if (!isValid) {
  process.exit(1);
}