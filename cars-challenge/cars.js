const paintColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black'];

const calculateColor = (daysSinceStart, daysOut) => {
    const sinceProdStart = daysSinceStart + daysOut;
    if (sinceProdStart % 7 === 5 || sinceProdStart % 7 === 6) {
        return "no cars today";
    };
    let workingDays = 0;
    for (let i = 0; i <= sinceProdStart; i++) {
        if(i % 7 === 5 || i % 7 === 6) {
            workingDays = workingDays
        }else{
            workingDays++;
        };
    };
    let colorIndex = (workingDays % 7) - 1;
    if (colorIndex < 0) {
        colorIndex += 7
    }
    return paintColors[colorIndex];
}
console.log(calculateColor(0, 0));
console.log(calculateColor(0, 1));
console.log(calculateColor(0, 2));
console.log(calculateColor(0, 3));
console.log(calculateColor(0, 4));
console.log(calculateColor(0, 5));
console.log(calculateColor(0, 6));
console.log(calculateColor(0, 7));
console.log(calculateColor(0, 8));
console.log(calculateColor(0, 9));
console.log(calculateColor(0, 10));
console.log(calculateColor(0, 11));
console.log(calculateColor(0, 12));
console.log(calculateColor(0, 13));
console.log(calculateColor(0, 14));
console.log(calculateColor(0, 15));
console.log(calculateColor(0, 16));