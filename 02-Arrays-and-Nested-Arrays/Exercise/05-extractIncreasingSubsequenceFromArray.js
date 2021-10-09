function solve(array) {
    const result = [];
    let biggest = Number.MIN_SAFE_INTEGER;

    array.reduce((accumulated, current) => {
        if (current >= biggest) {
            biggest = current;
            accumulated.push(current);
        }

        return accumulated;

    }, result);

    return result;
}

console.log(solve(
    [1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));

console.log(solve(
    [1,
    2,
    3,
    4]
));

console.log(solve(
    [20,
    3,
    2,
    15,
    6,
    1]
));

