function solution(ingredient) {
  var answer = 0;
  return answer;
}

// 빵 야채 고기 빵
// [야채, 빵, 빵, 야채, 고기, 빵, 야채, 고기, 빵]

// 주문은 배열
// 주문 오면 > 포장을 한다.

// 햄버거 1개 생성
const meterialCount = [0, 1, 1, 1, 1, 1, 0, 0, 0];
const material = [
  "vegetable",
  "bread",
  "bread",
  "begetable",
  "meat",
  "bread",
  "vegetable",
  "meat",
  "bread",
];
console.log("material : ", material);

const hamburgerCount = 0;
for (let i = 0; i < material.length; ++i) {
  if (material[i] === "bread" && meterialCount[i] > 0) {
    meterialCount[i] -= 1;
    for (let j = i; j < material.length; ++j) {
      if (material[j] === "vegetable" && meterialCount[j] > 0) {
        meterialCount[j] -= 1;
        for (let k = j; material.length; ++k) {
          if (material[k] === "meat" && meterialCount[k] > 0) {
            meterialCount[k] -= 1;
            for (let l = k; material.length; ++l) {
              if (material[l] === "bread" && meterialCount[l] > 0) {
                meterialCount[l] -= 1;
                hamburgerCount++;
              }
            }
          }
        }
      }
    }
  }
}

console.log(hamburgerCount);
// https://school.programmers.co.kr/learn/courses/30/lessons/133502?language=javascript
