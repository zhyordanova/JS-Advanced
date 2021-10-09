function diadonalsums(matrix) {
  const last = matrix.length - 1;
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;

  for (let i = 0; i < matrix.length; i++) {
    primaryDiagonal += matrix[i][i];
    secondaryDiagonal += matrix[i][last - i];
  }

  console.log(`${primaryDiagonal} ${secondaryDiagonal}`);
}

diadonalsums(
  [[20, 40],
  [10, 60]
]);

diadonalsums(
  [[3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4]
]);