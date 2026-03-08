function arrayMinValue(numbers) {
    let min = numbers[0];
    for (const number of numbers) {
        if (number < min) {
            min = number
        }
    }
    return min;
}
console.log(arrayMinValue([5,0,-2,14,35]));