// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse = (str) => {
    let arr = str.split('');
    for (let i = 0; i < Math.floor(arr.length/2); i++) {
        const second = arr.length - i - 1;
        [arr[i], arr[second]] = [arr[second], arr[i]]
    }
    return arr.join('')
}
console.log(reverse('apple'))
console.log(reverse('hello'))
console.log(reverse('Greetings!'))