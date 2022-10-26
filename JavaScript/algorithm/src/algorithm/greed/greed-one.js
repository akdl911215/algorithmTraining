const M = 10; // 배낭의 무게
const n = 4; // 물건의 개수
const p = [14, 15, 20, 9]; // 물체 i의 이익
const w = [4, 3, 5, 3]; // 물체 i의 무게
const result = []; // 무게 / 이익 으로 나눈 결과 (소수점 포함)
const ranking = []; // 1kg당 단위 이익이 랭킹 부여
const x = []; // 배낭에 들어간 물체 i의 비율

for (let i = 0; i < n; ++i) {
  result[i] = p[i] / w[i];
  ranking[i] = 0;
  x[i] = 0;
}
console.log("result : ", result);
console.log("ranking : ", ranking);
console.log("x : ", x);

for (let i = 0; i < n; ++i) {
  let rank = 1;
  for (let j = 0; j < n; ++j) {
    if (result[i] < result[j]) {
      ranking[i] = rank++;
    }
  }
}
console.log("2 ranking : ", ranking);

let r = M;
let totalBenefit = 0;
for (let i = 0; i < n; ++i) {
  for (let j = 0; j < n; ++j) {
    if (i === ranking[j]) {
      if (w[j] < r) {
        r -= w[j];
        totalBenefit += p[j];
        console.log("if totalBenefit : ", totalBenefit);
      } else {
        let num = p[j] / w[j];
        totalBenefit += r * num;
        r -= r;

        console.log("else totalBenefit : ", totalBenefit);
      }

      if (r === 0) break;
    }
  }
}

console.log("totalBenefit : ", totalBenefit);
// https://akdl911215.tistory.com/410?category=1052678
