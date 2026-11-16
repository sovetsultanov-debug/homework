// Домашка 2: переменные и условия if / else
// Считаем итоговый балл ученика: средняя оценка + бонусы за домашку и посещаемость

// Оценки по трём предметам (из 100)
const physics = 78;
const history = 91;
const informatics = 86;

// Средний балл
const average = (physics + history + informatics) / 3;
console.log("Средний балл:", average.toFixed(1));

// Сдана ли домашка и процент посещаемости
const homeworkDone = true;
const attendance = 82;

// Начинаем с среднего балла и добавляем бонусы
let total = average;

// Бонус за домашку: +10, если сдана, иначе -10
if (homeworkDone) {
  total += 10;
  console.log("Домашка сдана: +10");
} else {
  total -= 10;
  console.log("Домашка не сдана: -10");
}

// Бонус за посещаемость
if (attendance > 90) {
  total += 20;
  console.log("Посещаемость больше 90%: +20");
} else if (attendance > 70) {
  total += 15;
  console.log("Посещаемость больше 70%: +15");
} else if (attendance > 60) {
  total += 5;
  console.log("Посещаемость больше 60%: +5");
} else {
  total -= 10;
  console.log("Посещаемость 60% и ниже: -10");
}

console.log("Итоговый балл:", total.toFixed(1));
