function magic(matrix) {
    let sumInitial = matrix[0].reduce((a, b) => a + b, 0);

    for (let row = 0; row < matrix.length; row++) {
        let sumRow = matrix[row].reduce((a, b) => a + b, 0);
        if (sumRow != sumInitial) {
            return false;
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let sumCol = matrix.reduce((a, b) => a + b[col], 0);
        if (sumCol != sumInitial) {
            return false;
        }
    }
    return true;
}

console.log(magic(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));

console.log(magic(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]

));

console.log(magic(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
));