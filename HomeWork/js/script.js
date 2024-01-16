// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.
let value = null;

if (value >= 0) {
  console.log(true)
} else {
  console.log(false)
}

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true
let test = "test";

if (test === "test") {
  console.log(true)
} else {
  console.log(false)
}
// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

let exercise = 1;

if ( exercise > 10 ) {
  console.log(exercise - 5)
} else if ( exercise < 10 ) {
  console.log(exercise + 5)
} else {
  console.log("Do not have solution")
}

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу
// const valuePrompt = prompt("Введіть число від 1 до 12");

switch (valuePrompt) {
  case "1":
    console.log("Січень");
    break;
  case "2":
    console.log("Лютий");
    break;
  case "3":
    console.log("Березень");
    break;
  case "4":
    console.log("Квітень");
    break;
  case "5":
    console.log("Травень");
    break;
  case "6":
    console.log("Червень");
    break;
  case "7":
    console.log("Липень");
    break;
  case "8":
    console.log("Серпень");
    break;
  case "9":
    console.log("Вересень");
    break;
  case "10":
    console.log("Жовтень");
    break;
  case "11":
    console.log("Листопад");
    break;
  case "12":
    console.log("Грудень");
    break;
  default:
    console.log("Введено неправильне число");
}

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел
const inputNumber = prompt("Введіть тризначне число:");
const number = parseInt(inputNumber);

if (!isNaN(number) && inputNumber.length === 3) {
  const digit1 = parseInt(inputNumber[0]);
  const digit2 = parseInt(inputNumber[1]);
  const digit3 = parseInt(inputNumber[2]);

  const sum = digit1 + digit2 + digit3;
  console.log(`Сума цифр тризначного числа ${inputNumber} дорівнює ${sum}`);
} else {
  console.log("Введено неправильне тризначне число.");
}
