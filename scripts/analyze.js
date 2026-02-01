#!/usr/bin/env node

/**
 * Script CLI para análisis armónico de archivos MusicXML
 * 
 * Uso:
 *   node scripts/analyze.js --input <archivo.musicxml> --output <directorio_salida>
 *   node scripts/analyze.js -i <archivo.musicxml> -o <directorio_salida>
 */

const fs = require('fs');
const path = require('path');
const { Analyzer } = require('../src/index');

// Parsear argumentos de línea de comandos
const args = process.argv.slice(2);

// Función para mostrar ayuda
function showHelp() {
  console.log(`
Uso: node analyze.js [opciones]

Opciones:
  -i, --input FILE        Archivo MusicXML de entrada
  -o, --output DIR        Directorio de salida (por defecto: ./output)
  -h, --help              Mostrar esta ayuda
  -v, --verbose           Modo detallado

Ejemplos:
  node analyze.js -i examples/input/sample.musicxml
  node analyze.js --input examples/input/chord-progression.musicxml --output ./results
  `);
  process.exit(0);
}

// Parsear argumentos
let inputFile = null;
let outputDir = './output';
let verbose = false;

for (let i = 0; i < args.length; i++) {
  switch (args[i]) {
    case '-i':
    case '--input':
      inputFile = args[i + 1];
      i++;
      break;
    case '-o':
    case '--output':
      outputDir = args[i + 1];
      i++;
      break;
    case '-v':
    case '--verbose':
      verbose = true;
      break;
    case '-h':
    case '--help':
      showHelp();
      break;
  }
}

// Validar argumentos
if (!inputFile) {
  console.error('Error: Debes especificar un archivo de entrada con -i o --input');
  showHelp();
}

if (!fs.existsSync(inputFile)) {
  console.error(`Error: El archivo de entrada '${inputFile}' no existe`);
  process.exit(1);
}

// Asegurar que el directorio de salida exista
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Ejecutar el análisis
async function runAnalysis() {
  try {
    if (verbose) {
      console.log(`Iniciando análisis de: ${inputFile}`);
      console.log(`Directorio de salida: ${outputDir}`);
    }

    // Leer el archivo de entrada
    const xmlContent = fs.readFileSync(inputFile, 'utf8');
    
    // Crear instancia del analizador
    const analyzer = new Analyzer();
    
    // Ejecutar el análisis
    const result = await analyzer.analyze(xmlContent);
    
    // Generar outputs
    const fileName = path.basename(inputFile, '.musicxml');
    const outputGenerator = require('../src/output/index');
    
    // Generar JSON
    const jsonOutput = outputGenerator.JSONExporter.export(result);
    fs.writeFileSync(path.join(outputDir, `${fileName}.json`), JSON.stringify(jsonOutput, null, 2));
    
    // Generar Markdown
    const mdOutput = outputGenerator.ReportGenerator.generate(result);
    fs.writeFileSync(path.join(outputDir, `${fileName}.md`), mdOutput);
    
    if (verbose) {
      console.log(`Análisis completado. Resultados guardados en: ${outputDir}`);
      console.log(`- ${fileName}.json`);
      console.log(`- ${fileName}.md`);
    } else {
      console.log(`Análisis completado. Resultados guardados en: ${outputDir}`);
    }
  } catch (error) {
    console.error('Error durante el análisis:', error.message);
    process.exit(1);
  }
}

// Ejecutar análisis
runAnalysis();