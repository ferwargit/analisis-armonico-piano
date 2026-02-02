# 🎹 Análisis Armónico Piano

[![Version](https://img.shields.io/github/v/release/tu-usuario/analisis-armonico-piano)](https://github.com/tu-usuario/analisis-armonico-piano/releases)
[![License](https://img.shields.io/github/license/tu-usuario/analisis-armonico-piano)](LICENSE)
[![Node.js](https://img.shields.io/badge/node->=18.0.0-green)](https://nodejs.org/)
[![Build Status](https://github.com/tu-usuario/analisis-armonico-piano/workflows/Test/badge.svg)](https://github.com/tu-usuario/analisis-armonico-piano/actions)

> Sistema automatizado para análisis armónico de ejercicios de piano de 4 compases, capaz de detectar tonalidad, acordes, progresiones, cadencias y modulaciones a partir de archivos MusicXML.

## 🎯 Características Principales

- **Detección de tonalidad** usando múltiples algoritmos (Krumhansl-Schmuckler, análisis de bajo, frecuencia de notas)
- **Identificación de acordes** con inversiones y tensiones (triadas, séptimas, extensiones)
- **Análisis de progresión armónica** con grados romanos y funciones tonales
- **Detección de cadencias** clásicas y jazz
- **Identificación de modulaciones** por alteraciones y progresiones
- **Sugerencia de escalas** por acorde y contexto
- **Salida en múltiples formatos**: MusicXML, Markdown y JSON
- **Configuración flexible** para adaptar el comportamiento del análisis

## 🚀 Instalación Rápida

### Requisitos Previos

- Node.js 18+ 
- npm 9+

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/analisis-armonico-piano.git
cd analisis-armonico-piano

# Instalar dependencias
npm install

# Verificar instalación
npm test
```

### Uso Rápido

```bash
# Analizar un archivo MusicXML
npm run analyze -- --input examples/sample.musicxml

# Ejecutar tests
npm test

# Verificar calidad del código
npm run lint

# Formatear código
npm run format
```

## 🏗️ Arquitectura del Proyecto

```
analisis-armonico-piano/
├── src/                    # Código fuente principal
│   ├── core/              # Modelos y utilidades base
│   ├── parsing/           # Módulo de parsing MusicXML
│   ├── analysis/          # Módulos de análisis musical
│   │   ├── tonality/      # Detección de tonalidad
│   │   ├── chords/        # Detección de acordes
│   │   ├── harmony/       # Análisis armónico
│   │   ├── cadences/      # Detección de cadencias
│   │   ├── modulations/   # Detección de modulaciones
│   │   └── scales/        # Detección/sugerencia de escalas
│   └── output/            # Módulos de generación de outputs
├── tests/                 # Tests del proyecto
├── docs/                  # Documentación
├── examples/              # Archivos de ejemplo
│   ├── input/             # Archivos MusicXML de entrada
│   ├── output/            # Archivos de salida generados
│   └── templates/         # Plantillas para crear nuevos ejemplos
│       └── template.musicxml # Plantilla estándar con formato correcto
├── config/                # Configuración del analizador
└── scripts/               # Scripts de utilidad
```

## 🎵 Flujo de Trabajo

1. **Entrada**: Archivo MusicXML de ejercicio de piano (4 compases típicamente)
2. **Parsing**: Extracción de notas, armadura, compás y estructura
3. **Análisis**: Aplicación de algoritmos para detectar tonalidad, acordes, etc.
4. **Salida**: Generación de resultados en formatos MusicXML, Markdown y JSON

## 🛠️ Scripts Disponibles

- `npm start` - Ejecutar el analizador
- `npm run analyze` - Analizar un archivo MusicXML
- `npm test` - Ejecutar todos los tests
- `npm run test:watch` - Ejecutar tests en modo observación
- `npm run test:coverage` - Ejecutar tests con cobertura
- `npm run lint` - Verificar calidad del código
- `npm run lint:fix` - Corregir problemas de calidad automáticamente
- `npm run format` - Formatear código

## 📋 Tareas

Consulta [TASKS.md](docs/TASKS.md) para ver las tareas pendientes y en progreso.

## 📄 Licencia

Distribuido bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más información.

## 📞 Contacto

Proyecto mantenido por la comunidad de teoría musical y desarrollo de software.

---

_Documentación actualizada: 2026-01-31_