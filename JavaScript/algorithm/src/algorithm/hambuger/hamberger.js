function solution(ingredient) {
  var answer = 0;
  return answer;
}

// 빵 야채 고기 빵
// [야채, 빵, 빵, 야채, 고기, 빵, 야채, 고기, 빵]
// 배열의 앞에서부터 재료를 확인한다.
// 0이 아니면 사용한다.
// 배열의 값을 1내린다.
// 햄버거배열(length 4)에 한개씩 넣는다.
// 4 가 되면 count ++ 해주고 햄버거 배열을 0 으로 초기화해준다.

const materialCount = [0, 1, 1, 1, 1, 1, 0, 0, 0];
console.log("🚀 >> materialCount", materialCount);
const material = [
  "vegetable",
  "bread",
  "bread",
  "vegetable",
  "meat",
  "bread",
  "vegetable",
  "meat",
  "bread",
];
const materialBool = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];
const hamburger = [];

for (let i = 0; i < materialCount.length; ++i) {
  if (
    materialCount[i] > 0 &&
    materialBool[i] === false &&
    material[i] === "bread"
  ) {
    materialBool[i] = true;
    hamburger.push("bread");
  }
}

console.log("hamburger : ", hamburger);
console.log("material : ", material);
console.log("material.length : ", material.length);

// https://school.programmers.co.kr/learn/courses/30/lessons/133502?language=javascript
