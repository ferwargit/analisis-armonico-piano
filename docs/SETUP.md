# 🔧 Guía de Setup - Análisis Armónico Piano

## Prerrequisitos

### Software Requerido

| Software | Versión Mínima | Propósito |
|----------|----------------|-----------|
| Node.js | 18.x LTS | Runtime JavaScript |
| npm | 9.x | Gestor de paquetes |
| Git | 2.x | Control de versiones |
| VSCode | Latest | Editor (recomendado) |
| MuseScore 4 | 4.x | Crear/editar MusicXML |

### Verificar Instalación

```bash
# Verificar Node.js
node --version
# Esperado: v18.x.x o superior

# Verificar npm
npm --version
# Esperado: 9.x.x o superior

# Verificar Git
git --version
```

## Instalación Paso a Paso

### 1. Clonar/Crear Repositorio

#### Opción A: Clonar existente

```bash
git clone <url-del-repositorio>
cd analisis-armonico-piano
```

#### Opción B: Crear desde cero (si se va a iniciar un nuevo repositorio)

```bash
mkdir analisis-armonico-piano
cd analisis-armonico-piano
git init
```

### 2. Instalar Dependencias

Ya que el archivo `package.json` ya está configurado en el proyecto, simplemente ejecuta:

```bash
npm install
```

Esto instalará todas las dependencias necesarias tanto de producción como de desarrollo especificadas en el `package.json`.

### 3. Verificar la Instalación

```bash
# Verificar que las dependencias se instalaron correctamente
npm test

# Verificar que el linter funciona
npm run lint

# Verificar que el formateador funciona
npm run format
```

## Estructura de Carpetas

La estructura de carpetas ya ha sido creada como parte del setup inicial del proyecto. Puedes verificarla con:

```bash
tree -d
```

## Configuraciones Importantes

### Jest
La configuración de Jest ya está en `jest.config.js` y se encuentra lista para usar.

### ESLint
La configuración de ESLint ya está en `.eslintrc.json` y se encuentra lista para usar.

### Prettier
La configuración de Prettier ya está en `.prettierrc` y se encuentra lista para usar.

### .gitignore
El archivo `.gitignore` ya está configurado para excluir archivos innecesarios del control de versiones.

## Comandos Útiles

```bash
# Desarrollo
npm test # Ejecutar todos los tests
npm run test:watch # Tests en modo watch
npm run test:coverage # Tests con cobertura
npm run lint # Verificar código
npm run lint:fix # Corregir código automáticamente
npm run format # Formatear código

# Análisis
npm run analyze # Ejecutar análisis de MusicXML

# Otros
npm start # Ejecutar el programa principal
```

## Próximos Pasos

- ✅ Verificar que el setup funciona (npm test)
- ⬜ Utilizar plantilla en `examples/templates/template.musicxml` como base para crear archivos MusicXML de prueba
- ⬜ Implementar modelo Note (FASE 1)
- ⬜ Comenzar con parsing básico

---

_Última actualización: 2026-02-01_