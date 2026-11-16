// Домашка 1: функции для четырёх арифметических действий

// Сложение двух чисел
function add(a, b) {
  return a + b;
}

// Вычитание: из первого числа вычитаем второе
function subtract(a, b) {
  return a - b;
}

// Умножение
function multiply(a, b) {
  return a * b;
}

// Деление. На ноль делить нельзя, поэтому сначала проверяем делитель
function divide(a, b) {
  if (b === 0) {
    return "Ошибка: на ноль делить нельзя";
  }
  return a / b;
}

console.log("12 + 8 =", add(12, 8));
console.log("50 - 17 =", subtract(50, 17));
console.log("7 * 6 =", multiply(7, 6));
console.log("81 / 9 =", divide(81, 9));
console.log("5 / 0 =", divide(5, 0));
