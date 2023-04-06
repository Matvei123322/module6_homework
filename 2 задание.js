/*Задание 2.
Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. 
Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.*/

let num = +prompt("Введите число меньше 1000");
function checkNum() {
  if (num > 1000){
    console.log('Данные не верны');
    return;
  } 
  if (num === 0 || num === 1) {
    console.log(`${num} не является натуральным числом`);
    return;
  }
  
  for (let i=2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      console.log(`${num} не является натуральным числом`);
      return;
    }
  }
  
    console.log(`${num} является натуральным числом`);
}

checkNum()