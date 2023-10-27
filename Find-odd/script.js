// Функция findOdd принимает массив целых чисел A в качестве входных данных.
function findOdd(A) {
  // Инициализируем переменную result с нулевым значением. В этой переменной будет храниться результат.
  let result = 0;

  // Начинаем перебирать элементы массива A.
  for (const item of A) {
    // Для каждого элемента массива выполняем операцию XOR с текущим значением result.
    result ^= item;
  }

  // Возвращаем значение result, которое будет содержать элемент, встречающийся нечетное количество раз.
  return result;
}


// // Define a function called 'findOdd' using an arrow function.
// const findOdd = (xs) => {
//   // Use the 'reduce' method to iterate through the elements of the array 'xs'.
//   // The XOR (^) operation is applied to each pair of elements to find the one that appears an odd number of times.
//   return xs.reduce((a, b) => a ^ b);
// };
console.log(findOdd([1,2,3,3,4,5,6,7,5,4,3,2,0]))
