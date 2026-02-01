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

console.log('Verificando y creando directorios esenciales si no existen...');
requiredDirs.forEach(dir => {
  const dirPath = path.join(__dirname, '..', dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`✓ Directorio creado: ${dir}`);
  } else {
    console.log(`✓ Directorio encontrado: ${dir}`);
  }
});

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

    // Crear archivo con contenido por defecto si no existe
    switch(file) {
      case 'package.json':
        const packageJson = {
          "name": "analisis-armonico-piano",
          "version": "0.1.0",
          "description": "Análisis armónico automatizado de ejercicios de piano en MusicXML",
          "main": "src/index.js",
          "scripts": {
            "test": "jest",
            "start": "node src/index.js",
            "analyze": "node scripts/analyze.js"
          },
          "keywords": ["music", "harmony", "analysis", "musicxml", "piano"],
          "author": "Análisis Armónico Piano Team",
          "license": "MIT",
          "devDependencies": {
            "jest": "^29.0.0"
          },
          "dependencies": {
            "xml2js": "^0.6.2"
          }
        };
        fs.writeFileSync(filePath, JSON.stringify(packageJson, null, 2));
        console.log(`✓ Archivo creado: ${file}`);
        break;

      case 'jest.config.js':
        const jestConfig = `module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};`;
        fs.writeFileSync(filePath, jestConfig);
        console.log(`✓ Archivo creado: ${file}`);
        break;

      case '.eslintrc.json':
        const eslintConfig = {
          "env": {
            "node": true,
            "es2021": true,
            "jest": true
          },
          "extends": ["eslint:recommended"],
          "parserOptions": {
            "ecmaVersion": "latest",
            "sourceType": "module"
          },
          "rules": {
            "indent": ["error", 2],
            "linebreak-style": ["error", "unix"],
            "quotes": ["error", "single"],
            "semi": ["error", "always"]
          }
        };
        fs.writeFileSync(filePath, JSON.stringify(eslintConfig, null, 2));
        console.log(`✓ Archivo creado: ${file}`);
        break;

      case '.prettierrc':
        const prettierConfig = {
          "semi": true,
          "singleQuote": true,
          "tabWidth": 2,
          "trailingComma": "es5",
          "printWidth": 100
        };
        fs.writeFileSync(filePath, JSON.stringify(prettierConfig, null, 2));
        console.log(`✓ Archivo creado: ${file}`);
        break;

      case 'config/analyzer.config.json':
        // Asegurarse de que el directorio config exista
        const configDir = path.dirname(filePath);
        if (!fs.existsSync(configDir)) {
          fs.mkdirSync(configDir, { recursive: true });
        }

        const analyzerConfig = {
          "$schema": "./analyzer.schema.json",
          "version": "1.0.0",
          "input": {
            "format": "musicxml",
            "encoding": "utf-8",
            "validation": true
          },
          "analysis": {
            "piano": {
              "handUnification": "unified",
              "options": ["unified", "separate", "both"]
            },
            "tonality": {
              "algorithms": {
                "krumhanslSchmuckler": {
                  "enabled": true,
                  "weight": 0.4
                },
                "bassAnalysis": {
                  "enabled": true,
                  "weight": 0.2
                },
                "noteFrequency": {
                  "enabled": true,
                  "weight": 0.2
                },
                "cadenceAnalysis": {
                  "enabled": true,
                  "weight": 0.2
                }
              },
              "consensusThreshold": 0.7,
              "detectModes": true
            }
          },
          "output": {
            "formats": {
              "json": {
                "enabled": true,
                "pretty": true
              }
            },
            "directory": "./output"
          }
        };
        fs.writeFileSync(filePath, JSON.stringify(analyzerConfig, null, 2));
        console.log(`✓ Archivo creado: ${file}`);
        break;

      case 'config/analyzer.schema.json':
        // Asegurarse de que el directorio config exista
        if (!fs.existsSync(configDir)) {
          fs.mkdirSync(configDir, { recursive: true });
        }

        const analyzerSchema = {
          "$schema": "http://json-schema.org/draft-07/schema#",
          "title": "Analyzer Configuration Schema",
          "description": "Schema for harmonic analysis configuration",
          "type": "object",
          "required": ["version", "analysis", "output"],
          "properties": {
            "version": {
              "type": "string",
              "pattern": "^\\d+\\.\\d+\\.\\d+$"
            },
            "input": {
              "type": "object",
              "properties": {
                "format": {
                  "type": "string",
                  "enum": ["musicxml"]
                },
                "encoding": {
                  "type": "string",
                  "default": "utf-8"
                },
                "validation": {
                  "type": "boolean",
                  "default": true
                }
              }
            },
            "analysis": {
              "type": "object",
              "description": "Analysis configuration options",
              "properties": {
                "piano": {
                  "type": "object",
                  "properties": {
                    "handUnification": {
                      "type": "string",
                      "enum": ["unified", "separate", "both"]
                    }
                  },
                  "additionalProperties": false
                },
                "tonality": {
                  "type": "object",
                  "properties": {
                    "algorithms": {
                      "type": "object",
                      "properties": {
                        "krumhanslSchmuckler": {
                          "type": "object",
                          "properties": {
                            "enabled": { "type": "boolean" },
                            "weight": {
                              "type": "number",
                              "minimum": 0,
                              "maximum": 1
                            }
                          },
                          "additionalProperties": false
                        }
                      }
                    }
                  },
                  "additionalProperties": false
                }
              },
              "additionalProperties": false
            },
            "output": {
              "type": "object",
              "properties": {
                "formats": {
                  "type": "object",
                  "properties": {
                    "json": {
                      "type": "object",
                      "properties": {
                        "enabled": { "type": "boolean" },
                        "pretty": { "type": "boolean" }
                      },
                      "additionalProperties": false
                    }
                  },
                  "additionalProperties": false
                },
                "directory": { "type": "string" }
              },
              "additionalProperties": false
            }
          }
        };
        fs.writeFileSync(filePath, JSON.stringify(analyzerSchema, null, 2));
        console.log(`✓ Archivo creado: ${file}`);
        break;
    }
  }
});

console.log('\nSetup completado. El proyecto está listo para comenzar a desarrollar.');

// Verificar si node_modules existe
const nodeModulesPath = path.join(__dirname, '..', 'node_modules');
if (fs.existsSync(nodeModulesPath)) {
  console.log('\nSugerencia: Ejecute `npm test` para verificar que todo funcione correctamente.');
} else {
  console.log('\nSugerencia: Ejecute `npm install` para instalar dependencias y luego `npm test` para verificar que todo funcione correctamente.');
}