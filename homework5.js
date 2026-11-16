// Домашка 5: оценки учеников
// Для каждого ученика ставим букву A-F, считаем средний процент, находим лучшего и худшего

const results = [
  { name: "Айбек", percent: 88 },
  { name: "Бегимай", percent: 95 },
  { name: "Тимур", percent: 57 },
  { name: "Канышай", percent: 73 },
  { name: "Эрлан", percent: 64 },
  { name: "Айдана", percent: 81 },
  { name: "Нурсултан", percent: 99 },
  { name: "Жанара", percent: 69 },
  { name: "Данияр", percent: 76 },
  { name: "Сезим", percent: 90 },
];

// Отдельная функция переводит процент в буквенную оценку
function getGrade(percent) {
  if (percent >= 90) return "A";
  if (percent >= 80) return "B";
  if (percent >= 70) return "C";
  if (percent >= 60) return "D";
  return "F";
}

let sum = 0;
let best = results[0];
let worst = results[0];

for (const student of results) {
  sum += student.percent;
  console.log(`${student.name}: ${student.percent}% -> ${getGrade(student.percent)}`);

  if (student.percent > best.percent) best = student;
  if (student.percent < worst.percent) worst = student;
}

const average = sum / results.length;

console.log("-----");
console.log(`Средний процент: ${average.toFixed(1)}% (${getGrade(average)})`);
console.log(`Лучший результат: ${best.name}, ${best.percent}%`);
console.log(`Худший результат: ${worst.name}, ${worst.percent}%`);
