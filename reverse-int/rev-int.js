// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInt = (n) => {
    let numString = `${n}`;
    let numArr = numString.split('');
    let negative = false;
    if(numArr[0] === '-'){
        negative = true;
        numArr.shift();
    };
    let finalNum = 0;
    numArr.forEach((num, i) => {
        const value = parseInt(num) * (10 ** i);
        if(negative){
            finalNum -= value;
        }else{
            finalNum += value;
        };
    });
    return finalNum;
};
console.log(reverseInt(15));
console.log(reverseInt(981));
console.log(reverseInt(500));
console.log(reverseInt(-15));
console.log(reverseInt(-90));