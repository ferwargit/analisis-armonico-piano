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

// Importar chalk para formato de colores (si está disponible)
let chalk;
try {
  chalk = require('chalk');
} catch (error) {
  // Si chalk no está disponible, usar funciones de colores dummy
  chalk = {
    bold: str => str,
    yellow: str => str,
    green: str => str,
    blue: str => str,
    red: str => str,
    reset: str => str
  };
}

// Parsear argumentos de línea de comandos
const args = process.argv.slice(2);

// Función para mostrar ayuda
function showHelp() {
  console.log(chalk.bold.blue(`
Uso: ${chalk.yellow('node analyze.js [opciones]')}

${chalk.green('Opciones:')}
  -i, --input FILE        ${chalk.reset('Archivo MusicXML de entrada')}
  -o, --output DIR        ${chalk.reset('Directorio de salida (por defecto: ./output)')}
  -h, --help              ${chalk.reset('Mostrar esta ayuda')}
  -v, --verbose           ${chalk.reset('Modo detallado')}

${chalk.green('Ejemplos:')}
  ${chalk.yellow('node analyze.js -i examples/input/sample.musicxml')}
  ${chalk.yellow('node analyze.js --input examples/input/chord-progression.musicxml --output ./results')}
  `));
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

// Validar que el archivo de entrada tenga extensión .musicxml
if (!inputFile.toLowerCase().endsWith('.musicxml')) {
  console.error(`Error: El archivo de entrada '${inputFile}' debe tener extensión .musicxml`);
  process.exit(1);
}

// Validar que el archivo de entrada exista
if (!fs.existsSync(inputFile)) {
  console.error(`Error: El archivo de entrada '${inputFile}' no existe`);
  process.exit(1);
}

// Validar que el archivo de entrada sea realmente un archivo (no un directorio)
if (!fs.statSync(inputFile).isFile()) {
  console.error(`Error: '${inputFile}' no es un archivo válido`);
  process.exit(1);
}

// Validar que el archivo de entrada no esté vacío
const stats = fs.statSync(inputFile);
if (stats.size === 0) {
  console.error(`Error: El archivo de entrada '${inputFile}' está vacío`);
  process.exit(1);
}

// Asegurar que el directorio de salida sea un directorio válido
try {
  // Si el directorio no existe, intentar crearlo
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    if (verbose) {
      console.log(`Directorio de salida creado: ${outputDir}`);
    }
  } else {
    // Si existe, verificar que sea un directorio
    const outputStats = fs.statSync(outputDir);
    if (!outputStats.isDirectory()) {
      console.error(`Error: '${outputDir}' no es un directorio válido`);
      process.exit(1);
    }
  }
} catch (error) {
  console.error(`Error al acceder o crear el directorio de salida '${outputDir}': ${error.message}`);
  process.exit(1);
}

// Validar permisos de escritura en el directorio de salida
try {
  fs.accessSync(outputDir, fs.constants.W_OK);
} catch (error) {
  console.error(`Error: No se tiene permiso de escritura en el directorio de salida '${outputDir}'`);
  process.exit(1);
}

// Ejecutar el análisis
async function runAnalysis() {
  try {
    if (verbose) {
      console.log(`Iniciando análisis de: ${inputFile}`);
      console.log(`Directorio de salida: ${outputDir}`);
    }

    // Leer el archivo de entrada con manejo de errores
    let xmlContent;
    try {
      xmlContent = fs.readFileSync(inputFile, 'utf8');
    } catch (error) {
      console.error(`Error leyendo el archivo de entrada '${inputFile}': ${error.message}`);
      process.exit(1);
    }

    // Crear instancia del analizador
    const analyzer = new Analyzer();

    // Ejecutar el análisis
    let result;
    try {
      result = await analyzer.analyze(xmlContent);
    } catch (error) {
      console.error(`Error durante el análisis del archivo '${inputFile}': ${error.message}`);
      process.exit(1);
    }

    // Validar que el resultado del análisis sea un objeto válido
    if (!result || typeof result !== 'object') {
      console.error(`Error: El análisis del archivo '${inputFile}' no produjo un resultado válido`);
      process.exit(1);
    }

    // Validar que el resultado contenga las propiedades esperadas
    if (!result.tonality || !result.chords) {
      console.error(`Error: El resultado del análisis no contiene las propiedades esperadas (tonality, chords)`);
      process.exit(1);
    }

    // Generar outputs
    const fileName = path.basename(inputFile, '.musicxml');
    let outputGenerator;
    try {
      outputGenerator = require('../src/output/index');
    } catch (error) {
      console.error(`Error cargando módulo de salida: ${error.message}`);
      process.exit(1);
    }

    // Generar JSON con manejo de errores
    let jsonOutput;
    try {
      jsonOutput = outputGenerator.JSONExporter.export(result);
    } catch (error) {
      console.error(`Error generando salida JSON: ${error.message}`);
      process.exit(1);
    }

    try {
      fs.writeFileSync(path.join(outputDir, `${fileName}.json`), JSON.stringify(jsonOutput, null, 2));
      if (verbose) {
        console.log(`Archivo JSON generado: ${fileName}.json`);
      }
    } catch (error) {
      console.error(`Error escribiendo archivo JSON '${path.join(outputDir, `${fileName}.json`)}': ${error.message}`);
      process.exit(1);
    }

    // Generar Markdown con manejo de errores
    let mdOutput;
    try {
      mdOutput = outputGenerator.ReportGenerator.generate(result);
    } catch (error) {
      console.error(`Error generando salida Markdown: ${error.message}`);
      process.exit(1);
    }

    try {
      fs.writeFileSync(path.join(outputDir, `${fileName}.md`), mdOutput);
      if (verbose) {
        console.log(`Archivo Markdown generado: ${fileName}.md`);
      }
    } catch (error) {
      console.error(`Error escribiendo archivo Markdown '${path.join(outputDir, `${fileName}.md`)}': ${error.message}`);
      process.exit(1);
    }

    // Función para mostrar mensaje de éxito y evitar duplicación
    function showSuccessMessage() {
      if (verbose) {
        console.log(`Análisis completado. Resultados guardados en: ${outputDir}`);
        console.log(`- ${fileName}.json`);
        console.log(`- ${fileName}.md`);
      } else {
        console.log(`Análisis completado. Resultados guardados en: ${outputDir}`);
      }
    }

    showSuccessMessage();
  } catch (error) {
    console.error('Error durante el análisis:', error.message);
    process.exit(1);
  }
}

// Ejecutar análisis
runAnalysis();