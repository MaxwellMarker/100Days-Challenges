  
// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

const fib = (n) => {
    let prevNum = 0;
    let curNum = 1;
    for( let i = 1 ; i < n ; i++ ){
        [curNum, prevNum] = [curNum + prevNum, curNum]
    }
    return curNum
}

console.log(fib(1), fib(2), fib(4), fib(5), fib(6))