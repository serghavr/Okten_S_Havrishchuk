function arraySum(numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return sum;
}
console.log(arraySum([1,-20,3]));