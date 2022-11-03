function solution(mod1, mod2, max_range) {
  let answer = 0;

  for (let i = mod1; i <= max_range; i += mod1) {
    if (i % mod1 === 0 && i % mod2 !== 0) {
      answer++;
    }
  }

  console.log(answer);

  return answer;
}

const mod1 = 4;
const mod2 = 3;
const max_range = 20;

solution(mod1, mod2, max_range);
