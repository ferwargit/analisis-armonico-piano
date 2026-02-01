#!/usr/bin/env node

/**
 * Script para generar archivos de prueba para el sistema de análisis armónico
 */

const fs = require('fs');
const path = require('path');

// Parsear argumentos de línea de comandos
const args = process.argv.slice(2);

// Función para mostrar ayuda
function showHelp() {
  console.log(`
Uso: node generate-test-files.js [opciones]

Opciones:
  --force, -f              Sobrescribir archivos existentes sin preguntar
  --help, -h               Mostrar esta ayuda

Ejemplos:
  node generate-test-files.js
  node generate-test-files.js --force
  node generate-test-files.js -f
  `);
  process.exit(0);
}

// Procesar argumentos
let forceOverwrite = false;
for (let i = 0; i < args.length; i++) {
  switch (args[i]) {
    case '--force':
    case '-f':
      forceOverwrite = true;
      break;
    case '--help':
    case '-h':
      showHelp();
      break;
  }
}

// Directorio donde se guardarán los archivos de prueba
const testFilesDir = path.join(__dirname, '..', 'tests', 'fixtures', 'musicxml');

// Asegurar que el directorio exista
if (!fs.existsSync(testFilesDir)) {
  fs.mkdirSync(testFilesDir, { recursive: true });
}

// Cargar datos de configuración
const testData = require('./test-data.json');
const KEY_SIGNATURE_MAP = testData.keySignatures;
const CHORD_MAP = testData.chordMaps;

// Función para obtener la armadura de clave
function getKeySignature(key) {
  return KEY_SIGNATURE_MAP[key] || 0;
}

// Función para obtener los acordes para una tonalidad y progresión
function getChordProgression(key, progression) {
  const chords = CHORD_MAP[key] || CHORD_MAP['C'];
  return progression.split('-').map(chord => {
    if (!chords[chord]) {
      console.warn(`Advertencia: Acordes ${chord} no definido para la tonalidad ${key}, usando acorde I como valor por defecto`);
      return chords['I']; // Usar acorde I como valor por defecto
    }
    return chords[chord];
  });
}

// Función para generar el encabezado de un compás
function generateMeasureHeader(index, key, mode, progression, fifths) {
  return `    <!-- Measure ${index + 1}: ${key}${mode.charAt(0).toUpperCase() + mode.slice(1)} ${progression.split('-')[index]} -->\n` +
         `    <measure number="${index + 1}">\n` +
         `      <attributes>\n` +
         `        <divisions>1</divisions>\n` +
         `        <key>\n` +
         `          <fifths>${fifths}</fifths>\n` +
         `          <mode>${mode}</mode>\n` +
         `        </key>\n` +
         `        <time>\n` +
         `          <beats>4</beats>\n` +
         `          <beat-type>4</beat-type>\n` +
         `        </time>\n` +
         `        <clef>\n` +
         `          <sign>G</sign>\n` +
         `          <line>2</line>\n` +
         `        </clef>\n` +
         `      </attributes>\n`;
}

