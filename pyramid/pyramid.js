// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

const pyramid = (n) => {
    const l = (n * 2) - 1;
    for (let i = 0; i < n; i++) {
        let hashes = 1 + (i * 2);
        let spaces = l - hashes;
        let output = '';
        for (let x = 0; x < spaces/2; x++) {
            output += ' ';
        }
        for (let x = 0; x < hashes; x++) {
            output += '#';
        }
        for (let x = 0; x < spaces/2; x++) {
            output += ' ';
        }
        console.log(output)
    }
}
pyramid(30)