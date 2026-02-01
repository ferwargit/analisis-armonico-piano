// src/core/utils/mathUtils.js

function gcd(a, b) {
  // Máximo común divisor
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  // Mínimo común múltiplo
  return (a * b) / gcd(a, b);
}

function mod(n, m) {
  // Operación módulo que maneja números negativos
  return ((n % m) + m) % m;
}

module.exports = {
  gcd,
  lcm,
  mod
};