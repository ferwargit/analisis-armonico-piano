# 🎹 Análisis Armónico Piano - Plan de Proyecto

## Información General

| Campo           | Valor                                 |
| --------------- | ------------------------------------- |
| **Nombre**      | analisis-armonico-piano               |
| **Versión**     | 0.1.0                                 |
| **Stack**       | Node.js + JavaScript + Jest           |
| **Integración** | n8n + Postman                         |
| **Input**       | .musicxml (MuseScore 4)               |
| **Outputs**     | .musicxml (4 variantes) + .md + .json |

---

## 🎯 Objetivos del Proyecto

### Objetivo Principal

Desarrollar una herramienta automatizada para análisis armónico de ejercicios de piano de 4 compases, capaz de:

1. **Detectar tonalidad** (mayor/menor/modal) con múltiples algoritmos
2. **Identificar acordes** con inversiones y tensiones
3. **Analizar progresión armónica** con funciones y grados
4. **Detectar cadencias** clásicas y jazz
5. **Identificar modulaciones** por alteraciones y progresiones
6. **Sugerir escalas** por acorde y contexto
7. **Generar informes** pedagógicos configurables

### Contextos de Análisis

- **Clásico**: Funciones armónicas tradicionales, cifrado romano
- **Jazz/Pop**: Cifrado americano, extensiones, tensiones avoid

---

## 📊 Requisitos Funcionales

### RF01 - Parsing MusicXML

- [ ] Leer archivos .musicxml de MuseScore 4
- [ ] Extraer armadura de clave
- [ ] Extraer compás (time signature)
- [ ] Extraer notas con alturas y duraciones
- [ ] Unificar/separar manos de piano (configurable)
- [ ] Manejar notas alteradas (accidentals)

### RF02 - Detección de Tonalidad

- [ ] Algoritmo Krumhansl-Schmuckler
- [ ] Análisis de primera/última nota del bajo
- [ ] Frecuencia de aparición de notas
- [ ] Análisis de cadencia final
- [ ] Sistema de consenso entre algoritmos
- [ ] Porcentaje de confianza

### RF03 - Detección de Modalidad

- [ ] Modos de escala mayor (jónico, dórico, frigio, lidio, mixolidio, eólico, locrio)
- [ ] Modos de menor melódica (fase avanzada)
- [ ] Modos de menor armónica (fase avanzada)

### RF04 - Detección de Acordes

- [ ] Triadas (mayor, menor, disminuido, aumentado)
- [ ] Séptimas (maj7, 7, m7, m7b5, dim7)
- [ ] Extensiones (9, 11, 13, sus2, sus4, add)
- [ ] Inversiones con notación (C/E) y clasificación (1ra, 2da, 3ra)
- [ ] Granularidad configurable (pulso/subdivisión)

### RF05 - Análisis de Progresión

- [ ] Grados con números romanos (I, ii, iii, IV, V, vi, vii°)
- [ ] Sistema Nashville (1, 2m, 3m, 4, 5, 6m, 7dim)
- [ ] Funciones armónicas (T, S, D, Predominante)
- [ ] Dominantes secundarias (V/V, V/ii, etc.)
- [ ] Sustitutos tritonales
- [ ] Acordes de préstamo modal
- [ ] Acordes de paso y embellecimiento

### RF06 - Detección de Cadencias

#### Clásicas

- [ ] Auténtica Perfecta (V → I)
- [ ] Auténtica Imperfecta
- [ ] Plagal (IV → I)
- [ ] Semicadencia (→ V)
- [ ] Rota/Evitada (V → vi)
- [ ] Frigia (iv6 → V)

#### Jazz/Pop

- [ ] ii-V-I
- [ ] Backdoor (bVII → I)
- [ ] Cadencias modales

### RF07 - Detección de Modulaciones

- [ ] Por alteraciones características
- [ ] Por progresiones típicas (V/V → V → I)
- [ ] Identificar tonalidad origen y destino
- [ ] Identificar método de modulación

### RF08 - Detección de Escalas

- [ ] Escalas mayores/menores (natural, armónica, melódica)
- [ ] 7 modos de mayor
- [ ] Modos de menor melódica
- [ ] Escalas simétricas (disminuida, tono completo)
- [ ] Escalas jazz (bebop, blues)
- [ ] Pentatónicas
- [ ] Sugerencia por acorde con ranking

### RF09 - Clasificación de Notas

