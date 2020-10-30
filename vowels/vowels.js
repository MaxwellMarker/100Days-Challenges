// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vowels = (str) => {
    let letters = str.split('');
    let vowelCount = 0;
    letters.forEach((char) => {
        const x = char.toLowerCase()
        if(x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u'){
            vowelCount++;
        }
    })
    return vowelCount;
}

console.log(vowels('Baked Alaska'));
console.log(vowels('Why do you ask?'));