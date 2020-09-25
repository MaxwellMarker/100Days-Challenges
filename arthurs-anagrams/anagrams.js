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
  let output = string.replace(/[^\w\s]|/g, "");
  let output2 = output.replace(/ /g, "");
  return output2;
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
  const sortedArr1 = arr1.sort(sorter);
  const sortedArr2 = arr2.sort(sorter);
  const final1 = sortedArr1.join("");
  const final2 = sortedArr2.join("");
  console.log(final1, final2, arr1, arr2);
  if (final1 === final2) {
    return true;
  } else {
    return false;
  }
};
checkAnagram("rail safety", "fairy tales");
checkAnagram("RAIL! SAFETY!", "fairy tales");
checkAnagram('Hi there', 'Bye there')