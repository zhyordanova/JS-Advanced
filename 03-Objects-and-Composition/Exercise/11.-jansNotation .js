function notation(array) {
    let numbers = [];

    for (let i = 0; i < array.length; i++) {
        if (Number(array[i])) {
            numbers.push(Number(array[i]));
        } else {
            if (numbers.length < 2) {
                console.log("Error: not enough operands!");
            }

            DoMath(numbers, array[i]);
        }
    }

    function DoMath(numbers, operator) {
        if (operator === '+') {
            numbers[numbers.length - 2] = numbers[numbers.length - 2] + numbers[numbers.length - 1];
            numbers.splice(-1, 1);
        } else if (operator === '-') {
            numbers[numbers.length - 2] = numbers[numbers.length - 2] - numbers[numbers.length - 1];
            numbers.splice(-1, 1);
        } else if (operator === '*') {
            numbers[numbers.length - 2] = numbers[numbers.length - 2] * numbers[numbers.length - 1];
            numbers.splice(-1, 1);
        } else if (operator === '/') {
            numbers[numbers.length - 2] = numbers[numbers.length - 2] / numbers[numbers.length - 1];
            numbers.splice(-1, 1);
        }
    }

    return numbers.length > 1 ? "Error: too many operands!" : numbers[0];
}


console.log(notation(
    [3,
    4,
    '+']
))

console.log(notation(
    [5,
    3,
    4,
    '*',
    '-']
))

console.log(notation(
    [7,
    33,
    8,
    '-']
))

console.log(notation(
    [15,
    '/']
))


