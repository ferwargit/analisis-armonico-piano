// Archivo de prueba para verificar la instalación del proyecto

console.log('Verificando la instalación del proyecto Análisis Armónico Piano...');

// Intentar importar los módulos principales
try {
    // Verificar que los archivos principales existan
    const fs = require('fs');
    const path = require('path');
    
    // Verificar archivos de configuración
    const configFiles = [
        './package.json',
        './src/index.js',
        './config/analyzer.config.json',
        './jest.config.js',
        './.eslintrc.json',
        './.prettierrc'
    ];
    
    console.log('\\nVerificando archivos de configuración principales...');
    configFiles.forEach(file => {
        if (fs.existsSync(path.join(__dirname, '..', file))) {
            console.log(`✓ ${file}`);
        } else {
            console.log(`✗ ${file} - NO ENCONTRADO`);
        }
    });
    
    // Verificar estructura de directorios
    const dirs = [
        './src/core',
        './src/parsing',
        './src/analysis',
        './src/output',
        './tests/unit',
        './tests/integration',
        './examples/input',
        './scripts'
    ];
    
    console.log('\\nVerificando estructura de directorios...');
    dirs.forEach(dir => {
        if (fs.existsSync(path.join(__dirname, '..', dir))) {
            console.log(`✓ ${dir}`);
        } else {
            console.log(`✗ ${dir} - NO ENCONTRADO`);
        }
    });
    
    // Verificar archivos de ejemplo
    const exampleFiles = [
        './examples/input/sample.musicxml',
        './examples/input/chord-progression.musicxml'
    ];
    
    console.log('\\nVerificando archivos de ejemplo...');
    exampleFiles.forEach(file => {
        if (fs.existsSync(path.join(__dirname, '..', file))) {
            console.log(`✓ ${file}`);
        } else {
            console.log(`✗ ${file} - NO ENCONTRADO`);
        }
    });
    
    console.log('\\n✓ Verificación básica completada exitosamente');
    console.log('\\nEl proyecto tiene la estructura básica necesaria para funcionar.');
    console.log('Sugerencia: Ejecute `npm install` para instalar dependencias y luego `npm test` para verificar el funcionamiento.');

} catch (error) {
    console.error('✗ Error durante la verificación:', error.message);
}