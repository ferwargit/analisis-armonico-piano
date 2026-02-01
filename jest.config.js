module.exports = {
    // Entorno de ejecución
    testEnvironment: "node",

    // Patrones de archivos de test
    testMatch: ["**/tests/**/*.test.js", "**/__tests__/**/*.js"],

    // Ignorar directorios
    testPathIgnorePatterns: ["/node_modules/", "/n8n/"],

    // Cobertura de código
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: ["text", "lcov", "html"],

    // Umbrales mínimos de cobertura
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },

    // Directorios para cobertura
    collectCoverageFrom: ["src/**/*.js", "!src/index.js", "!src/**/index.js"],

    // Setup global antes de todos los tests
    setupFilesAfterEnv: ["./tests/helpers/setup.js"],

    // Verbose output
    verbose: true,

    // Timeout para tests
    testTimeout: 10000,
};