# Análisis Básico

## Introducción

Este documento explica cómo realizar un análisis armónico básico usando el sistema de Análisis Armónico Piano.

## Configuración Inicial

### Requisitos

- Node.js 18 o superior
- npm 9 o superior
- Archivo MusicXML de entrada

### Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd analisis-armonico-piano

# Instalar dependencias
npm install

# Verificar instalación
npm test
```

## Uso Básico

### Análisis de un Archivo Simple

```javascript
const { Analyzer } = require('./src/index');

// Crear instancia del analizador
const analyzer = new Analyzer();

// Contenido de ejemplo de MusicXML (simplificado)
const musicXmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 4.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="4.0">
  <part-list>
    <score-part id="P1">
      <part-name>Piano</part-name>
    </score-part>
  </part-list>
  <part id="P1">
    <measure number="1">
      <attributes>
        <divisions>1</divisions>
        <key>
          <fifths>0</fifths>
          <mode>major</mode>
        </key>
        <time>
          <beats>4</beats>
          <beat-type>4</beat-type>
        </time>
        <clef>
          <sign>G</sign>
          <line>2</line>
        </clef>
      </attributes>
      <note>
        <pitch>
          <step>C</step>
          <octave>4</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>quarter</type>
      </note>
      <note>
        <pitch>
          <step>E</step>
          <octave>4</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>quarter</type>
      </note>
      <note>
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>quarter</type>
      </note>
      <note>
        <pitch>
          <step>C</step>
          <octave>5</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>quarter</type>
      </note>
    </measure>
  </part>
</score-partwise>`;

// Ejecutar análisis
const result = analyzer.analyze(musicXmlContent);

console.log('Resultado del análisis:');
console.log(JSON.stringify(result, null, 2));
```

### Salida Esperada

```json
{
  "tonality": {
    "key": "C",
    "mode": "major",
    "confidence": 0.95
  },
  "chords": [
    {
      "root": "C",
      "type": "major",
      "symbol": "C",
      "inversion": 0,
      "notes": ["C4", "E4", "G4", "C5"],
      "function": "T",
      "romanNumeral": "I"
    }
  ],
  "progression": {
    "romanNumerals": ["I"],
    "functions": ["T"]
  },
  "metadata": {
    "processedAt": "2026-01-31T10:00:00.000Z",
    "analyzerVersion": "0.1.0"
  }
}
```

## Scripts de Análisis

### Usando el Script CLI

```bash
# Analizar un archivo MusicXML
node scripts/analyze.js --input examples/input/sample.musicxml

# Con salida específica
node scripts/analyze.js -i examples/input/chord-progression.musicxml -o ./results
```

### Configuración del Análisis

El análisis se puede configurar usando el archivo `config/analyzer.config.json`:

```json
{
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
  }
}
```

## Interpretación de Resultados

### Tonalidad

El sistema identifica la tonalidad principal con un nivel de confianza. Valores superiores a 0.7 se consideran confiables.

### Acordes

Cada acorde detectado incluye:
- Raíz (root)
- Tipo (major, minor, etc.)
- Símbolo (C, Am, etc.)
- Inversión (0=normal, 1=1ra inv, 2=2da inv, etc.)
- Función armónica (T=Tónica, S=Subdominante, D=Dominante)
- Numeral romano (I, ii, III, etc.)

## Errores Comunes y Solución

### Archivo MusicXML Inválido

Si se recibe un error de parsing, verificar que el archivo MusicXML sea válido y esté correctamente formateado.

### Resultados Inesperados

- Asegurarse de que el archivo contenga datos musicales suficientes
- Verificar que la armadura de clave esté correctamente especificada
- Confirmar que las notas tengan alturas y duraciones válidas

## Próximos Pasos

Después del análisis básico, puedes explorar:

- Análisis avanzado con detección de modulaciones
- Generación de informes detallados
- Análisis de progresiones armónicas complejas