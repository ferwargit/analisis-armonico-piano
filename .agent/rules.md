# Reglas para Agentes IA

## Reglas de Código

### SIEMPRE:

1. Usar JavaScript ES2021+ (no TypeScript en esta fase)
2. Escribir tests para cada función/clase nueva
3. Documentar con JSDoc
4. Manejar errores con try/catch apropiados
5. Usar nombres descriptivos en inglés para código
6. Comentarios pueden ser en español si ayudan a la comprensión
7. Seguir estructura de carpetas establecida
8. Exportar módulos correctamente (module.exports / require)

### NUNCA:

1. Usar dependencias externas sin consultar primero
2. Modificar archivos de configuración sin explicar
3. Usar console.log en código de producción (solo console.warn/error)
4. Crear archivos fuera de la estructura establecida
5. Escribir código sin tests
6. Usar var (siempre const o let)
7. Ignorar errores silenciosamente

### PREFERENCIAS:

1. Funciones puras cuando sea posible
2. Composición sobre herencia
3. Destructuring para parámetros
4. Template literals para strings complejos
5. Array methods (map, filter, reduce) sobre loops
6. Async/await sobre callbacks/promises

---

## Reglas de Commits

- Formato: `tipo(scope): descripción`
- Tipos: feat, fix, test, docs, refactor, chore
- Ejemplo: `feat(chords): implement seventh chord detection`

---

## Reglas de Testing

- Mínimo 80% cobertura
- Describe/it con descripciones claras en español
- Un assert por test cuando sea posible
- Tests deben ser independientes
- Usar fixtures en tests/fixtures/