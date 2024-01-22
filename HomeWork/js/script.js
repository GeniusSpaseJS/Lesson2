// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// let value = 1;
// if (value > 0) {
//     console.log(true);
// } else if (value < 0) {
//     console.log(false);
// } else {
//     console.log("value is 0");
// }
// value = 0;
// if (value > 0) {
//     console.log(true);
// } else if (value < 0) {
//     console.log(false);
// }   else {
//     console.log("value is 0");
// }
//  value = -3;
// if (value > 0) {
//     console.log(true);
// } else if (value < 0) {
//     console.log(false);
// } else {
//     console.log("value is 0");
// }

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// let value = 'test';
// if (value === 'test') {
//     console.log(true);
// } else {
//     console.log(false);
// }
// value = "qwerty";
// if (value === 'test') {
//     console.log(true);
// } else {
//     console.log(false);
// }
// value = true;
// if (value === 'test') {
//     console.log(true);
// } else {
//     console.log(false);
// }

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// let value = 1;
// if (value > 10) {
//     value -= 5;
// } else if(value < 10) {
//     value += 5;
// }
// console.log(value);
// value = 10;
// if (value > 10) {
//     value -= 5;
// } else if(value < 10) {
//     value += 5;
// }
// console.log(value);
// value = 13;
// if (value > 10) {
//     value -= 5;
// } else if(value < 10) {
//     value += 5;
// }
// console.log(value);

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const monthNum = prompt("Enter number of month");
// let month;

// switch (parseInt(monthNum)) {
//     case 1:
//         month = 'January';
//         break;
//     case 2:
//         month = 'February';
//         break;
//     case 3:
//         month = 'March';
//         break;
//     case 4:
//         month = 'April';
//         break;
//     case 5:
//         month = 'May';
//         break;
//     case 6:
//         month = 'June';
//         break;
//     case 7:
//         month = 'July';
//         break;
//     case 8:
//         month = 'August';
//         break;
//     case 9:
//         month = 'September';
//         break;
//     case 10:
//         month = 'October';
//         break;
//     case 11:
//         month = 'November';
//         break;
//     case 12:
//         month = 'December';
//         break;
//     default:
//         alert(`Month with ${monthNum} does not exist!`)
// }
// if (month){
//     alert(`Number ${monthNum} is for ${month} Month`);
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// const EnteredNum = prompt("Enter three-digit number:");
// const num = parseInt(EnteredNum);

// if (num >= 100 && num <= 999) {
//     const firstNum = Math.floor(num / 100);
//     const secondNum = Math.floor((num % 100) / 10);
//     const thirdNum = num % 10;
//     const sum = firstNum + secondNum + thirdNum;
//     alert (`Sum of enterd number ${num} equal ${sum}.`);
// } else {
//     alert(`Please enter three-digit number from 100 to 999!`);
// }