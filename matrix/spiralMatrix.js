// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

const matrix = (n) => {
    let spiMat = []
    let nums = [];
    for( let i = 1 ; i <= n*n ; i++ ){
        nums.push(i)
    }
    for( let i = 0 ; i < n ; i++ ){
        spiMat.push([])
    }
    const center = Math.floor(n/2)
    let offset;
    if(n % 2 === 0){
        offset = 1
    }else{
        offset = 0
    }
    for( let i = (0 + offset) ; i < (center + offset) ; i++ ){
        for( let x = 0 ; x <= i ; x++ ){
            const index = (center+i-1);
            spiMat[index].push(nums.pop())
        }
    }
    console.log(spiMat)
}
matrix(2)