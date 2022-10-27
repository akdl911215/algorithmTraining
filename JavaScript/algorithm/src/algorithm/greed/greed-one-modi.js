const M = 10; // 배낭의 무게
const n = 4; // 물건의 개수
const p = [14, 15, 20, 9]; // 물체 i의 이익
const w = [4, 3, 5, 3]; // 물체 i의 무게
const ranking = []; // 1kg당 단위 이익이 랭킹 부여

// 무게 / 이익 으로 나눈 결과 (소수점 포함)
const result = p.map((el, key) => {
  ranking[key] = 0;
  return el / w[key];
});

for (let i = 0; i < n; ++i) {
  let rank = 1;
  for (let j = 0; j < n; ++j) {
    if (result[i] < result[j]) {
      ranking[i] = rank++;
    }
  }
}

let r = M;
let totalBenefit = 0;

ranking.map((el, key) => {
  for (let j = 0; j < n; ++j) {
    if (key === ranking[j]) {
      if (r === 0) {
        return totalBenefit;
      } else if (w[j] < r) {
        r -= w[j];
        totalBenefit += p[j];
      } else {
        let num = p[j] / w[j];
        totalBenefit += r * num;
        r -= r;
      }
    }
  }
});

console.log("totalBenefit : ", totalBenefit);
// https://akdl911215.tistory.com/410?category=1052678
