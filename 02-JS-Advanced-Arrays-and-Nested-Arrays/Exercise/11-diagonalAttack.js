function attacker(input) {

    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    let matrix = [];


    for (let i = 0; i < input.length; i++) {
        matrix[i] = (input[i].split(' ').map(Number));
    }

    for (let i = 0; i < matrix.length; i++) {
        primaryDiagonal += matrix[i][i];
        secondaryDiagonal += matrix[i][matrix.length - 1 - i];
    }

    if (primaryDiagonal == secondaryDiagonal) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row != col && col != matrix.length - 1 - row) {
                    matrix[row][col] = primaryDiagonal;
                }
            }
        }
    }

    printMatrix(matrix);

    function printMatrix(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            console.log(matrix[row].join(' '));
        }
    }
}

attacker(
    ['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);

attacker(
    ['1 1 1',
    '1 1 1',
    '1 1 0']
);