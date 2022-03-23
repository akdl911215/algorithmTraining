Array.matrix = function (m, n, initial) {
  let a,
    i,
    j,
    mat = [];
  for (i = 0; i < m; ++i) {
    a = [];
    for (j = 0; j < n; ++j) {
      a[j] = initial;
    }
    mat[i] = a;
  }
  return mat;
};

const N = 27;
const arr = Array.matrix(N, N, 0);
main();

function main() {
  for (let i = 0; i < N; ++i) {
    for (let j = 0; j < N; ++j) {
      star(i, j, N);
    }
    console.log("");
  }
}

function star(i, j, N) {
  if (Math.floor((i / N) % 3) === 1 && Math.floor((j / N) % 3) === 1) {
    process.stdout.write(" ");
  } else {
    if (Math.floor(N / 3) === 0) {
      process.stdout.write("*");
    } else {
      star(i, j, Math.floor(N / 3));
    }
  }
}
