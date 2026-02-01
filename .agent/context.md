# Contexto del Proyecto: Análisis Armónico Piano

## Descripción

Sistema automatizado para análisis armónico de ejercicios de piano de 4 compases, utilizando archivos MusicXML como entrada y generando informes pedagógicos y partituras anotadas.

---

## Stack Tecnológico

- **Runtime**: Node.js 18+
- **Lenguaje**: JavaScript (ES2021+)
- **XML Parser**: xml2js
- **Testing**: Jest
- **Linting**: ESLint + Prettier
- **Integración**: n8n (nodos Code) + Postman

---

## Dominio Musical

Este proyecto requiere conocimiento de:

- Teoría musical clásica (armonía funcional, cadencias, modulaciones)
- Teoría jazz (cifrado americano, extensiones, tensiones avoid)
- Escalas y modos (diatónicos, simétricos, jazz)
- Análisis de progresiones armónicas
- Formato MusicXML

---

## Arquitectura

- **Modular**: Separación por dominio (parsing, analysis, output)
- **Testeable**: Diseño que facilita testing unitario
- **Configurable**: Comportamiento ajustable via JSON

---

## Convenciones de Código

- Archivos: kebab-case.js
- Clases: PascalCase
- Funciones: camelCase
- Constantes: UPPER_SNAKE_CASE
- Tests: *.test.js junto a cada módulo

---

## Objetivo Principal

Permitir a estudiantes de piano y composición analizar automáticamente ejercicios armónicos, obteniendo:

1. Detección de tonalidad/modalidad
2. Identificación de acordes con inversiones
3. Análisis de progresión con grados y funciones
4. Detección de cadencias
5. Identificación de modulaciones
6. Sugerencias de escalas
7. Informe pedagógico detallado