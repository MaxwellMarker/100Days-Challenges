// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
const formatString = (string) => {
  let output = string.replace(/[^\w]|/g, "");
  return output;
};
const sorter = (a, b) => {
  if (a > b) {
    return -1;
  }
  if (b > a) {
    return 1;
  }
  return 0;
};
const checkAnagram = (string1, string2) => {
  let arr1 = formatString(string1).toLowerCase().split("");
  let arr2 = formatString(string2).toLowerCase().split("");
  arr1 = arr1.sort(sorter);
  arr2 = arr2.sort(sorter);
  arr1 = arr1.join("");
  arr2 = arr2.join("");
  if (arr1 === arr2) {
    return true;
  } else {
    return false;
  }
};
console.log(checkAnagram("rail safety", "fairy tales"));
console.log(checkAnagram("RAIL! SAFETY!", "fairy tales"));
console.log(checkAnagram('Hi there', 'Bye there'));