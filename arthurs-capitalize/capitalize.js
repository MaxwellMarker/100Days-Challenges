// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const capitalize = (str) => {
    let wordArray = str.split(" ")
    wordArray.forEach((word, i) => {
        const first = word.charAt(0).toUpperCase()
        const theRest = word.slice(1)
        wordArray[i] = `${first}${theRest}`
    });
    const finalSentence = wordArray.join(' ')
    console.log(finalSentence)
}

capitalize('hi there, how is it going?')
capitalize('i love breakfast at bill miller bbq')