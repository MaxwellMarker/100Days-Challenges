// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

const palindrome = (str) => {
    let letters = str.split('');
    let isPalindrome = true;
    while(letters.length > 1){
        const first = letters.shift();
        const last = letters.pop()
        if(first !== last){
            isPalindrome = false;
            break
        }
    }
    return isPalindrome;
}
console.log(palindrome("abba"))
console.log(palindrome("abcdefg"))