function calculateMatrixSum(matrix) {
  return matrix.flat().reduce((acc, val) => acc + val, 0);
}
