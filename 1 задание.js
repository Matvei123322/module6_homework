/* Задание 1.
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.*/

const arr = [1, 2, "3", null, 0, "five", 6, 0];
function countEvenOdd(arr) {
  let evenCount = 0;
  let oddCount = 0;
  let zeroCount = 0;

  arr.forEach((element) => {
    if (typeof element === 'number' && !isNaN(element)) {
      if (element === 0) {
        zeroCount++;
      } else if (element % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  });

  console.log(`Количество чётных элементов: ${evenCount}`);
  console.log(`Количество нечётных элементов: ${oddCount}`);
  console.log(`Количество нулевых элементов: ${zeroCount}`);
}

countEvenOdd(arr);