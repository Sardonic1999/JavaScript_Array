/*
Ex01:
Write a JavaScript program to create a new string from a 
given string taking the first 3 characters and the last 3 
characters of a string and adding them together. The string 
length must be 3 or more, if not, the orginal stiring is
returned.
*/
console.log("========================== Add two string");

const makeNewString = (str) =>
  str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

console.log(makeNewString("abc")); // abcabc
console.log(makeNewString("abcdef")); // abcdef
console.log(makeNewString("abc123abc143")); //abc143
console.log(makeNewString("ab")); //ab

/*
Ex02:
Write a JavaScript program to extract the first half of a 
string of even length.
*/
console.log("============================  FirsHalf");

const firstHalf = (str) => str.slice(0, str.length / 2);

console.log(firstHalf("temp")); //te
console.log(firstHalf("temple")); //tem
console.log(firstHalf("temples")); //tem

/*
Ex03:
Write a JavaScript program to concantenate two string 
except their first character.
*/

console.log("======================= Skip first letter ");

const concatenate = (str1, str2) => str1.slice(1) + str2.slice(1);

console.log(concatenate("abc", "def")); //bcdef
console.log(concatenate("Junior", "Developer")); //unioreveloper

/*
Ex04:
Given two values, write a JavaScript program 
to find out which one is nearest to 100
*/

console.log("================================ closetTo100");

const closetTo100 = (a, b) => (100 - a < 100 - b ? a : b);

console.log(closetTo100(99, 1)); //99
console.log(closetTo100(49, 51)); //51
console.log(closetTo100(50, 50)); //50

/*
Ex05:
Write a JavaScript program to check a given string contains
2 to 4 occurrences of a specific character.
*/

console.log("======================== contains2To4 ");

const countChars = (str, char) =>
  str.split("").filter((ch) => ch === char).length;
console.log(countChars("ooh!", "o")); // 2 o harfi nechta 2ta

const contains2To4 = (str, char) =>
  countChars(str, char) >= 2 && countChars(str, char) <= 4;

console.log(contains2To4("ooh!", "o")); // true
console.log(contains2To4("oh!", "o")); // false
console.log(contains2To4("oooh!", "o")); //true
console.log(contains2To4("ooooh!", "o")); //true
console.log(contains2To4("oooooh!", "o")); //false
