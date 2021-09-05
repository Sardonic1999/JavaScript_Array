// Ex1:
// Write a JavaScript program to check two numbers and
// return true if one of the number is 100 or if the
// sum of the two number is 100

console.log("============================== Tengmi yoki yoq");

const isEqualTo100 = (a, b) => a === 100 || b === 100 || a + b === 100;

console.log(isEqualTo100(100, 0)); //true
console.log(isEqualTo100(0, 100)); // true

console.log(isEqualTo100(10, 0)); // false
console.log(isEqualTo100(0, 10)); // false

console.log(isEqualTo100(20, 80)); // true
console.log(isEqualTo100(50, 50)); // true

console.log("==============================  Nuqtadan keyin slice");

// Ex2:
// Write a JavaScript program to
// get the extension of a filename

const getFileExtension = (str) => str.slice(str.lastIndexOf("."));

console.log(getFileExtension("index.html")); // .html
console.log(getFileExtension("webpack.config.js")); // .js

console.log("===================================  Alphabet +1");

// Ex3:
// Write a JavaScript program to replace character in a given
// string with the character following it in the alphabet.

// alphabetni olib undan keyingi harfni chiqarib beradi.

const moveCharsForward = (str) =>
  str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");

console.log(moveCharsForward("bad")); // cbe

console.log("=================================  Date Time");

/*
Ex4:
Write a JavaScript program to get the current data. 
Expected Output:
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

const formatDate = (date = new Date()) => {
  const days = date.getDate(); // days
  const months = date.getMonth() + 1; // months
  const years = date.getFullYear(); // years
  return `${days}/${months}/${years}`;
};

console.log(formatDate()); // 5/9/2021

console.log("============================  Turneri");

/*
Ex5:
Write a JavaScript program to create a new string adding 
"New!" in front of a given string. 
If the given string begins with "New!" already 
then return the original string.
*/

// Agar New topmasa New1 chiqsin topsa ozi chiqsin

const addNew = (str) => (str.lastIndexOf("New") === 0 ? str : `New 1 ${str}`);

console.log(addNew("New 2 Offers")); // New 2 Offers
