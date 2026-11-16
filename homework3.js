// Домашка 3: массив объектов и цикл for...of
// Считаем, сколько букв в каждом названии города, сколько всего, и какое название самое длинное

const cities = [
  { id: 1, name: "Бишкек" },
  { id: 2, name: "Ош" },
  { id: 3, name: "Каракол" },
  { id: 4, name: "Нарын" },
  { id: 5, name: "Талас" },
  { id: 6, name: "Токмок" },
  { id: 7, name: "Балыкчы" },
  { id: 8, name: "Джалал-Абад" },
  { id: 9, name: "Баткен" },
  { id: 10, name: "Чолпон-Ата" },
];

let totalLetters = 0; // сумма букв во всех названиях
let longest = []; // самые длинные названия (их может быть несколько)
let maxLength = 0;

for (const city of cities) {
  // Дефис не буква, поэтому убираем его перед подсчётом
  const letters = city.name.replace("-", "").length;
  totalLetters += letters;
  console.log(`${city.id}. ${city.name}: ${letters} букв`);

  if (letters > maxLength) {
    maxLength = letters; // нашли новое самое длинное
    longest = [city.name];
  } else if (letters === maxLength) {
    longest.push(city.name); // такое же длинное, добавляем
  }
}

console.log(`Всего букв: ${totalLetters}`);
console.log(`Самое длинное (${maxLength} букв): ${longest.join(", ")}`);
