/*
Ex1:
Given a year, report if it is a leap year.
berilgan yillarni 4 ga bolganda qoldiqsiz bolishi kerak
*/
console.log("==================== isLeapYear");
const isLeapYear = (year) => year % 4 === 0;

console.log(isLeapYear(2014)); //false
console.log(isLeapYear(2015)); //false
console.log(isLeapYear(2016)); //true
console.log(isLeapYear(2017)); //false
console.log(isLeapYear(2018)); //false
console.log(isLeapYear(2019)); //false
console.log(isLeapYear(2020)); //true
console.log(isLeapYear(2021)); //false

/*
Ex2:
Write a JavaScript program to compare two objects to 
detirmine if the first one contains the same properties
as the second one (which may also have additional properties) 
*/

console.log("==================== objetsEqual");

const objA = { a: 1, b: 2, c: 1 };
const objB = { a: 1, b: 1, c: 1 };
const objC = { a: 1, b: 1, d: 1 };

const objetsEqual = (a, b) => Object.keys(a).every((key) => b[key]);

console.log(objetsEqual(objA, objB)); //true
console.log(objetsEqual(objA, objC)); //false
console.log(objetsEqual(objB, objC)); //false

/*
Ex3:
Write a JavaScript program to convert a comma-separated 
values (CSV) string to a 2D array. A  new line  indicates 
a new row in the array.
Example:
abc, def, ghi
*/

console.log("==================== parseCSV");

const parseCSV = (csvString) =>
  csvString.split("\n").map((row) => row.split(","));

const str = `abs,def,ghi
jkl,mno,pqr
stu,vwx,yza`;

console.log(parseCSV(str));
// ["abs", "def", "ghi"],
//   ["jkl", "mno", "pqr"],
//   ["stu", "vwx", "yza"],
/*
Ex4:
Write a JavaScript program to generate a random hexadecimal 
color code.
*/

console.log("======================= getRandomHexColor");

const getRandomHexNumber = () => Math.floor(Math.random() * 16).toString(16);

const getRandomHexColor = () =>
  "#" + Array.from({ length: 6 }).map(getRandomHexNumber).join("");

console.log(getRandomHexColor());
console.log(getRandomHexColor());
console.log(getRandomHexColor());
console.log(getRandomHexColor());
console.log(getRandomHexColor());

/*
Ex5:
Write a JavaScript function that returns true if the 
provided predicate function returns true for all
elements in a collection, false otherwise.
[1, 2, 3, 4, 5], (x) => x > 3

*/

console.log("======================== isEveryElem");

const isEveryElem = (arr, fn) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (!fn(arr[i])) {
      return false;
    }
  }
  return true;
};

console.log(isEveryElem([1, 2, 3, 4, 5], (x) => x > 0)); //true
console.log(isEveryElem([1, 2, 3, 4, 5], (x) => x > 3)); //false