// Función para generar una nota
function generateNote(note, noteIndex) {
  const match = note.match(/([A-G])([#b]?)/);

  if (!match) {
    console.warn(`Advertencia: Nota inválida '${note}' encontrada, usando C como valor por defecto`);
    const step = 'C';
    const modifier = '';
    const octave = noteIndex === 0 ? '4' : noteIndex === 1 ? '4' : '5'; // Ajustar octava según posición

    let noteString = `      <note>\n`;
    noteString += `        <pitch>\n`;
    noteString += `          <step>${step}</step>\n`;
    if (modifier) noteString += `          <alter>${modifier === '#' ? '1' : '-1'}</alter>\n`;
    noteString += `          <octave>${octave}</octave>\n`;
    noteString += `        </pitch>\n`;
    noteString += `        <duration>1</duration>\n`;
    noteString += `        <voice>1</voice>\n`;
    noteString += `        <type>quarter</type>\n`;
    noteString += `      </note>\n`;

    return noteString;
  } else {
    const [, step, modifier] = match; // Usar [, step, modifier] para omitir el primer elemento
    const octave = noteIndex === 0 ? '4' : noteIndex === 1 ? '4' : '5'; // Ajustar octava según posición

    let noteString = `      <note>\n`;
    noteString += `        <pitch>\n`;
    noteString += `          <step>${step}</step>\n`;
    if (modifier) noteString += `          <alter>${modifier === '#' ? '1' : '-1'}</alter>\n`;
    noteString += `          <octave>${octave}</octave>\n`;
    noteString += `        </pitch>\n`;
    noteString += `        <duration>1</duration>\n`;
    noteString += `        <voice>1</voice>\n`;
    noteString += `        <type>quarter</type>\n`;
    noteString += `      </note>\n`;

    return noteString;
  }
}

// Función para generar los compases
function generateMeasures(chordProgression, key, mode, progression) {
  const fifths = getKeySignature(key);
  let measures = '';

  chordProgression.forEach((chordNotes, index) => {
    measures += generateMeasureHeader(index, key, mode, progression, fifths);

    // Añadir las notas del acorde
    chordNotes.forEach((note, noteIndex) => {
      measures += generateNote(note, noteIndex);
    });

    measures += `    </measure>\n\n`;
  });

  return measures;
}

// Función para validar los parámetros de entrada
function validateParams(key, mode, progression) {
  // Validar tonalidad
  if (!KEY_SIGNATURE_MAP.hasOwnProperty(key)) {
    throw new Error(`Tonalidad inválida: ${key}. Tonalidades válidas: ${Object.keys(KEY_SIGNATURE_MAP).join(', ')}`);
  }

  // Validar modo
  if (!['major', 'minor'].includes(mode)) {
    throw new Error(`Modo inválido: ${mode}. Modos válidos: major, minor`);
  }

  // Validar progresión (debe contener solo acordes válidos)
  const validChordPattern = /^[IViv]+(-[IViv]+)*$/;
  if (!validChordPattern.test(progression.replace(/\d+/g, ''))) {
    throw new Error(`Progresión inválida: ${progression}. Formato esperado: ej. I-IV-V-I`);
  }
}

// Función para generar un archivo MusicXML simple
function generateSimpleMusicXml(key = 'C', mode = 'major', progression = 'I-IV-V-I') {
  // Validar los parámetros de entrada
  validateParams(key, mode, progression);

  const chordProgression = getChordProgression(key, progression);
  const measures = generateMeasures(chordProgression, key, mode, progression);

  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 4.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="4.0">
  <part-list>
    <score-part id="P1">
      <part-name>Piano</part-name>
    </score-part>
  </part-list>
  <part id="P1">
${measures}
  </part>
</score-partwise>`;
}

// Función para escribir archivo con control de sobrescritura
function writeFileWithControl(filePath, content, description) {
  if (fs.existsSync(filePath) && !forceOverwrite) {
    console.log(`⚠ Archivo ya existe, omitiendo: ${filePath}`);
    console.log(`  Use --force para sobrescribir o elimine manualmente el archivo.`);
  } else {
    fs.writeFileSync(filePath, content);
    if (fs.existsSync(filePath)) {
      console.log(`✓ ${description}: ${filePath}`);
    } else {
      console.log(`✗ Error al escribir: ${filePath}`);
    }
  }
}

// Función para generar diferentes tipos de archivos de prueba
function generateTestFiles() {
  console.log('Generando archivos de prueba...\n');
  if (forceOverwrite) {
    console.log('Modo fuerza activado: sobrescribirá archivos existentes\n');
  }

  // 1. Archivo simple en C mayor: I-IV-V-I
  const simpleFile = generateSimpleMusicXml('C', 'major', 'I-IV-V-I');
  const simpleFilePath = path.join(testFilesDir, 'c-major-simple.musicxml');
  writeFileWithControl(simpleFilePath, simpleFile, 'Archivo generado');

  // 2. Archivo en A menor: i-iv-V-i
  const minorFile = generateSimpleMusicXml('A', 'minor', 'i-iv-V-i');
  const minorFilePath = path.join(testFilesDir, 'a-minor-simple.musicxml');
  writeFileWithControl(minorFilePath, minorFile, 'Archivo generado');

  // 3. Archivo en G mayor con progresión ii-V-I
  const jazzFile = generateSimpleMusicXml('G', 'major', 'ii-V-I');
  const jazzFilePath = path.join(testFilesDir, 'g-major-ii-V-I.musicxml');
  writeFileWithControl(jazzFilePath, jazzFile, 'Archivo generado');

  // 4. Archivo en F mayor con progresión I-vi-IV-V
  const popFile = generateSimpleMusicXml('F', 'major', 'I-vi-IV-V');
  const popFilePath = path.join(testFilesDir, 'f-major-pop-progression.musicxml');
  writeFileWithControl(popFilePath, popFile, 'Archivo generado');

  console.log('\nGeneración de archivos de prueba completada.');
  console.log('Directorio:', testFilesDir);
}

// Ejecutar generación de archivos de prueba
generateTestFiles();