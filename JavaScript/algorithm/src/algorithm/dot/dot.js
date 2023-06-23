const Pythagoras = (k, d) => {
  let count = 0;

  const zeroPivot = (d * 2 + 1) / k;

  for (let i = 1; i <= d; i += k) {
    for (let j = 1; j <= d; j += k) {
      const distance = i ** 2 + j ** 2;
      const root = Math.sqrt(distance);

      if (root <= d) ++count;
    }
  }

  return count + zeroPivot;
};

const solution = (k, d) => {
  const count = Pythagoras(k, d);

  return count;
};

solution(2, 4);

// https://school.programmers.co.kr/learn/courses/30/lessons/140107
