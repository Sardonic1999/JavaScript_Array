/*
Ex01
Write a JavaScript program to find the number of even 
digits in a an array of integers
*/
//nechta juft son borligini aniqlash

console.log("================= countEventNumbers");

const countEventNumbers = (arr) => arr.filter((num) => num % 2 === 0).length;

console.log(countEventNumbers([1, 2, 3, 4, 5, 6])); //3
console.log(countEventNumbers([2, 2, 2, 2, 2, 2])); //6
console.log(countEventNumbers([3, 5, 7, 9, 10, 100])); //2

/*
Ex02:
Write a JavaScript program to find the number of 
even values up to a given number
*/
// 2ga bolinganda ozagi nechi chiqadi
console.log("======================== createArrayOfNumbers");

const countEventNumbers2 = (arr) => arr.filter((num) => num % 2 === 0).length;

const createArrayOfNumbers = (num) => {
  const returnArray = [];
  for (let i = 1; i <= num; i += 1) {
    returnArray.push(i);
  }
  return returnArray;
};

console.log(countEventNumbers2(createArrayOfNumbers(6))); //3  6/2=3
console.log(countEventNumbers2(createArrayOfNumbers(9))); //4  9/2=4

/*
Ex3:
Write a JavaScript program to check whether a given array
of integers is sorted in ascending order.
*/
// o'sib borish tartibida joylashsa true yoki false

console.log("=============================== isAscending");
const isAscending = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i + 1] < arr[i]) return false;
  }
  return true;
};

console.log(isAscending([1, 2, 3, 4, 5, 6])); //true
console.log(isAscending([1, 2, 5, 4, 3, 6])); // false
console.log(isAscending([1, 2, 3, 4, 6, 6])); // true

/*
Ex4:
Write a JavaScript program to get the largest even number
from an array of integer.
*/
// eng katta juft qiymatni topish

console.log("============================== largestEvent");

const largestEvent = (arr) => Math.max(...arr.filter((num) => num % 2 === 0));

console.log(largestEvent([1, 2, 3, 4, 5, 6])); //6
console.log(largestEvent([1, 2, 33, 4, 5, 6])); //6
console.log(largestEvent([1, 2, 3, 44, 55, 6])); //44

/*
Ex5:
Write a JavaScript program to replace the 
first digit in a string  (should contains at least digit)
with $ character.
*/

console.log("====================== replaceFirstDigit");

const replaceFirstDigit = (str) => str.replace(/[0-9]/, "$");
// const replaceFirstDigit = (str) => str.replace(/\d/, "$");  // 2nd version

console.log(replaceFirstDigit("Abcd1Abcde"));
console.log(replaceFirstDigit("A123Abcde"));
console.log(replaceFirstDigit("A1cd1Abcd1"));
