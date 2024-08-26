const fibonacci = (n) =>
  Array.from({ length: n }, (v, i, arr) =>
    i > 1 ? (arr[i] = arr[i - 1] + arr[i - 2]) : i
  );
