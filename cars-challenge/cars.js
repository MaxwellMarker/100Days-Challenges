const paintColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black'];

const calculateColor = (daysSinceStart, daysOut) => {
    const sinceProdStart = daysSinceStart + daysOut;
    console.log(sinceProdStart)
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
    console.log(workingDays)
    let colorIndex = (workingDays % 7) - 1;
    if (colorIndex < 0) {
        colorIndex += 7
    }
    console.log(colorIndex)
    return paintColors[colorIndex];
}

console.log(calculateColor(0, 30));
console.log(calculateColor(1, 1));
console.log(calculateColor(1, 2));
console.log(calculateColor(1, 3));
console.log(calculateColor(1, 4));