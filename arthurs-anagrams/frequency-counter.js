const isAnagram = (strA, strB) => {
    const hashMapA = createFrequencyCounter(strA);
    const hashMapB = createFrequencyCounter(strB);
    if(Object.keys(hashMapA).length !== Object.keys(hashMapB).length){
        return false;
    }

    for(let key in hashMapA) {
        if(hashMapA[key] !== hashMapB[key]) {
            return false;
        }
    }
    return true;
}

function createFrequencyCounter(str){
    const frequencyCounter = {};
    for(let char of str.replace(/[^\w]/g, '').toLowerCase()){
        frequencyCounter[char] = frequencyCounter[char] + 1 || 1;
    }
    return frequencyCounter
}