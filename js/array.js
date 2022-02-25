`use strict`;
// 0 Создать числовой массив и проинициализировать его (*случайными числами).

// const valueNumbers = [3, 5, 34, 55, 68, 49];

// Не использовать методы перебора массивов (forEach, filter, map, some, every)

// 1 Удалить последний элемент из массива, добавить по элементу в начало и конец.
// *********************************
// const valueNumbers = [3, 5, 34, 55, 68, 49];

// function removeElement(arr) {
//   if (arr.length > 0) arr.length--;
//   return arr;
// }
// const newValueNumbers = removeElement(valueNumbers);
// console.log(newValueNumbers);

// *********************************

// function addElement(arr) {
//   const lenght = arr.length;
//   arr[lenght] = Number(prompt("add value"));
//   return arr;
// }
// addElement(valueNumbers);
// addElement(valueNumbers);
// console.log(valueNumbers);

// *******************************

// function addStartElement(arr) {
//   const length = arr.length;
//   for (let i = length; i > 0; i--) {
//     arr[i] = arr[i - 1];
//   }
//   arr[0] = Number(prompt("enter"));
//   return arr;
// }
// addStartElement(valueNumbers);
// console.log(valueNumbers);

//******************************

// 2 Вывести размер массива.

// const valueNumbers = [3, 5, 34, 55, 68, 49];
// console.log("размер масива равен = ", valueNumbers.length);

// 3 Вывести элементы с четными индексами.

// const array = [3, 5, 34, 55, 68, 49];

// function getEvenIndexElements(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (i % 2 === 0) {
//       console.log(arr[i]);
//     }
//   }
// }
// getEvenIndexElements(array);

// 4 Вывести только четные элементы (четные числа делятся на 2 без остатка).

// const arr = [22, 3, 5, 34, 55, 68, 49];

// function getEvenElements(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       console.log(arr[i]);
//     }
//   }
// }

// getEvenElements(arr);

// 5 Вывести индексы нулевых элементов (элемент равен нулю).

// const array = [3, 5, 34, 0, 55, 68, 49, 0]; //3,7

// function getZeroElement(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       console.log("el = 0  => i =", i);
//     }
//   }
// }
// getZeroElement(array);

// 6 Подсчитать количество нулевых элементов.

// const array = [3, 5, 34, 0, 0, 55, 68, 49, 0];

// function getSumZeroElements(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       sum++;
//     }
//   }
//   console.log(sum);
// }

// getSumZeroElements(array);

// 7 Получить новый массив из заданного, который будет содержать только ненулевые числа (-1, 5, 0, 9, -10 => -1, 5, 9, -10).

// const array = [-1, 5, 0, 9, -10]; //[-1,5,9,-10]

// const filtered = array.filter(positiveNambers);

// console.log(filtered);

// function positiveNambers(i) {
//   return !i == 0;
// }

// 8 Получить новый массив их заданного, который будет содержать все элементы исходного, возведенные в квадрат (-1, 5, 0, 9, -10 => 1, 25, 0, 81, 100).

// const array = [-1, 5, 0, 9, -10];

// const result = array.map(getSquare);

// function getSquare(i) {
//   return i ** 2;
// }

// console.log(result);

// 9 Проверить, являются ли все элементы массива четными числами (* или простыми числами).

// const array = [-1, 5, 0, 9, -10];
// const array = [4, 6, 8];

// function isEven(i) {
//   return i % 2 === 0;
// }
// console.log(array.every(isEven));

// 10 Проверить, есть ли в массиве хоть один отрицательный элемент.

// const array = [-1, 5, 0, 9, -10];
// const array = [1, 5, 0, 9, 10];

// function isNegativeItem(i) {
//   return i < 0;
// }

// console.log(array.some(isNegativeItem));

// 11 Вывести элементы массива, возведенные в куб.
// const array = [-1, 5, 0, 9, -10];

// const result = array.map(getЕakeСubeItem);

// function getЕakeСubeItem(i) {
//   return i ** 3;
// }

// result.forEach(function (i) {
//   console.log(i);
// });
