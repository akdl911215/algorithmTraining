const Pythagoras = (k, d) => {
  const zeroPivot = (d * 2 + 1) / k;
  let count =
    k % 2 === 0 && d % 2 === 0 ? Math.ceil(zeroPivot) : Math.floor(zeroPivot);
  console.log(count);

  for (let i = k; i <= d; i += k) {
    for (let j = k; j <= d; j += k) {
      console.log(`i:${i}, j:${j}`);
      const distance = i ** 2 + j ** 2;
      console.log("distance : ", distance);
      const root = Math.sqrt(distance);
      console.log("root : ", root);

      if (root <= d) {
        ++count;
      }
    }
  }

  return count;
};

const solution = (k, d) => console.log(Pythagoras(k, d));

solution(3, 5);

// https://school.programmers.co.kr/learn/courses/30/lessons/140107
