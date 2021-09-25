function orbit(input) {
    let width = input[0];
    let height = input[1];
    let startRow = input[2];
    let  startCol = input[3];

    let matrix = [];

    for (let i = 0; i <= width; i++) {
        matrix.push([]);
    }

    for (let row = 0; row < width; row++) {
        for (let col = 0; col < height; col++) {
            matrix[row][col] = Math.max(Math.abs(row - startRow), Math.abs(col - startCol)) + 1;
        }
    }
    console.log(matrix.map(row => row.join(' ')).join('\n'));
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);