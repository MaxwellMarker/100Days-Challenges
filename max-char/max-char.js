// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = (str) => {
    str = str.replace(' ', '');
    const arr = str.split('');
    let obj = {};
    arr.forEach(char => {
        if(obj[char]){
            obj[char]++;
        }else{
            obj[char] = 1;
        }
    });
    let maxCharacters = 0;
    let mostCommon;
    for(const char in obj) {
        if(obj[char] > maxCharacters){
            [maxCharacters, mostCommon] = [obj[char], char];
        };
    };
    return mostCommon;
}
console.log(maxChar("abcc cccccd"))
console.log(maxChar("apple 1231111"))