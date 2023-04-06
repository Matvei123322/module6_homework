/* Задание 5.
Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. 
Иначе говоря, умножает x на себя n раз и возвращает результат.
Используйте Arrow Function синтаксис.
Протестируйте функцию на любых значениях и выведите результат в консоль.*/

const multuply = (x, n) => {
  let result;
  for (i = 0; i < n; i++) {
    result = x * x;
  }
  return result;
}

console.log (multuply (2, 2));
console.log (multuply (2, 3));
console.log (multuply (5, 2));
console.log (multuply (10, 2));
console.log (multuply (1, 10));