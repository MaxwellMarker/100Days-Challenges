//create an array with the info I need for the goblins
let goblins = [];
for(let i = 1; i <= 100; i++) {
    goblins.push({cured: false, num: i})
}

// cure and uncure the goblins 100 times
for(let i = 1; i <= 100; i++) {
    goblins.forEach((goblin) => {
        if (goblin.num % i === 0) {
            goblin.cured = !goblin.cured
        }
    })
}

//put the cured goblins numbers in an array
let finalCured = [];
goblins.forEach((goblin) => {
    if(goblin.cured){
        finalCured.push(goblin.num);
    };
});
console.log(finalCured);