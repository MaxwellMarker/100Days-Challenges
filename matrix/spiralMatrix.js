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
    let yEnd = Math.floor(n/2);
    let xEnd = Math.ceil(n/2)-1;
    let x = -1;
    let y = 0;
    let offset;
    if(n % 2 === 0){
        offset = 1
    }else{
        offset = 0
    }
    for(let i = 0 ; i < yEnd + 1 ; i++){
        for( let a = (0 + i*2) ; a < n ; a++ ){
            if(nums.length < 1){
                null
            }else{
                x++
                spiMat[y][x] = nums.shift()
            }
        }
        for( let a = (1 + i*2) ; a < n ; a++ ){
            if(nums.length < 1){
                null
            }else{
                y++
                spiMat[y][x] = nums.shift()
            }
        }
        for( let a = (1 + i*2) ; a < n ; a++ ){
            if(nums.length < 1){
                null
            }else{
                x--
                spiMat[y][x] = nums.shift()
            }
        }
        for( let a = (2 + i*2) ; a < n ; a++ ){
            if(nums.length < 1){
                null
            }else{
                y--
                spiMat[y][x] = nums.shift()
            }
        }
    }
    spiMat.forEach((item)=>{
        console.log(item)
    })
}
matrix(2)
matrix(3)
matrix(4)
matrix(5)
matrix(6)
matrix(7)
matrix(8)
matrix(9)
matrix(10)