- [ ] Notas del acorde (fundamental, 3ra, 5ta, 7ma)
- [ ] Tensiones (9, 11, 13 y alteraciones)
- [ ] Tensiones disponibles vs avoid
- [ ] Notas cromáticas (paso, bordadura, apoyatura, escapada)
- [ ] Sugerencia de función armónica para alteraciones

### RF10 - Output MusicXML

- [ ] Variante 1: Solo cifrado americano
- [ ] Variante 2: Harmony MusicXML (símbolos)
- [ ] Variante 3: Cifrado + Grados romanos
- [ ] Variante 4: Solo números romanos
- [ ] Posición vertical configurable

### RF11 - Output Markdown

- [ ] 9 secciones del informe
- [ ] Nivel de verbosidad configurable (conciso/intermedio/detallado)
- [ ] Análisis dual (clásico + jazz)
- [ ] Formato pedagógico

### RF12 - Output JSON

- [ ] Estructura completa del análisis
- [ ] Metadatos del archivo
- [ ] Datos exportables

---

## 🏗️ Arquitectura de Fases

### FASE 1 - MVP (Semanas 1-2)

```
Objetivo: Análisis básico funcional
├── Parsing MusicXML básico
├── Unificar manos de piano
├── Detectar tonalidad (Krumhansl-Schmuckler)
├── Detectar acordes (triadas + séptimas básicas)
├── Inversiones básicas (notación)
├── Grados romanos simples
├── Output JSON
└── Tests unitarios básicos
```

### FASE 2 - Core Features (Semanas 3-4)

```
Objetivo: Funcionalidad completa básica
├── Múltiples algoritmos de tonalidad + consenso
├── Funciones armónicas (T, S, D)
├── Cadencias clásicas básicas
├── Output .md básico
├── Output .musicxml (variante 1: cifrado)
├── Tests de integración
└── Configuración JSON
```

### FASE 3 - Avanzado (Semanas 5-7)

```
Objetivo: Análisis profesional completo
├── Todos los tipos de acordes
├── Extensiones y tensiones completas
├── Tensiones avoid
├── Modos y escalas completas
├── Cadencias jazz
├── Modulaciones
├── Notas cromáticas clasificadas
├── Informe pedagógico completo
├── 4 variantes de MusicXML
├── Separación de manos configurable
└── Tests exhaustivos
```

### FASE 4 - n8n Integration (Semana 8)

```
Objetivo: Automatización completa
├── Adaptar código para nodos Code de n8n
├── Workflow con Postman
├── Endpoints configurables
├── Documentación de integración
└── Tests end-to-end
```

---

## 📐 Decisiones Técnicas

| Aspecto      | Decisión        | Justificación                 |
| ------------ | --------------- | ----------------------------- |
| Runtime      | Node.js         | Requerido para n8n            |
| Lenguaje     | JavaScript      | Compatibilidad n8n Code nodes |
| XML Parser   | xml2js          | Popular, buena documentación  |
| Testing      | Jest            | Todo incluido, fácil de usar  |
| Config       | JSON            | Simple, editable, portable    |
| Arquitectura | Modular híbrida | Fácil testing y escalabilidad |

---

## 📅 Cronograma Estimado

| Fase      | Duración      | Entregables                     |
| --------- | ------------- | ------------------------------- |
| Fase 1    | 2 semanas     | MVP funcional con JSON output   |
| Fase 2    | 2 semanas     | Core con .md y .musicxml básico |
| Fase 3    | 3 semanas     | Sistema completo avanzado       |
| Fase 4    | 1 semana      | Integración n8n + Postman       |
| **Total** | **8 semanas** | **Sistema completo**            |

---

## 🔄 Control de Versiones

| Versión | Fase   | Descripción           |
| ------- | ------ | --------------------- |
| 0.1.0   | Fase 1 | MVP - Análisis básico |
| 0.2.0   | Fase 2 | Core features         |
| 0.3.0   | Fase 3 | Análisis avanzado     |
| 1.0.0   | Fase 4 | Release con n8n       |

---

## 📝 Notas y Consideraciones

1. **Progresividad**: Arquitectura preparada para escalar desde el inicio
2. **Híbrido**: Siempre analizar desde contexto clásico Y jazz
3. **Configurabilidad**: Máxima flexibilidad para el usuario
4. **Testing**: TDD cuando sea posible, cobertura mínima 80%
5. **Documentación**: Código autodocumentado + JSDoc

---

_Última actualización: 2026-02-01_
_Estado: En planificación_
