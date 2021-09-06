/*
Ex01:
Write a JavaScript function that returns a 
passed string with letters in alphabetical
order.
*/

console.log("===================== alphabeticalOrder");

const alphabeticalOrder = (str) =>
  str
    .split("")
    .sort((a, b) => (a > b ? 1 : -1))
    .join("");

console.log(alphabeticalOrder("wertyuioiuuaaabbsj")); //aaabbeiijorstuuuwy

/*
Ex02:
Write a JavaScript function that accepts a string as 
a parameter and counts the number of vowels within
the string.
*/

console.log("===================== countLetters");

const countLetters = (str, letters = ["a", "e", "i", "o", "u"]) =>
  str.split("").filter((s) => letters.indexOf(s) > -1).length;

console.log(countLetters("abcde")); //2
console.log(countLetters("abcde", ["c"])); //1

/*
Ex03:
Write a JavaScript function to convert an amout to coins. .
*/

console.log("======================= countCoins");

const countCoins = (money, coins = [25, 10, 5, 2, 1]) => {
  const totalCoins = [];
  for (let i = 0; i < coins.length; i += 1) {
    const thisCoinNum = Math.floor(money / coins[i]);
    for (let y = 0; y < thisCoinNum; y += 1) {
      totalCoins.push(coins[i]);
    }
    money -= coins[i] * thisCoinNum;
  }
  return totalCoins;
};
console.log(countCoins(46)); //[ 25, 10, 10, 1 ]

/*
Ex04:
Write a JavaScript function to extract unique
characters from a string .
*/

console.log("======================= getUniqueChars");

const getUniqueChars = (str) =>
  str
    .split("")
    .filter((item, index, arr) => arr.slice(index + 1).indexOf(item) === -1);

console.log(getUniqueChars("aaaaaaabbbbbsssddfgh"));
//[
//     'a', 'b', 's',
//     'd', 'f', 'g',
//     'h'
//   ]

// simle way doing above

const getUniqueChars2 = (str) => new Set(str.split(""));

console.log(getUniqueChars2("aaaaaaabbbbbsssddfgh")); //Set(7) { 'a', 'b', 's', 'd', 'f', 'g', 'h' }

/*
Ex05:
Write a JavaScript function to extract unique
characters from a string .
*/

console.log("==================== getNonRepeatedChars");

const getNonRepeatedChars = (str) =>
  str
    .split("")
    .filter(
      (item, index, arr) =>
        arr.filter((arrItem) => arrItem === item).length === 1
    );

console.log(getNonRepeatedChars("abacdcdbr"));
