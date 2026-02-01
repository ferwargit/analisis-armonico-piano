#!/usr/bin/env node

/**
 * Script para generar archivos de prueba para el sistema de análisis armónico
 */

const fs = require('fs');
const path = require('path');

// Directorio donde se guardarán los archivos de prueba
const testFilesDir = path.join(__dirname, '..', 'tests', 'fixtures', 'musicxml');

// Asegurar que el directorio exista
if (!fs.existsSync(testFilesDir)) {
  fs.mkdirSync(testFilesDir, { recursive: true });
}

// Función para generar un archivo MusicXML simple
function generateSimpleMusicXml(key = 'C', mode = 'major', progression = 'I-IV-V-I') {
  const keySignatureMap = {
    'C': 0, 'G': 1, 'D': 2, 'A': 3, 'E': 4, 'B': 5, 'F#': 6, 'Db': -5, 'Ab': -4, 'Eb': -3, 'Bb': -2, 'F': -1
  };

  const fifths = keySignatureMap[key] || 0;

  // Mapeo de acordes para diferentes progresiones
  const chordMap = {
    'C': { 'I': ['C', 'E', 'G'], 'IV': ['F', 'A', 'C'], 'V': ['G', 'B', 'D'], 'vi': ['A', 'C', 'E'] },
    'G': { 'I': ['G', 'B', 'D'], 'IV': ['C', 'E', 'G'], 'V': ['D', 'F#', 'A'], 'vi': ['E', 'G', 'B'] },
    'D': { 'I': ['D', 'F#', 'A'], 'IV': ['G', 'B', 'D'], 'V': ['A', 'C#', 'E'], 'vi': ['B', 'D', 'F#'] },
    'A': { 'I': ['A', 'C#', 'E'], 'IV': ['D', 'F#', 'A'], 'V': ['E', 'G#', 'B'], 'vi': ['F#', 'A', 'C#'] },
    'E': { 'I': ['E', 'G#', 'B'], 'IV': ['A', 'C#', 'E'], 'V': ['B', 'D#', 'F#'], 'vi': ['G#', 'B', 'D#'] },
    'B': { 'I': ['B', 'D#', 'F#'], 'IV': ['E', 'G#', 'B'], 'V': ['F#', 'A#', 'C#'], 'vi': ['D#', 'F#', 'A#'] },
    'F': { 'I': ['F', 'A', 'C'], 'IV': ['Bb', 'D', 'F'], 'V': ['C', 'E', 'G'], 'vi': ['D', 'F', 'A'] },
    'Bb': { 'I': ['Bb', 'D', 'F'], 'IV': ['Eb', 'G', 'Bb'], 'V': ['F', 'A', 'C'], 'vi': ['G', 'Bb', 'D'] },
    'Eb': { 'I': ['Eb', 'G', 'Bb'], 'IV': ['Ab', 'C', 'Eb'], 'V': ['Bb', 'D', 'F'], 'vi': ['C', 'Eb', 'G'] },
    'Ab': { 'I': ['Ab', 'C', 'Eb'], 'IV': ['Db', 'F', 'Ab'], 'V': ['Eb', 'G', 'Bb'], 'vi': ['F', 'Ab', 'C'] },
    'Db': { 'I': ['Db', 'F', 'Ab'], 'IV': ['Gb', 'Bb', 'Db'], 'V': ['Ab', 'C', 'Eb'], 'vi': ['Bb', 'Db', 'F'] },
    'F#': { 'I': ['F#', 'A#', 'C#'], 'IV': ['B', 'D#', 'F#'], 'V': ['C#', 'E#', 'G#'], 'vi': ['A#', 'C#', 'E#'] }
  };

  const chords = chordMap[key] || chordMap['C'];
  const progressionChords = progression.split('-').map(chord => chords[chord]);

  let measures = '';
  progressionChords.forEach((chordNotes, index) => {
    measures += `    <!-- Measure ${index + 1}: ${key}${mode.charAt(0).toUpperCase() + mode.slice(1)} ${progression.split('-')[index]} -->\n`;
    measures += `    <measure number="${index + 1}">\n`;
    measures += `      <attributes>\n`;
    measures += `        <divisions>1</divisions>\n`;
    measures += `        <key>\n`;
    measures += `          <fifths>${fifths}</fifths>\n`;
    measures += `          <mode>${mode}</mode>\n`;
    measures += `        </key>\n`;
    measures += `        <time>\n`;
    measures += `          <beats>4</beats>\n`;
    measures += `          <beat-type>4</beat-type>\n`;
    measures += `        </time>\n`;
    measures += `        <clef>\n`;
    measures += `          <sign>G</sign>\n`;
    measures += `          <line>2</line>\n`;
    measures += `        </clef>\n`;
    measures += `      </attributes>\n`;

    // Añadir las notas del acorde
    chordNotes.forEach((note, noteIndex) => {
      const [step, modifier] = note.match(/([A-G])([#b]?)/);
      const octave = noteIndex === 0 ? '4' : noteIndex === 1 ? '4' : '5'; // Ajustar octava según posición
      
      measures += `      <note>\n`;
      measures += `        <pitch>\n`;
      measures += `          <step>${step}</step>\n`;
      if (modifier) measures += `          <alter>${modifier === '#' ? '1' : '-1'}</alter>\n`;
      measures += `          <octave>${octave}</octave>\n`;
      measures += `        </pitch>\n`;
      measures += `        <duration>1</duration>\n`;
      measures += `        <voice>1</voice>\n`;
      measures += `        <type>quarter</type>\n`;
      measures += `      </note>\n`;
    });

    measures += `    </measure>\n\n`;
  });

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

// Función para generar diferentes tipos de archivos de prueba
function generateTestFiles() {
  console.log('Generando archivos de prueba...\n');

  // 1. Archivo simple en C mayor: I-IV-V-I
  const simpleFile = generateSimpleMusicXml('C', 'major', 'I-IV-V-I');
  const simpleFilePath = path.join(testFilesDir, 'c-major-simple.musicxml');
  fs.writeFileSync(simpleFilePath, simpleFile);
  console.log(`✓ Archivo generado: ${simpleFilePath}`);

  // 2. Archivo en A menor: i-iv-V-i
  const minorFile = generateSimpleMusicXml('A', 'minor', 'i-iv-V-i');
  const minorFilePath = path.join(testFilesDir, 'a-minor-simple.musicxml');
  fs.writeFileSync(minorFilePath, minorFile);
  console.log(`✓ Archivo generado: ${minorFilePath}`);

  // 3. Archivo en G mayor con progresión ii-V-I
  const jazzFile = generateSimpleMusicXml('G', 'major', 'ii-V-I');
  const jazzFilePath = path.join(testFilesDir, 'g-major-ii-V-I.musicxml');
  fs.writeFileSync(jazzFilePath, jazzFile);
  console.log(`✓ Archivo generado: ${jazzFilePath}`);

  // 4. Archivo en F mayor con progresión I-vi-IV-V
  const popFile = generateSimpleMusicXml('F', 'major', 'I-vi-IV-V');
  const popFilePath = path.join(testFilesDir, 'f-major-pop-progression.musicxml');
  fs.writeFileSync(popFilePath, popFile);
  console.log(`✓ Archivo generado: ${popFilePath}`);

  console.log('\nArchivos de prueba generados exitosamente en:', testFilesDir);
}

// Ejecutar generación de archivos de prueba
generateTestFiles();